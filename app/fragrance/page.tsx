import type { Metadata } from "next";
import { CoverImage } from "@/components/cover-image";
import { images } from "@/lib/site";

export const metadata: Metadata = {
  title: "The Fragrance",
};

export default function FragrancePage() {
  return (
    <>
      <section className="page-hero fragrance-hero dark-section">
        <CoverImage
          src={images.campaign}
          alt="Terra by Auvrenn in a modern light-filled space"
          className="absolute inset-0 h-full w-full"
          imageClassName="object-[61%_center]"
          priority
          sizes="100vw"
        />
        <div className="image-scrim" />
        <div className="page-hero-copy">
          <p className="eyebrow">Single release · Coming soon</p>
          <h1>
            Terra
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
            Terra opens with Bergamot and Mandarin—a dry luminous opening, cool
            spice against clean, bright chips of citrus peel.
          </p>
          <p>
            A radiant floral-resinous heart blends luminous neroli with airy
            diffusion and modern warmth before polished wood and amber settle
            close to skin.
          </p>
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
            <p>Bergamot &amp; Mandarin</p>
            <span>
              A dry luminous opening, cool spice against clean, bright chips of
              citrus peel.
            </span>
          </div>
          <div className="architecture-row">
            <span className="roman">II</span>
            <h3>Heart notes</h3>
            <p>Neroli &amp; Labdanum</p>
            <span>
              A radiant floral-resinous heart, blending luminous neroli with an
              airy diffusion and modern warmth.
            </span>
          </div>
          <div className="architecture-row">
            <span className="roman">III</span>
            <h3>Base notes</h3>
            <p>Polished woods &amp; Amber</p>
            <span>
              A polished wood, amber resin, skin-resonant trace that stays close.
            </span>
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
                <strong>Brightness</strong> — Bergamot and Mandarin
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
          alt="The core materials behind Terra by Auvrenn"
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
            <strong>01</strong>
            <span>Flagship debut</span>
          </div>
          <div>
            <strong>75 ml</strong>
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
