import clsx from "clsx";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

type TemplateBackButtonProps = {
  href?: string;
  label?: string;
  fixed?: boolean;
  className?: string;
};

export function TemplateBackButton({
  href = "/realisations",
  label = "Retour aux réalisations",
  fixed = true,
  className,
}: TemplateBackButtonProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "inline-flex items-center gap-2 rounded-full border border-slate-200/70 bg-white/92 px-4 py-2.5 text-sm font-medium text-slate-900 shadow-[0_12px_30px_rgba(15,23,42,0.16)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:bg-white",
        fixed && "fixed bottom-4 left-4 z-[70] sm:bottom-6 sm:left-6",
        className,
      )}
    >
      <ArrowLeft className="h-4 w-4" />
      <span>{label}</span>
    </Link>
  );
}
