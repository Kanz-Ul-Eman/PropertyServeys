"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  FaArrowLeft,
  FaArrowRight,
  FaChevronDown,
  FaEnvelope,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaWhatsapp,
} from "react-icons/fa";
import {
  companyInfo,
  miscLinks,
  serviceCards,
  socialLinks,
  testimonials,
} from "@/lib/siteData";

type SiteShellProps = {
  children: React.ReactNode;
};

export function SiteShell({ children }: SiteShellProps) {
  const dropdownRef = useRef<HTMLDetailsElement | null>(null);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as Node;

      if (dropdownRef.current && !dropdownRef.current.contains(target)) {
        dropdownRef.current.removeAttribute("open");
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const iconMap = useMemo(
    () => ({
      Instagram: FaInstagram,
      Facebook: FaFacebook,
      LinkedIn: FaLinkedin,
    }),
    []
  );

  return (
    <div className="site-wrap">
      <header className="site-header">
        <div className="container nav-bar">
          <Link href="/" className="brand">
            <Image src="/logo.png" alt="Company logo" width={44} height={44} className="brand-logo" priority />
            <span>Property Serveys and Inspetion</span>
          </Link>
          <nav className="nav-links" aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/about-us">About Us</Link>
            <details className="services-dropdown" ref={dropdownRef}>
              <summary>
                <span>Our Services</span>
                <FaChevronDown className="dropdown-icon" aria-hidden="true" />
              </summary>
              <div className="dropdown-menu">
                {serviceCards.map((service) => (
                  <Link key={service.href} href={service.href}>
                    {service.title}
                  </Link>
                ))}
              </div>
            </details>
            <Link href="/contact-us">Contact Us</Link>
          </nav>
        </div>
      </header>

      <motion.main
        initial={{ opacity: 0.98, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
      >
        {children}
      </motion.main>

      <footer className="site-footer">
        <div className="footer-bg" />
        <div className="container footer-grid">
          <section>
            <h3>{companyInfo.name}</h3>
            <p>
              <FaMapMarkerAlt aria-hidden="true" /> {companyInfo.address}
            </p>
            <p>
              <FaEnvelope aria-hidden="true" />
              <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
            </p>
            <p>
              <FaPhoneAlt aria-hidden="true" />
              <a href={`tel:${companyInfo.phoneRaw}`}>{companyInfo.phoneDisplay}</a>
            </p>
            <p>
              <FaWhatsapp aria-hidden="true" />
              <a href="https://wa.me/4476291555" target="_blank" rel="noopener noreferrer">
                WhatsApp Chat
              </a>
            </p>
          </section>
          <section>
            <h3>Social Media</h3>
            <ul>
              {socialLinks.map((item) => (
                <li key={item.href}>
                  {(() => {
                    const Icon = iconMap[item.label as keyof typeof iconMap] ?? FaFacebook;
                    return <Icon aria-hidden="true" />;
                  })()}
                  <a href={item.href} target="_blank" rel="noopener noreferrer">
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
          <section>
            <h3>Useful Links</h3>
            <ul>
              {miscLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
              <li>
                <Link href="/#services">Services Section</Link>
              </li>
              <li>
                <Link href="/#testimonials">Testimonials Section</Link>
              </li>
              <li>
                <Link href="/#home-contact">Home Contact Section</Link>
              </li>
            </ul>
          </section>
        </div>
        <p className="copyright">{companyInfo.copyright}</p>
      </footer>
    </div>
  );
}

export function Hero({ title, subtitle, image }: { title: string; subtitle: string; image: string }) {
  return (
    <section className="hero" style={{ backgroundImage: `url(${image})` }}>
      <div className="hero-overlay">
        <motion.div
          className="container hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}
        >
          <motion.p className="tag" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            Your property in our safe hands
          </motion.p>
          <h1>{title}</h1>
          <p>{subtitle}</p>
          <div className="hero-actions">
            <a href="tel:02476291555" className="cta-btn secondary-btn">
              Call Us
            </a>
            <Link href="/contact-us" className="cta-btn">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function ServicesGrid() {
  return (
    <section id="services" className="container section-block">
      <h2 className="section-title-center">Our Services</h2>
      <div className="service-grid">
        {serviceCards.map((service) => (
          <motion.article
            key={service.href}
            className="card"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45 }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <p className="price">{service.price}</p>
            <Link href={service.href} className="text-link">
              Find Out More
            </Link>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export function TestimonialStrip() {
  const [index, setIndex] = useState(0);

  const showPrev = () => {
    setIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  };

  const showNext = () => {
    setIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  };

  const activeSet = Array.from({ length: 4 }, (_, offset) => testimonials[(index + offset) % testimonials.length]);

  return (
    <section id="testimonials" className="container section-block">
      <div className="testimonial-head">
        <h2>Testimonials</h2>
        <div className="testimonial-arrows">
          <button type="button" onClick={showPrev} className="arrow-btn" aria-label="Show previous testimonial">
            <FaArrowLeft />
          </button>
          <button type="button" onClick={showNext} className="arrow-btn" aria-label="Show next testimonial">
            <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="testimonial-grid four-grid">
        {activeSet.map((active, cardIndex) => (
          <motion.blockquote
            key={`${active.name}-${cardIndex}`}
            className="testimonial feature-testimonial"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, delay: cardIndex * 0.08 }}
          >
            <div className="person">
              <Image src={active.avatar} alt={active.name} width={70} height={70} className="avatar" unoptimized />
              <cite>{active.name}</cite>
            </div>
            <p>“{active.quote}”</p>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
