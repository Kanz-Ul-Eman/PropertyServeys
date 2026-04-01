import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { ContactSection } from "@/components/ContactSection";
import {
  Hero,
  ServicesGrid,
  SiteShell,
  TestimonialStrip,
} from "@/components/SiteShell";

export const metadata: Metadata = {
  title: "Home",
  description:
    "Property surveys and inspection services including EPCs, floor plans, and risk assessments for residential and commercial properties.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <SiteShell>
      <Hero
        title="Professional Surveys for Residential and Commercial Properties"
        subtitle="Clear reports, practical advice, and reliable turnaround across surrounding areas."
        image="https://static.wixstatic.com/media/b8be3c_24c21819d3ac4cabac7f2ed6763a8924~mv2.png/v1/fill/w_1039,h_831,al_c,q_90,usm_0.66_1.00_0.01,enc_avif,quality_auto/b8be3c_24c21819d3ac4cabac7f2ed6763a8924~mv2.png"
      />

      <section className="container section-block">
        <div className="about-home-grid">
          <div className="about-copy-card">
            <h2>About Us</h2>
            <p>
              Property Survey and Inspection is an assessor service delivering
              accurate, up-to-date surveys for residential and commercial
              properties.
            </p>
            <p>
              Our experienced surveyors provide detailed assessments,
              certifications, and practical reporting to help clients make
              informed decisions.
            </p>
            <Link href="/about-us" className="text-link">
              See More
            </Link>
          </div>
          <Image
            src="https://static.wixstatic.com/media/b8be3c_b794ae497ca94739bab2c34597cadb34~mv2.jpg/v1/fill/w_519,h_626,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/b8be3c_b794ae497ca94739bab2c34597cadb34~mv2.jpg"
            alt="Surveyor with property documents"
            width={560}
            height={420}
            className="about-home-image"
            unoptimized
          />
        </div>
      </section>

      <ServicesGrid />
      <TestimonialStrip />
      <div id="home-contact">
        <ContactSection heading="Contact Us" compact />
      </div>

      <section className="container section-block section-narrow center-action">
        <Link href="/contact-us" className="text-link">
          Open Contact Page
        </Link>
      </section>
    </SiteShell>
  );
}
