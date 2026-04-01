export type TextSection = {
  title: string;
  body: string[];
  cta?: { label: string; href: string };
};

export type ServiceCard = {
  title: string;
  description: string;
  price: string;
  href: string;
};

export type PageData = {
  title: string;
  subtitle: string;
  heroImage: string;
  sections: TextSection[];
};

export const companyInfo = {
  name: "Coventry Property Surveys Limited",
  address: "111 New Union Street, Coventry, CV1 2NT",
  email: "info@coventrypropertysurveys.co.uk",
  phoneDisplay: "024 76 291 555",
  phoneRaw: "02476291555",
  copyright:
    "© Copyright 2026 Coventry Property Surveys Ltd. All Rights Reserved. Registered in England and Wales No.12292915",
};

export const socialLinks = [
  { label: "Instagram", href: "https://www.instagram.com/coventrypropertysurveys" },
  { label: "Facebook", href: "https://www.facebook.com/profile.php?id=100054596222867" },
  { label: "LinkedIn", href: "https://uk.linkedin.com/company/coventry-property-surveys-ltd" },
];

export const miscLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  { label: "Contact Us", href: "/contact-us" },
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Cookies Policy", href: "/copy-of-privacy-policy" },
];

export const serviceCards: ServiceCard[] = [
  {
    title: "Domestic EPC's",
    description:
      "Residential Energy Performance Certificates with 24 hour turnaround available.",
    price: "Prices start from £60 + VAT",
    href: "/domestic-epc",
  },
  {
    title: "Commercial EPC's",
    description:
      "Commercial EPCs for offices, retail units, industrial buildings and mixed-use properties.",
    price: "Prices start from £145 + VAT",
    href: "/copy-of-domestic-epc",
  },
  {
    title: "RICS Surveys",
    description:
      "RICS Home Survey Levels 1, 2 and 3 with clear reporting and practical guidance.",
    price: "Prices start from £450 + VAT",
    href: "/general-6",
  },
  {
    title: "Floor Plans",
    description:
      "Clear and accurate floor plans for residential and commercial marketing.",
    price: "Prices start from £40 + VAT",
    href: "/floor-plans",
  },
  {
    title: "Asbestos Surveys",
    description:
      "Management surveys, refurbishment surveys and targeted asbestos testing.",
    price: "Prices start from £145 + VAT",
    href: "/asbestos-surveys",
  },
  {
    title: "BRUKL Reports",
    description:
      "SBEM calculations and BRUKL reports to support Building Regulations Part L compliance.",
    price: "Prices start from £195 + VAT",
    href: "/brukl-reports",
  },
  {
    title: "Legionella Risk Assessments",
    description:
      "Landlord-focused Legionella risk assessments and practical compliance guidance.",
    price: "Prices start from £120 + VAT",
    href: "/legionnaires-risk-assessments",
  },
  {
    title: "Fire Risk Assessments",
    description:
      "Clear fire risk assessments for legal compliance and safer premises.",
    price: "Prices start from £195 + VAT",
    href: "/fire-risk-assessments",
  },
  {
    title: "EPC Compliance Advice",
    description:
      "Advice on EPC improvements, MEES compliance and practical routes to target ratings.",
    price: "Prices start from £50 + VAT",
    href: "/services-4",
  },
];

export const testimonials = [
  {
    name: "Ravinder G",
    quote:
      "Fantastic service from Antony and his team. We requested an EPC and were amazed how quickly it was scheduled and carried out.",
  },
  {
    name: "Jodie H",
    quote:
      "I needed an EPC quickly and received a response within an hour. Inspection was next day and the certificate came through the same day.",
  },
  {
    name: "Liam Hyland",
    quote:
      "Always a 5 star service from these guys. Have regularly used them and would recommend them.",
  },
];

