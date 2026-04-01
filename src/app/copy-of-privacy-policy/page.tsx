import { Hero, SiteShell } from "@/components/SiteShell";

const cookieSections = [
  {
    title: "What Are Cookies?",
    body: "Cookies are small text files placed on your device to help websites operate correctly, remember preferences and improve user experience.",
  },
  {
    title: "How We Use Cookies",
    body: "Cookies are used to support site functionality, analytics, usability improvements, preference storage, and relevant marketing activity.",
  },
  {
    title: "Types of Cookies We Use",
    body: "This includes strictly necessary cookies, performance and analytics cookies, functional cookies, and marketing or advertising cookies.",
  },
  {
    title: "Third-Party Cookies",
    body: "Some cookies may be set by third-party services used for analytics and advertising. Please review the relevant third-party policies for details.",
  },
  {
    title: "Managing Cookies and Consent",
    body: "You can control or delete cookies through your browser settings. Disabling cookies may affect parts of website functionality.",
  },
  {
    title: "Updates to This Cookie Policy",
    body: "This policy may be updated to reflect changes in law, technology, or service operation.",
  },
];

export default function CookiePolicyPage() {
  return (
    <SiteShell>
      <Hero
        title="Cookie Policy"
        subtitle="How cookies and similar technologies are used on this website."
        image="https://static.wixstatic.com/media/11062b_446cf46ee5404b148b4e64bb98fb9eb6~mv2.jpg/v1/fill/w_1039,h_424,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_446cf46ee5404b148b4e64bb98fb9eb6~mv2.jpg"
      />
      <section className="container section-block section-narrow">
        {cookieSections.map((section) => (
          <article className="policy-block" key={section.title}>
            <h2>{section.title}</h2>
            <p>{section.body}</p>
          </article>
        ))}
        <p className="muted">Last updated: January 2026</p>
      </section>
    </SiteShell>
  );
}
