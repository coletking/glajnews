"use client";
import React from "react";
import { useEffect } from "react";

export default function Logoutrout() {
  const lof = async () => {
    window.localStorage.removeItem("token");
    window.location.href = "/auth/login";
  };
  useEffect(() => {
    lof();
  }, []);

  return <div></div>;
}
