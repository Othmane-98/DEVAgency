"use client";

import { usePathname } from "next/navigation";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { WhatsAppFloat } from "@/components/common/WhatsAppFloat";

export function ConditionalShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isTemplatePage = pathname.startsWith("/templates/");

  return (
    <>
      {!isTemplatePage && <Header />}
      {children}
      {!isTemplatePage && <Footer />}
      {!isTemplatePage && <WhatsAppFloat />}
    </>
  );
}
