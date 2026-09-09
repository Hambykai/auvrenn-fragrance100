import type { Metadata } from "next";
import { CoverImage } from "@/components/cover-image";
import { EditorialLink } from "@/components/editorial-link";
import { images } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Story",
};

export default function StoryPage() {
  return (
    <>
      <section className="story-opening dark-section">
        <div className="story-opening-copy">
          <p className="eyebrow">Our story</p>
          <h1>
            A house at
            <br />
            the beginning
          </h1>
        </div>
        <CoverImage
          src={images.studio}
          alt="Auvrenn’s modern independent fragrance studio"
          className="story-opening-image"
          priority
          sizes="(max-width: 1000px) 100vw, 55vw"
        />
      </section>

      <section className="story-manifesto section-pad">
        <p className="eyebrow">Independent by design</p>
        <h2>
          Auvrenn is a new fragrance house built around focus, clarity, and one
          strong point of view
        </h2>
        <div className="story-copy">
          <p>
            We are starting with a single cologne because meaningful work
            deserves full attention. Every choice—from the scent profile to the
            bottle in your hand—is being considered as part of one complete
            experience.
          </p>
          <p>
            There is no inherited mythology and no borrowed nostalgia. Auvrenn is
            new, independent, and comfortable saying so. Our ambition is simple:
            create modern fragrance with lasting character.
          </p>
        </div>
      </section>

      <section className="principles dark-section">
        <p className="eyebrow">How we work</p>
        <div className="principles-grid">
          <article className="principle">
            <span>01</span>
            <h3>Purpose before pace</h3>
            <p>
              We will release when the fragrance and experience are ready—not to
              meet a calendar.
            </p>
          </article>
          <article className="principle">
            <span>02</span>
            <h3>Clarity in every detail</h3>
            <p>
              Clean design, direct communication, and decisions that serve the
              scent.
            </p>
          </article>
          <article className="principle">
            <span>03</span>
            <h3>One release at a time</h3>
            <p>
              We would rather make one distinctive fragrance than a crowded first
              collection.
            </p>
          </article>
        </div>
      </section>

      <section className="atelier-section section-pad">
        <CoverImage
          src={images.materials}
          alt="A clean Auvrenn studio table with fragrance prototype"
          className="atelier-image"
          sizes="(max-width: 1000px) 100vw, 50vw"
        />
        <div className="atelier-copy">
          <p className="eyebrow">In development</p>
          <h2>
            Built for now
            <br />
            Made to last
          </h2>
          <p>
            Terra is in final development. We are refining the formula, testing
            the complete presentation, and building a release experience that
            feels as considered as the fragrance itself.
          </p>
          <p>
            Our debut bottle is deliberately architectural: clear glass, a quiet
            label, and a tactile black cap. Nothing added without purpose.
          </p>
          <EditorialLink href="/shop">Join the debut release list</EditorialLink>
        </div>
      </section>

      <section className="story-signature">
        <p>This is only</p>
        <h2>The beginning</h2>
        <span>Auvrenn</span>
      </section>
    </>
  );
}
