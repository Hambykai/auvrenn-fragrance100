import type { Metadata } from "next";
import { CoverImage } from "@/components/cover-image";
import { debut } from "@/lib/site";

export const metadata: Metadata = {
  title: debut.name,
};

export default function FragrancePage() {
  const { notes, images } = debut;

  return (
    <>
      <section className="page-hero fragrance-hero dark-section">
        <CoverImage
          src={images.campaign}
          alt={`${debut.name} by Auvrenn in warm architectural light`}
          className="absolute inset-0 h-full w-full"
          imageClassName="object-[68%_center]"
          priority
          sizes="100vw"
        />
        <div className="image-scrim" />
        <div className="page-hero-copy">
          <p className="eyebrow">Single release · Coming soon</p>
          <h1>
            {debut.name}
            <br />
            by Auvrenn
          </h1>
          <p>
            A study in contrast—bright citrus, radiant neroli, and polished woods
            grounded in amber.
          </p>
        </div>
      </section>

      <section className="fragrance-intro section-pad">
        <div>
          <p className="eyebrow">Olfactive portrait</p>
        </div>
        <h2>
          The moment between
          <br />
          presence and memory
        </h2>
        <div className="two-column-copy">
          <p>
            {debut.name} opens with {notes.top.title}—{notes.top.body.toLowerCase()}
          </p>
          <p>{notes.heart.body} {notes.base.body}</p>
        </div>
      </section>

      <section className="olfactive-architecture dark-section">
        <div className="architecture-title">
          <p className="eyebrow">Olfactive architecture</p>
          <h2>
            Three movements
            <br />
            One clear idea
          </h2>
        </div>
        <div className="architecture-rows">
          <div className="architecture-row">
            <span className="roman">I</span>
            <h3>Top notes</h3>
            <p>{notes.top.title}</p>
            <span>{notes.top.body}</span>
          </div>
          <div className="architecture-row">
            <span className="roman">II</span>
            <h3>Heart notes</h3>
            <p>{notes.heart.title}</p>
            <span>{notes.heart.body}</span>
          </div>
          <div className="architecture-row">
            <span className="roman">III</span>
            <h3>Base notes</h3>
            <p>{notes.base.title}</p>
            <span>{notes.base.body}</span>
          </div>
        </div>
      </section>

      <section className="ingredient-editorial section-pad">
        <div className="ingredient-copy">
          <p className="eyebrow">A focused formula</p>
          <h2>
            Chosen for
            <br />
            what they evoke
          </h2>
          <p>
            Each note serves a clear role. The formula is being refined for
            texture, evolution, and balance—not immediate volume.
          </p>
          <div className="fact-list">
            <div>
              <span>01</span>
              <p>
                <strong>Brightness</strong> — {notes.top.title}
              </p>
            </div>
            <div>
              <span>02</span>
              <p>
                <strong>Radiance</strong> — Neroli and airy warmth
              </p>
            </div>
            <div>
              <span>03</span>
              <p>
                <strong>Grounding</strong> — Polished woods and amber
              </p>
            </div>
          </div>
        </div>
        <CoverImage
          src={images.materials}
          alt={`The core materials behind ${debut.name} by Auvrenn`}
          className="ingredient-image"
          sizes="(max-width: 1000px) 100vw, 50vw"
        />
      </section>

      <section className="wear-section">
        <p className="eyebrow">Release status</p>
        <h2>
          The final composition
          <br />
          is taking shape
        </h2>
        <div className="wear-stats">
          <div>
            <strong>{debut.number}</strong>
            <span>Flagship debut</span>
          </div>
          <div>
            <strong>{debut.volume}</strong>
            <span>Planned presentation</span>
          </div>
          <div>
            <strong>2026</strong>
            <span>Target debut window</span>
          </div>
        </div>
      </section>
    </>
  );
}
