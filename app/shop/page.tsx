import type { Metadata } from "next";
import { CoverImage } from "@/components/cover-image";
import { ReleaseForm } from "@/components/release-form";
import { images } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shop",
};

export default function ShopPage() {
  return (
    <>
      <section className="shop-hero">
        <div className="shop-gallery">
          <div className="shop-image-main">
            <CoverImage
              src={images.bottle}
              alt="Terra by Auvrenn planned 75 ml bottle"
              className="absolute inset-0 h-full w-full"
              priority
              sizes="(max-width: 1000px) 50vw, 55vw"
            />
            <span>Debut / 01</span>
          </div>
          <div className="shop-image-secondary">
            <CoverImage
              src={images.plinth}
              alt="Terra by Auvrenn studio preview"
              className="absolute inset-0 h-full w-full"
              sizes="(max-width: 1000px) 50vw, 55vw"
            />
          </div>
        </div>
        <div className="shop-detail">
          <div className="shop-detail-sticky">
            <div className="launch-badge dark-ink">
              <span />
              Single release · Coming soon
            </div>
            <p className="eyebrow">Auvrenn debut</p>
            <h1>
              Terra
              <br />
              by Auvrenn
            </h1>
            <p className="shop-subtitle">Woody · Amber · Citrus</p>
            <p className="shop-description">
              An earthy, grounded fragrance of Bergamot and Mandarin, luminous
              neroli, polished woods, and amber. Our first—and only—release at
              launch.
            </p>
            <div className="release-window">
              <span>Planned presentation</span>
              <strong>75 ml</strong>
              <span>Launch timing</span>
              <strong>To be announced</strong>
            </div>
            <ReleaseForm />
            <p className="delivery-note">
              Release list members receive timing, private previews, and
              first-access details.
            </p>
            <div className="shop-accordions">
              <details>
                <summary>Composition preview</summary>
                <p>
                  <strong>Top:</strong> Bergamot &amp; Mandarin — A dry luminous
                  opening, cool spice against clean, bright chips of citrus peel.
                  <br />
                  <strong>Heart:</strong> A radiant floral-resinous heart,
                  blending luminous neroli with an airy diffusion and modern
                  warmth.
                  <br />
                  <strong>Base:</strong> A polished wood, amber resin,
                  skin-resonant trace that stays close.
                </p>
              </details>
              <details>
                <summary>Release status</summary>
                <p>
                  Terra is in final development. Pricing, exact launch timing,
                  and ordering details will be announced before release.
                </p>
              </details>
              <details>
                <summary>First access</summary>
                <p>
                  Join the release list above. Members will receive the debut
                  announcement before the public launch.
                </p>
              </details>
            </div>
          </div>
        </div>
      </section>

      <section className="future-releases">
        <CoverImage
          src={images.future}
          alt="Auvrenn flagship bottle with two future releases held in shadow"
          className="future-image"
          sizes="100vw"
        />
        <div className="future-heading">
          <p className="eyebrow">After Terra</p>
          <h2>Reserved chapters</h2>
          <p>
            Terra comes first. Two future chapters are reserved for ideas that
            earn their place.
          </p>
        </div>
        <div className="future-slots">
          <article>
            <span>Release 02</span>
            <h3>Not yet named</h3>
            <p>Held until the idea is as clear as Terra.</p>
          </article>
          <article>
            <span>Release 03</span>
            <h3>Not yet named</h3>
            <p>A later chapter, kept in shadow until it is ready.</p>
          </article>
        </div>
      </section>

      <section className="shop-quote dark-section">
        <p className="eyebrow">One fragrance</p>
        <h2>worth remembering</h2>
        <span>— Auvrenn, Release 01</span>
      </section>
    </>
  );
}
