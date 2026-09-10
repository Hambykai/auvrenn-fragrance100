import { CoverImage } from "@/components/cover-image";
import { EditorialLink } from "@/components/editorial-link";
import { debut, statusLabel } from "@/lib/site";

function NoteTitle({ title }: { title: string }) {
  const [first, second] = title.split(" & ");
  if (!second) return <h3>{title}</h3>;
  return (
    <h3>
      {first}
      <br />
      &amp; {second}
    </h3>
  );
}

export default function HomePage() {
  const { notes, images } = debut;

  return (
    <>
      <section className="home-hero dark-section">
        <div className="hero-copy">
          <div className="launch-badge">
            <span />
            Debut · {statusLabel(debut.status)}
          </div>
          <p className="eyebrow hero-eyebrow">A scent for</p>
          <h1>the in-between</h1>
          <p className="hero-deck">
            {debut.name} by Auvrenn. {debut.summary}
          </p>
          <EditorialLink href={debut.href} light>
            Preview {debut.name}
          </EditorialLink>
        </div>
        <div className="hero-visual">
          <CoverImage
            src={images.bottle}
            alt={`${debut.name} by Auvrenn, 75 ml Eau de Parfum`}
            className="absolute inset-0 h-full w-full"
            imageClassName="object-[center_52%]"
            priority
            sizes="(max-width: 1000px) 100vw, 58vw"
          />
          <div className="hero-caption">
            <span>
              Debut / {debut.number}
            </span>
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
            <NoteTitle title={notes.top.title} />
            <p>{notes.top.body}</p>
          </article>
          <article className="note-card middle">
            <span>02 / Heart</span>
            <NoteTitle title={notes.heart.title} />
            <p>{notes.heart.body}</p>
          </article>
          <article className="note-card">
            <span>03 / Base</span>
            <NoteTitle title={notes.base.title} />
            <p>{notes.base.body}</p>
          </article>
        </div>
        <div className="composition-footer">
          <EditorialLink href={debut.href}>Explore the fragrance</EditorialLink>
          <span>{debut.family}</span>
        </div>
      </section>

      <section className="material-story dark-section">
        <CoverImage
          src={images.studio}
          alt={`${debut.name} by Auvrenn in a sunlit studio`}
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
          src={images.portrait}
          alt={`${debut.name} by Auvrenn on limestone`}
          className="product-image-wrap"
          sizes="(max-width: 1000px) 100vw, 50vw"
        />
        <div className="product-info">
          <div className="launch-badge dark-ink">
            <span />
            {statusLabel(debut.status)}
          </div>
          <p className="eyebrow">The debut release</p>
          <h2>
            {debut.name}
            <br />
            by Auvrenn
          </h2>
          <p className="product-volume">
            {debut.volume} / Single release
          </p>
          <p>
            An earthy, grounded woody amber with a bright opening, a quiet
            textured heart, and a confident, close-wearing finish.
          </p>
          <div className="product-actions">
            <EditorialLink href="/shop">Join the release list</EditorialLink>
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
          alt={`${debut.name} by Auvrenn in a dark alcove`}
          className="absolute inset-0 h-full w-full"
          imageClassName="object-[70%_center]"
          sizes="100vw"
        />
        <div className="campaign-overlay" />
        <div className="campaign-copy">
          <p className="eyebrow">Single release / {debut.number}</p>
          <h2>The beginning</h2>
        </div>
      </section>
    </>
  );
}
