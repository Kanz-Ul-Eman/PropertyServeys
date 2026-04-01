import { ContactSection } from "@/components/ContactSection";
import { Hero, SiteShell } from "@/components/SiteShell";

export default function ContactPage() {
  return (
    <SiteShell>
      <Hero
        title="Contact Us"
        subtitle="Have a question or need a quote? Get in touch with our friendly team today."
        image="https://static.wixstatic.com/media/11062b_446cf46ee5404b148b4e64bb98fb9eb6~mv2.jpg/v1/fill/w_1039,h_410,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_446cf46ee5404b148b4e64bb98fb9eb6~mv2.jpg"
      />
      <ContactSection heading="Send Us a Message" />
    </SiteShell>
  );
}
