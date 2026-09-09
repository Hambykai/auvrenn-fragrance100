import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found dark-section">
      <p className="eyebrow">404 / Page not found</p>
      <h1>
        Nothing here
        <br />
        Yet
      </h1>
      <p>Return to the beginning.</p>
      <Link href="/" className="button button-light">
        Auvrenn home
      </Link>
    </section>
  );
}
