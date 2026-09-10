import type { Metadata } from "next";
import { CoverImage } from "@/components/cover-image";
import { ReleaseForm } from "@/components/release-form";
import { debut, lineupImage, reservedReleases, statusLabel } from "@/lib/site";

export const metadata: Metadata = {
  title: "Shop",
};

export default function ShopPage() {
  const { notes, images } = debut;

  return (
    <>
      <section className="shop-hero">
        <div className="shop-gallery">
          <div className="shop-image-main">
            <CoverImage
              src={images.portrait}
              alt={`${debut.name} by Auvrenn, planned ${debut.volume} bottle`}
              className="absolute inset-0 h-full w-full"
              priority
              sizes="(max-width: 1000px) 50vw, 55vw"
            />
            <span>
              Debut / {debut.number}
            </span>
          </div>
          <div className="shop-image-secondary">
            <CoverImage
              src={images.detail}
              alt={`${debut.name} by Auvrenn, bottle detail`}
              className="absolute inset-0 h-full w-full"
              sizes="(max-width: 1000px) 50vw, 55vw"
            />
          </div>
        </div>
        <div className="shop-detail">
          <div className="shop-detail-sticky">
            <div className="launch-badge dark-ink">
              <span />
              Single release · {statusLabel(debut.status)}
            </div>
            <p className="eyebrow">Auvrenn debut</p>
            <h1>
              {debut.name}
              <br />
              by Auvrenn
            </h1>
            <p className="shop-subtitle">{debut.family}</p>
            <p className="shop-description">
              An earthy, grounded fragrance of {notes.top.title}, luminous
              neroli, polished woods, and amber. Our first—and only—release at
              launch.
            </p>
            <div className="release-window">
              <span>Planned presentation</span>
              <strong>{debut.volume}</strong>
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
                  <strong>Top:</strong> {notes.top.title} — {notes.top.body}
                  <br />
                  <strong>Heart:</strong> {notes.heart.body}
                  <br />
                  <strong>Base:</strong> {notes.base.body}
                </p>
              </details>
              <details>
                <summary>Release status</summary>
                <p>
                  {debut.name} is in final development. Pricing, exact launch
                  timing, and ordering details will be announced before release.
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
          src={lineupImage}
          alt="The Auvrenn bottle: Terra in light, two future chapters held in shadow"
          className="future-image"
          sizes="100vw"
        />
        <div className="future-heading">
          <p className="eyebrow">After {debut.name}</p>
          <h2>Reserved chapters</h2>
          <p>
            {debut.name} comes first. Two future chapters are reserved for ideas
            that earn their place—in the same bottle, when they are ready.
          </p>
        </div>
        <div className="future-slots">
          {reservedReleases.map((item) => (
            <article key={item.number}>
              <span>Release {item.number}</span>
              <h3>{item.name}</h3>
              <p>{item.blurb}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="shop-quote dark-section">
        <p className="eyebrow">One fragrance</p>
        <h2>worth remembering</h2>
        <span>
          — Auvrenn, Release {debut.number}
        </span>
      </section>
    </>
  );
}
