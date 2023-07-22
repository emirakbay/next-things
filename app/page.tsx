"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";
import Image from "next/image";
import { LoadingPage } from "./components/loader";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <LoadingPage />;
  }

  if (!session) {
    return (
      <>
        <div className="flex-col gap-2 absolute top-0 right-0 flex h-screen w-screen justify-center items-center">
          Hello there
          <button
            onClick={() => signIn()}
            className="rounded-md bg-slate-700 px-2"
          >
            Sign In
          </button>
        </div>
      </>
    );
  }

  if (session) {
    return (
      <>
        <div className="flex-col gap-2 absolute top-0 right-0 flex h-screen w-screen justify-center items-center">
          <Image
            src={session.user?.image as string}
            alt={"avatar"}
            width={56}
            height={56}
          ></Image>
          Hello there {session.user?.name}
          <button
            onClick={() => signOut()}
            className="rounded-md bg-slate-700 px-2"
          >
            Sign Out
          </button>
        </div>
      </>
    );
  }
}
