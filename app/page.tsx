import { CoverImage } from "@/components/cover-image";
import { EditorialLink } from "@/components/editorial-link";
import { images } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section className="home-hero dark-section">
        <div className="hero-copy">
          <div className="launch-badge">
            <span />
            Single release · Coming soon
          </div>
          <p className="eyebrow hero-eyebrow">A scent for</p>
          <h1>
            the in-between
          </h1>
          <p className="hero-deck">
            Terra by Auvrenn. An earthy, grounded scent built to leave a quiet
            impression.
          </p>
          <EditorialLink href="/fragrance" light>
            Preview the debut
          </EditorialLink>
        </div>
        <div className="hero-visual">
          <CoverImage
            src={images.bottle}
            alt="Terra by Auvrenn flagship bottle"
            className="absolute inset-0 h-full w-full"
            imageClassName="object-[center_50%]"
            priority
            sizes="(max-width: 1000px) 100vw, 58vw"
          />
          <div className="hero-caption">
            <span>Debut / 01</span>
            <span>Release date to be announced</span>
          </div>
        </div>
      </section>

      <section id="composition" className="composition section-pad">
        <div className="section-grid-head">
          <p className="eyebrow">The debut composition</p>
          <h2>
            Bright at first
            <br />
            Endlessly deep
          </h2>
        </div>
        <div className="notes-grid">
          <article className="note-card">
            <span>01 / Top</span>
            <h3>
              Bergamot
              <br />
              &amp; Mandarin
            </h3>
            <p>
              A dry luminous opening, cool spice against clean, bright chips of
              citrus peel.
            </p>
          </article>
          <article className="note-card middle">
            <span>02 / Heart</span>
            <h3>
              Neroli
              <br />
              &amp; Labdanum
            </h3>
            <p>
              A radiant floral-resinous heart, blending luminous neroli with an
              airy diffusion and modern warmth.
            </p>
          </article>
          <article className="note-card">
            <span>03 / Base</span>
            <h3>
              Polished woods
              <br />
              &amp; Amber
            </h3>
            <p>
              A polished wood, amber resin, skin-resonant trace that stays close.
            </p>
          </article>
        </div>
        <div className="composition-footer">
          <EditorialLink href="/fragrance">Explore the fragrance</EditorialLink>
          <span>Woody · Amber · Citrus</span>
        </div>
      </section>

      <section className="material-story dark-section">
        <CoverImage
          src={images.studio}
          alt="Auvrenn’s clean contemporary fragrance studio"
          className="material-image"
          sizes="(max-width: 1000px) 100vw, 55vw"
        />
        <div className="material-copy">
          <p className="eyebrow">A new independent house</p>
          <h2>
            One idea
            <br />
            Fully realized
          </h2>
          <p>
            Auvrenn is building its first release with intention. Every decision
            is focused on the fragrance, the object, and the experience of wearing
            it.
          </p>
          <EditorialLink href="/story" light>
            Meet Auvrenn
          </EditorialLink>
        </div>
      </section>

      <section className="quote-section">
        <p className="quote-mark" aria-hidden>
          “
        </p>
        <blockquote>
          We are not launching a collection, we&apos;re introducing one fragrance
          worth remembering.
        </blockquote>
        <p className="quote-credit">The Auvrenn approach</p>
      </section>

      <section className="product-feature section-pad">
        <CoverImage
          src={images.plinth}
          alt="Terra by Auvrenn in architectural studio light"
          className="product-image-wrap"
          sizes="(max-width: 1000px) 100vw, 50vw"
        />
        <div className="product-info">
          <div className="launch-badge dark-ink">
            <span />
            Coming soon
          </div>
          <p className="eyebrow">The debut release</p>
          <h2>
            Terra
            <br />
            by Auvrenn
          </h2>
          <p className="product-volume">75 ml / Single release</p>
          <p>
            An earthy, grounded woody amber with a bright opening, a quiet
            textured heart, and a confident, close-wearing finish.
          </p>
          <div className="product-actions">
            <EditorialLink href="/shop">Release details</EditorialLink>
          </div>
          <ul className="product-meta">
            <li>
              <span>Status</span>
              <span>In final development</span>
            </li>
            <li>
              <span>First access</span>
              <span>Release list members</span>
            </li>
            <li>
              <span>Launch</span>
              <span>Date to be announced</span>
            </li>
          </ul>
        </div>
      </section>

      <section className="campaign-banner dark-section">
        <CoverImage
          src={images.campaign}
          alt="Terra by Auvrenn in a modern architectural space"
          className="absolute inset-0 h-full w-full"
          imageClassName="object-[63%_center]"
          sizes="100vw"
        />
        <div className="campaign-overlay" />
        <div className="campaign-copy">
          <p className="eyebrow">Single release / 01</p>
          <h2>The beginning</h2>
        </div>
      </section>
    </>
  );
}
