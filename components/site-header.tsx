"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { debut, nav, site, statusLabel } from "@/lib/site";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <Link href="/" className="wordmark" aria-label={`${site.name} home`}>
        {site.name}
      </Link>

      <nav className="desktop-nav" aria-label="Primary">
        {nav.map((item) => {
          const active =
            pathname === item.href || pathname.startsWith(`${item.href}/`);
          return (
            <Link
              key={item.href}
              href={item.href}
              className={active ? "nav-link active" : "nav-link"}
            >
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="header-actions">
        <span className="release-status">
          <span className="status-dot" aria-hidden />
          {statusLabel(debut.status)}
        </span>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            render={
              <Button
                nativeButton={false}
                variant="ghost"
                size="icon"
                className="menu-button h-11 w-11 rounded-none text-[var(--ink)] hover:bg-transparent"
                aria-label="Open menu"
              />
            }
          >
            <Menu size={22} />
          </SheetTrigger>
          <SheetContent
            side="top"
            showCloseButton={false}
            className="mobile-menu-sheet h-dvh max-h-dvh w-full gap-0 rounded-none border-0 bg-[var(--ink)] p-0 text-[var(--paper)] shadow-none sm:max-w-none"
          >
            <div className="mobile-menu-top">
              <SheetTitle className="wordmark text-[var(--paper)]">
                {site.name}
              </SheetTitle>
              <SheetDescription className="sr-only">
                Auvrenn site navigation
              </SheetDescription>
              <SheetClose
                render={
                  <Button
                    nativeButton={false}
                    variant="ghost"
                    size="icon"
                    className="h-11 w-11 rounded-none text-[var(--paper)] hover:bg-transparent"
                    aria-label="Close menu"
                  />
                }
              >
                <X size={22} />
              </SheetClose>
            </div>
            <nav className="mobile-nav" aria-label="Mobile">
              {nav.map((item) => (
                <SheetClose
                  key={item.href}
                  nativeButton={false}
                  render={<Link href={item.href} className="mobile-nav-link" />}
                >
                  <span>{item.label}</span>
                  <span className="nav-number">{item.number}</span>
                </SheetClose>
              ))}
            </nav>
            <p className="mobile-menu-caption">{site.tagline}</p>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
