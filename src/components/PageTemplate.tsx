"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { PageData } from "@/lib/siteData";
import { Hero, SiteShell } from "@/components/SiteShell";

export function PageTemplate({ page }: { page: PageData }) {
  const imagePool = [
    "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=900&q=80",
    "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=900&q=80",
  ];

  return (
    <SiteShell>
      <Hero
        title={page.title}
        subtitle={page.subtitle}
        image={page.heroImage}
      />
      <motion.section
        className="container section-block page-intro"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45 }}
      >
        <h2>{page.title}</h2>
        <p>{page.subtitle}</p>
      </motion.section>
      {page.sections.map((section, index) => (
        <motion.section
          className="container section-block"
          key={section.title}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5, delay: index * 0.05 }}
        >
          <div className={`detail-split ${index % 2 === 1 ? "reverse" : ""}`}>
            <div className="detail-image-wrap">
              <Image
                src={imagePool[index % imagePool.length]}
                alt={section.title}
                width={620}
                height={420}
                className="detail-image"
                unoptimized
              />
            </div>
            <div className="detail-copy">
              <h2>{section.title}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.cta ? (
                <Link href={section.cta.href} className="text-link">
                  {section.cta.label}
                </Link>
              ) : null}
            </div>
          </div>
        </motion.section>
      ))}
    </SiteShell>
  );
}
