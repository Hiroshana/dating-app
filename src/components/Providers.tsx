"use client";

import { NextUIProvider } from "@nextui-org/react";
import React, { ReactNode } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        hideProgressBar
        className="z-50"
      />
      ;<NextUIProvider>{children}</NextUIProvider>;
    </>
  );
};

export default Providers;
