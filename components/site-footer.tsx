import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ReleaseForm } from "@/components/release-form";
import { debut, nav, site, statusLabel } from "@/lib/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <section className="newsletter dark-section">
        <div className="newsletter-inner">
          <h2>
            Be the first
            <br />
            to know
          </h2>
          <div>
            <ReleaseForm variant="inline" />
            <p className="newsletter-note">
              Debut timing, private previews, and first access. No noise.
            </p>
          </div>
        </div>
      </section>
      <div className="footer-top">
        <div>
          <span className="footer-mark">{site.name}</span>
          <p>Independent fragrance, made with intent.</p>
        </div>
        <div className="footer-links">
          <div>
            <span>Explore</span>
            <Link href="/">Home</Link>
            {nav
              .filter((item) => item.href !== "/contact")
              .map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
          </div>
          <div>
            <span>Assistance</span>
            <Link href="/faq">FAQ</Link>
            <Link href="/contact">Contact</Link>
            <a href={`mailto:${site.email}`}>Email us</a>
          </div>
          <div>
            <span>Follow</span>
            <a
              href={site.instagram}
              className="social-link"
              target="_blank"
              rel="noreferrer"
            >
              Instagram <ArrowUpRight size={12} />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2026 {site.name}</span>
        <span>
          Debut / {statusLabel(debut.status)}
        </span>
      </div>
    </footer>
  );
}
