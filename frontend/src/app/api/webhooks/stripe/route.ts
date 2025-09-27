import Stripe from "stripe";
import {env} from "~/env";
import {NextResponse} from "next/server";
import {db} from "~/server/db";


const stripe = new Stripe(
    env.STRIPE_SECRET_KEY,
    {
      apiVersion: "2025-08-27.basil",
    }
);

const webhookSecret = env.STRIPE_WEBHOOK_SECRET;

export async function POST(req: Request) {
  // Verify the event came from Stripe
  try {
    const body = await req.text();
    const signature = req.headers.get("stripe-signature") ?? "";

    let event: Stripe.Event;

    try {
      event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
    } catch (e) {
      console.error("Webhook signature verification failed", e);
      return new NextResponse("Webhook signature verification failed", { status: 400 });
    }

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const customerId = session.customer as string;

      const retrievedSession = await stripe.checkout.sessions.retrieve(
          session.id,
          { expand: ["line_items"] },
      );

      const lineItems = retrievedSession.line_items;
      if (lineItems && lineItems.data.length > 0) {
        const priceId = lineItems.data[0]?.price?.id ?? undefined;

        if (priceId) {
          let creditsToAdd = 0;

          if (priceId === env.STRIPE_SMALL_CREDIT_PACK) {
            creditsToAdd = 50;
          } else if (priceId === env.STRIPE_MEDIUM_CREDIT_PACK) {
            creditsToAdd = 150;
          } else if (priceId === env.STRIPE_LARGE_CREDIT_PACK) {
            creditsToAdd = 500;
          }

          await db.user.update({
            where: { stripeCustomerId: customerId },
            data: {
              credits: {
                increment: creditsToAdd,
              },
            },
          });
        }
      }
    }

    return new NextResponse(null, { status: 200 });
  } catch (e) {
    console.log("Error processing webhook:", e);
    return new NextResponse("Webhook error", { status: 500 });
  }
}
