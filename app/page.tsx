"use client";
import React from "react";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (!session) {
    return (
      <>
        <div className="flex-col gap-2 absolute top-0 right-0 flex h-screen w-screen justify-center items-center">
          Hello there
          <button onClick={() => signIn()}>Sign In</button>
        </div>
      </>
    );
  }

  if (session) {
    return (
      <>
        <div className="flex-col gap-2 absolute top-0 right-0 flex h-screen w-screen justify-center items-center">
          Hello there
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      </>
    );
  }
}
