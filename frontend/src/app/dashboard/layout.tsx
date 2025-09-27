"use server";

import type {ReactNode} from "react";
import {auth} from "~/server/auth";
import {redirect} from "next/navigation";
import {db} from "~/server/db";
import {Toaster} from "~/components/ui/sonner";
import NavHeader from "~/components/nav-header";

export default async function DashboardLayout({ children }: {children: ReactNode}) {
  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const user = await db.user.findUniqueOrThrow({
    where: {
      id: session.user.id,
    },
    select: {
      credits: true,
      email: true,
    },
  });

  return (
      <div className='flex min-h-screen flex-col'>
        <NavHeader credits={user.credits} email={user.email} />
        <main className='container mx-auto flex-1 py-6'>{children}</main>
        <Toaster />
      </div>
  )
}