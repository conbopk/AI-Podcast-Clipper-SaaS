"use server";

import {DashboardClient} from "~/components/dashboard-client";
import {auth} from "~/server/auth";
import {redirect} from "next/navigation";
import {db} from "~/server/db";


export default async function DashboardPage() {

  const session = await auth();

  if (!session?.user?.id) {
    redirect("/login");
  }

  const userData = await db.user.findUniqueOrThrow({
    where: {
      id: session.user.id,
    },
    select: {
      uploadedFiles: {
        where: {
          uploaded: true,
        },
        select: {
          id: true,
          s3Key: true,
          displayName: true,
          status: true,
          createdAt: true,
          _count: {
            select: {
              clips: true,
            },
          },
        },
      },
      clips: {
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  const formatedFiles = userData.uploadedFiles.map((file) => ({
    id: file.id,
    s3Key: file.s3Key,
    filename: file.displayName ?? "Unknown filename",
    status: file.status,
    clipsCount: file._count.clips,
    createdAt: file.createdAt,
  }));

  return (
      <DashboardClient uploadedFiles={formatedFiles} clips={userData.clips} />
  );
}