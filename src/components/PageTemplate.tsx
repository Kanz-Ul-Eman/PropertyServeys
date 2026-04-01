import Link from "next/link";
import { PageData } from "@/lib/siteData";
import { Hero, SiteShell } from "@/components/SiteShell";

export function PageTemplate({ page }: { page: PageData }) {
  return (
    <SiteShell>
      <Hero title={page.title} subtitle={page.subtitle} image={page.heroImage} />
      <section className="container section-block page-intro">
        <h2>{page.title}</h2>
        <p>{page.subtitle}</p>
      </section>
      {page.sections.map((section) => (
        <section className="container section-block section-narrow" key={section.title}>
          <h2>{section.title}</h2>
          {section.body.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          {section.cta ? (
            <Link href={section.cta.href} className="text-link">
              {section.cta.label}
            </Link>
          ) : null}
        </section>
      ))}
    </SiteShell>
  );
}
