import type { Metadata } from "next";
import { ContactForm } from "@/components/contact-form";
import { CoverImage } from "@/components/cover-image";
import { images, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <>
      <section className="contact-page dark-section">
        <div className="contact-intro">
          <p className="eyebrow">Contact Auvrenn</p>
          <h1>
            Begin a
            <br />
            conversation
          </h1>
          <p>
            For release questions, press, partnerships, or the simple pleasure of
            saying hello.
          </p>
          <div className="contact-direct">
            <span>Direct correspondence</span>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span>Replies within two business days</span>
          </div>
        </div>
        <div className="contact-form-wrap">
          <ContactForm />
        </div>
      </section>
      <section className="contact-editorial">
        <CoverImage
          src={images.studio}
          alt="Auvrenn’s modern fragrance development studio"
          className="contact-editorial-image"
          sizes="(max-width: 1000px) 100vw, 65vw"
        />
        <div>
          <p className="eyebrow">Independent by design</p>
          <h2>
            New house
            <br />
            Clear intent
          </h2>
          <p>
            We are preparing our first release and building every part of Auvrenn
            from the ground up.
          </p>
        </div>
      </section>
    </>
  );
}