export const pages: Record<string, PageData> = {
  "about-us": {
    title: "About Us",
    subtitle: "Clear, reliable property surveys and assessments to support confident decisions.",
    heroImage:
      "https://static.wixstatic.com/media/b8be3c_0d164e95548e40d080577e8d21662339~mv2.webp/v1/fill/w_1039,h_424,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b8be3c_0d164e95548e40d080577e8d21662339~mv2.webp",
    sections: [
      {
        title: "Who We Are",
        body: [
          "Established in 2019, Coventry Property Surveys Ltd is an independent residential surveying company providing professional inspections across Coventry and surrounding areas.",
          "We specialise in EPCs, RICS HomeBuyer Surveys, Legionella Risk Assessments and marketing floor plans for buyers, homeowners and landlords.",
        ],
      },
      {
        title: "Our Mission",
        body: [
          "Our mission is to provide honest, high-quality property surveys that give clients confidence and peace of mind.",
          "Every survey is focused on accuracy, transparency and practical guidance without unnecessary jargon.",
        ],
      },
      {
        title: "What Makes Us Different",
        body: [
          "As independent surveyors, our advice is unbiased and focused on your best interests.",
          "We combine local knowledge with RICS standards, fast turnaround times and straightforward communication.",
        ],
      },
    ],
  },
  "domestic-epc": {
    title: "Domestic EPCs",
    subtitle: "Accurate domestic EPCs with a 24-hour turnaround service.",
    heroImage:
      "https://static.wixstatic.com/media/11062b_446cf46ee5404b148b4e64bb98fb9eb6~mv2.jpg/v1/fill/w_1039,h_427,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_446cf46ee5404b148b4e64bb98fb9eb6~mv2.jpg",
    sections: [
      {
        title: "What is an EPC?",
        body: [
          "A domestic Energy Performance Certificate uses an A-G rating to show how energy efficient a residential property is.",
          "It is a legal requirement when selling or renting a home and includes recommendations for improvement.",
        ],
        cta: { label: "Book Today", href: "/contact-us" },
      },
      {
        title: "Who needs an EPC?",
        body: [
          "Homeowners selling, landlords renting and agents marketing residential property all need a valid EPC.",
          "Each EPC is lodged on the national register, supplied digitally and valid for 10 years.",
        ],
      },
      {
        title: "The Process",
        body: [
          "An accredited assessor visits the property and records insulation, heating, glazing and construction details.",
          "The EPC is then produced and lodged with a digital copy provided within 24 hours.",
        ],
      },
      {
        title: "FAQs",
        body: [
          "Typical assessments take 20-40 minutes depending on property size.",
          "Any documentation about energy improvements can help improve accuracy.",
        ],
      },
    ],
  },
  "copy-of-domestic-epc": {
    title: "Commercial EPCs",
    subtitle: "Professional commercial EPCs for legal compliance and confident decisions.",
    heroImage:
      "https://static.wixstatic.com/media/e36d9728e67e439798d6a0c50e57690b.jpg/v1/fill/w_1039,h_424,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e36d9728e67e439798d6a0c50e57690b.jpg",
    sections: [
      {
        title: "What is a Commercial EPC?",
        body: [
          "A commercial EPC shows non-domestic energy performance using an A-G rating and is required for sales, lettings and many new buildings.",
          "It helps buyers, tenants and investors understand energy efficiency and emissions.",
        ],
      },
      {
        title: "Who needs an EPC?",
        body: [
          "Owners, landlords and agents of offices, retail units, industrial premises and mixed-use properties need compliant certification.",
          "Our accredited assessors complete an on-site survey and lodge the certificate on the national register.",
        ],
      },
      {
        title: "The Process",
        body: [
          "We inspect building fabric and services including heating, cooling, lighting and controls.",
          "A digital certificate is issued promptly after lodging.",
        ],
      },
    ],
  },
  "general-6": {
    title: "RICS Surveys",
    subtitle: "Choose the right RICS survey level with clear guidance and practical reports.",
    heroImage:
      "https://static.wixstatic.com/media/11062b_446cf46ee5404b148b4e64bb98fb9eb6~mv2.jpg/v1/fill/w_1039,h_638,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_446cf46ee5404b148b4e64bb98fb9eb6~mv2.jpg",
    sections: [
      {
        title: "Level 1 RICS Survey",
        body: [
          "A condition-focused overview suitable for modern properties with minimal alterations.",
          "Provides a basic snapshot of condition but no detailed repair advice.",
        ],
      },
      {
        title: "Level 2 RICS Survey",
        body: [
          "A Homebuyers-style survey with condition ratings and key issues highlighted.",
          "Well suited to conventional properties where clear guidance is needed before purchase.",
        ],
      },
      {
        title: "Level 3 RICS Survey",
        body: [
          "A comprehensive building survey for older, extended, unusual or significantly altered properties.",
          "Includes detailed analysis of structure and fabric, with drone imagery included for level 3.",
        ],
      },
    ],
  },
  "floor-plans": {
    title: "Marketing Floor Plans",
    subtitle: "Clear, accurate plans that improve presentation for sales and lettings.",
    heroImage:
      "https://static.wixstatic.com/media/b8be3c_5d9d8802c79c444bb1071d5954ebf0f8~mv2.jpg/v1/fill/w_1039,h_424,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b8be3c_5d9d8802c79c444bb1071d5954ebf0f8~mv2.jpg",
    sections: [
      {
        title: "Residential",
        body: [
          "Our domestic floor plans include high-quality 2D and 3D options tailored for marketing.",
          "Professionally measured layouts help buyers and tenants understand flow and space quickly.",
        ],
      },
      {
        title: "Commercial",
        body: [
          "Commercial plans are useful for marketing, space planning and operational decision-making.",
          "They present layout, scale and functionality clearly for occupiers and investors.",
        ],
      },
    ],
  },
  "asbestos-surveys": {
    title: "Asbestos Surveys",
    subtitle: "Management, refurbishment and targeted testing surveys for safer properties.",
    heroImage:
      "https://static.wixstatic.com/media/c27ae6fb01504302b2adc390036cd314.jpg/v1/fill/w_1039,h_424,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/c27ae6fb01504302b2adc390036cd314.jpg",
    sections: [
      {
        title: "What Survey Do I Need?",
        body: [
          "Management surveys are typically used where buildings are occupied and no major work is planned.",
          "Refurbishment surveys are essential before intrusive works or demolition.",
        ],
      },
      {
        title: "Legal Requirements",
        body: [
          "Under the Control of Asbestos Regulations 2012, dutyholders must identify and manage asbestos in non-domestic properties.",
          "Failure to comply can lead to health risks, enforcement and legal penalties.",
        ],
      },
      {
        title: "Survey Types",
        body: [
          "Management Surveys locate and assess materials that could be disturbed during normal occupation.",
          "Refurbishment Surveys are intrusive and identify hidden asbestos before works begin.",
          "Targeted Testing confirms whether suspected materials contain asbestos.",
        ],
      },
    ],
  },
  "brukl-reports": {
    title: "SBEM Calculations & BRUKL Reports",
    subtitle: "Reliable SBEM and BRUKL reporting for Part L non-domestic compliance.",
    heroImage:
      "https://static.wixstatic.com/media/b8be3c_98ab855c1fee45939b3f111a4c8f099c~mv2.jpg/v1/fill/w_1039,h_424,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b8be3c_98ab855c1fee45939b3f111a4c8f099c~mv2.jpg",
    sections: [
      {
        title: "What Requires an SBEM Assessment?",
        body: [
          "SBEM is typically needed for newly built non-domestic units above 50 sqm with conditioned space.",
          "It may also be required for major extensions, refurbishments, conversions and shell-and-core fit-outs.",
        ],
      },
      {
        title: "What are SBEM Calculations?",
        body: [
          "SBEM is the UK government-approved method for modelling commercial building energy performance.",
          "It evaluates fabric and building services such as heating, cooling, ventilation, lighting and hot water.",
        ],
      },
      {
        title: "What is a BRUKL Report?",
        body: [
          "BRUKL reports summarise SBEM outputs for Building Control at design and as-built stages.",
          "Key metrics include BER/BPER against TER/TPER thresholds under Approved Document L.",
        ],
      },
    ],
  },
  "legionnaires-risk-assessments": {
    title: "Legionella Risk Assessments",
    subtitle: "Practical landlord assessments to support health and safety compliance.",
    heroImage:
      "https://static.wixstatic.com/media/b8be3c_80c374d31c4b4b21b7d40ece8352907c~mv2.jpg/v1/fill/w_1039,h_431,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/b8be3c_80c374d31c4b4b21b7d40ece8352907c~mv2.jpg",
    sections: [
      {
        title: "Book an Assessment",
        body: [
          "Legionella assessments start from £120 for combi boiler properties and from £130 for properties with stored water systems.",
          "Contact us for tailored quotes where property setup is more complex.",
        ],
        cta: { label: "Book Now", href: "/contact-us" },
      },
      {
        title: "What is an LRA?",
        body: [
          "An LRA inspects water systems to identify and assess risk from Legionella bacteria.",
          "It includes practical recommendations for controlling any identified risk areas.",
        ],
      },
      {
        title: "Do I Need an LRA?",
        body: [
          "Landlords have legal duties to assess and control Legionella risk in rental properties.",
          "Assessments should be reviewed when tenants change, systems change, or properties are vacant.",
        ],
      },
    ],
  },
  "fire-risk-assessments": {
    title: "Fire Risk Assessments",
    subtitle: "Basic fire risk assessments for small, low-risk premises.",
    heroImage:
      "https://static.wixstatic.com/media/6d6a6529f0fb47348fffc7003c0c21d0.jpg/v1/fill/w_1039,h_424,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/6d6a6529f0fb47348fffc7003c0c21d0.jpg",
    sections: [
      {
        title: "What is a Fire Risk Assessment?",
        body: [
          "A FRA identifies potential fire hazards and the actions needed to reduce risk.",
          "It reviews how a fire might start, how occupants escape and whether controls are suitable.",
        ],
      },
      {
        title: "Is a FRA a legal requirement?",
        body: [
          "Most non-domestic premises in England and Wales require an FRA under the Regulatory Reform (Fire Safety) Order 2005.",
          "Responsibility rests with the responsible person such as owner, landlord or managing agent.",
        ],
      },
      {
        title: "What does it cover?",
        body: [
          "Basic assessments include hazards, escape routes, alarms, emergency lighting, extinguishers and signage.",
          "They also assess fire safety management for the property use and occupancy.",
        ],
      },
    ],
  },
  "services-4": {
    title: "EPC Compliance Advice",
    subtitle: "Expert guidance to reach target EPC ratings and meet MEES requirements.",
    heroImage:
      "https://static.wixstatic.com/media/11062b_82bea52f5d2142dca90bfb337c376cb5~mv2.jpg/v1/fill/w_1039,h_424,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/11062b_82bea52f5d2142dca90bfb337c376cb5~mv2.jpg",
    sections: [
      {
        title: "What Is EPC Compliance Advice?",
        body: [
          "Advice is tailored to your domestic or commercial property and focused on practical, cost-effective improvement steps.",
          "It helps with legal letting requirements and improving overall energy performance.",
        ],
      },
      {
        title: "What Is MEES?",
        body: [
          "Minimum Energy Efficiency Standards apply to privately rented properties in England and Wales.",
          "Current minimum for many lets is EPC E, with government plans moving toward EPC C by October 2030.",
        ],
      },
      {
        title: "How Does The Advice Work?",
        body: [
          "A full EPC assessment is completed but not lodged immediately so recommended upgrades can be made first.",
          "After improvements, the property is revisited and the final EPC is lodged.",
        ],
      },
      {
        title: "Common Improvement Areas",
        body: [
          "Loft insulation, condensing boilers, cavity wall insulation and modern heating controls are common improvement routes.",
          "Measures are prioritised to improve rating efficiently and avoid unnecessary spend.",
        ],
      },
    ],
  },
};
