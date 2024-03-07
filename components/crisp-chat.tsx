"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("cef5a671-658d-497b-b0cf-7603817d607d");
  }, []);

  return null;
};