import { Hero, SiteShell } from "@/components/SiteShell";

const sections = [
  {
    title: "Information We Collect",
    body: "We may collect details submitted through enquiry forms, cookies and analytics tools, and technical browser data such as IP address, device type and operating system.",
  },
  {
    title: "Cookies",
    body: "Cookies are used to improve user experience, analyse site performance and remember preferences. You can control cookies via your browser settings.",
  },
  {
    title: "How We Use Personal Information",
    body: "Information is used to respond to enquiries, support service delivery, improve website content, and where consent is given, send relevant updates.",
  },
  {
    title: "Legal Basis for Processing (GDPR)",
    body: "Data processing is based on consent, contract performance, legal obligation, and legitimate business interests where appropriate.",
  },
  {
    title: "Data Retention and Your Rights",
    body: "You may request access, correction, deletion, restriction, objection, or portability of your data. Requests can be made via info@coventrypropertysurveys.co.uk.",
  },
  {
    title: "Data Security and Sharing",
    body: "Appropriate technical and organisational safeguards are used. Data is not sold, rented or traded, and may be shared only with trusted service providers where required.",
  },
  {
    title: "Policy Updates",
    body: "This policy may be updated from time to time. Continued use of the site indicates acceptance of the latest version.",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <Hero
        title="Privacy Policy"
        subtitle="How our company handles personal data in line with data protection legislation."
        image="https://static.wixstatic.com/media/11062b_446cf46ee5404b148b4e64bb98fb9eb6~mv2.jpg/v1/fill/w_1039,h_424,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_446cf46ee5404b148b4e64bb98fb9eb6~mv2.jpg"
      />
      <section className="container section-block section-narrow">
        {sections.map((section) => (
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
