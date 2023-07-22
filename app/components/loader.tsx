"use client";

import { Spinner } from "flowbite-react";

const Loader = () => {
  return <Spinner aria-label="spinner" />;
};

export const LoadingPage = () => {
  return (
    <div className="flex-col gap-2 absolute top-0 right-0 flex h-screen w-screen justify-center items-center">
      <Loader />
    </div>
  );
};
