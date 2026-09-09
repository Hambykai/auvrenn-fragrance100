import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

type EditorialLinkProps = {
  href: string;
  children: React.ReactNode;
  light?: boolean;
  className?: string;
};

export function EditorialLink({
  href,
  children,
  light,
  className,
}: EditorialLinkProps) {
  return (
    <Link
      href={href}
      className={cn("editorial-link", light && "light", className)}
    >
      {children}
      <ArrowRight size={14} />
    </Link>
  );
}
