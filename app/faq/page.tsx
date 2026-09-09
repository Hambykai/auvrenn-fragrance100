import type { Metadata } from "next";
import { EditorialLink } from "@/components/editorial-link";

export const metadata: Metadata = {
  title: "FAQ",
};

const groups = [
  {
    title: "The fragrance",
    items: [
      {
        n: "01",
        q: "How would you describe Terra?",
        a: "Terra is an earthy, grounded woody amber fragrance with Bergamot and Mandarin at the top, a radiant floral-resinous heart, and a polished wood and amber base that stays close to skin. It is designed to feel distinctive without becoming overpowering.",
      },
      {
        n: "02",
        q: "Is the formula final?",
        a: "The fragrance is in final development. Its core direction is set while wear, balance, and presentation are being refined ahead of launch.",
      },
      {
        n: "03",
        q: "Is Auvrenn created for a particular gender?",
        a: "No. Auvrenn is composed around atmosphere and character rather than gender.",
      },
    ],
  },
  {
    title: "The debut release",
    items: [
      {
        n: "04",
        q: "What size will be available?",
        a: "The debut is planned as a 75 ml presentation. Final specifications will be confirmed with the release announcement.",
      },
      {
        n: "05",
        q: "When will Terra launch?",
        a: "The target debut window is 2026. Join the release list to receive the confirmed date and first-access details.",
      },
      {
        n: "06",
        q: "Can I pre-order now?",
        a: "Orders are not open yet. Release list members will be the first to know if a private pre-order window becomes available.",
      },
      {
        n: "07",
        q: "Where will Auvrenn deliver?",
        a: "Launch regions, delivery timing, and final service details will be published before orders open.",
      },
    ],
  },
  {
    title: "The house",
    items: [
      {
        n: "08",
        q: "Who is Auvrenn?",
        a: "Auvrenn is a new independent luxury fragrance house preparing its debut. We are building one release at a time with a focus on modern scent, clear design, and a considered customer experience.",
      },
      {
        n: "09",
        q: "Where is Auvrenn made?",
        a: "Auvrenn is independently directed. Production and fulfillment details will be shared transparently before the debut release.",
      },
    ],
  },
];

export default function FaqPage() {
  return (
    <>
      <header className="simple-page-head">
        <p className="eyebrow">Questions</p>
        <h1>Good to know</h1>
        <p>Current details on Terra, release timing, and the Auvrenn house.</p>
      </header>
      <section className="faq-section">
        {groups.map((group) => (
          <div className="faq-group" key={group.title}>
            <h2>{group.title}</h2>
            <div>
              {group.items.map((item) => (
                <details className="faq-item" key={item.n}>
                  <summary>
                    <span>{item.n}</span>
                    <h3>{item.q}</h3>
                    <span aria-hidden>+</span>
                  </summary>
                  <p>{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>
      <section className="faq-contact dark-section">
        <p className="eyebrow">Need something else?</p>
        <h2>Speak with Auvrenn</h2>
        <p>For release questions, press, partnerships, or general enquiries.</p>
        <EditorialLink href="/contact" light>
          Contact us
        </EditorialLink>
      </section>
    </>
  );
}
