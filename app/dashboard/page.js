"use client";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Dashboard() {
  const { user } = useUser();

  const fileList = useQuery(api.fileStorage.GetUserFiles, {
    userEmail: user?.primaryEmailAddress?.emailAddress,
  });

  console.log(fileList);

  return (
    <div>
      <h2 className="font-medium text-3xl">Workspace</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-col-5 gap-5 mt-10">
        {fileList?.length > 0
          ? fileList?.map((file, index) => (
              <Link key={file.fileId} href={`/workspace/${file.fileId}`}>
                <div
                  key={index}
                  className="flex p-5 shadow-md rounded-md flex-col items-center justify-center border cursor-pointer hover:scale-105 transition-all"
                >
                  <Image src={"/pdf.png"} alt="file" width={50} height={50} />
                  <h2 className="mt-3 font-medium text-lg">{file?.fileName}</h2>
                  {/*<h2>{file?._creationTime}</h2>*/}
                </div>
              </Link>
            ))
          : [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <div
                key={index}
                className="bg-slate-200 rounded-md h-[150px] animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
}

export default Dashboard;
