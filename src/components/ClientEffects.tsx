"use client";
import dynamic from "next/dynamic";
import ScrollProgress from "@/components/ScrollProgress";

const CursorFollower = dynamic(() => import("@/components/CursorFollower"), { ssr: false });

export default function ClientEffects() {
  return (
    <>
      <ScrollProgress />
      <CursorFollower />
    </>
  );
}
