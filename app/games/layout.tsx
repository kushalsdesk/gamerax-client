import Navbar from "@/components/Navbar";
import { Suspense } from "react";
import Loading from "./loading";

export default function GameLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <Suspense fallback={<Loading />}>{children}</Suspense>
    </>
  );
}
