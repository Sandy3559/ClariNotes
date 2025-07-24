import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function WorkspaceHeader({ fileName }) {
  const handleLogoClick = (e) => {
    e.preventDefault();
    window.location.href = "/dashboard";
  };

  return (
    <div className="p-4 flex justify-between shadow-md pointer-cursor">
      <Link href="/dashboard" onClick={handleLogoClick}>
        <Image src={"/logo.png"} alt="logo" width={140} height={100} />
      </Link>
      <h2 className="font-bold">{fileName}</h2>
      <div className="flex gap-2 items-center">
        <Button>Save</Button>
        <UserButton />
      </div>
    </div>
  );
}

export default WorkspaceHeader;
