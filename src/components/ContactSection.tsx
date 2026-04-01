"use client";

import { FormEvent, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { companyInfo, serviceCards } from "@/lib/siteData";

type ContactSectionProps = {
  heading?: string;
  compact?: boolean;
};

export function ContactSection({ heading = "Contact Us", compact = false }: ContactSectionProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus("error");
      setStatusMessage("Email setup is missing. Please set EmailJS environment variables.");
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);

    const templateParams = {
      first_name: String(formData.get("first_name") || ""),
      last_name: String(formData.get("last_name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      service: String(formData.get("service") || ""),
      property_address: String(formData.get("property_address") || ""),
      message: String(formData.get("message") || ""),
      heard_from: String(formData.get("heard_from") || ""),
      to_email: companyInfo.email,
    };

    setStatus("loading");
    setStatusMessage("Sending your message...");

    try {
      await emailjs.send(serviceId, templateId, templateParams, { publicKey });
      form.reset();
      setStatus("success");
      setStatusMessage("Message sent successfully. We will get back to you soon.");
    } catch {
      setStatus("error");
      setStatusMessage("Failed to send message. Please try again or contact us by phone.");
    }
  };

  return (
    <section className={`container section-block contact-grid ${compact ? "compact-contact" : ""}`}>
      <article>
        <h2 className="section-title-center">{heading}</h2>
        <p>Please fill in our form and we will reply soon.</p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="first_name" placeholder="First name" required />
          <input type="text" name="last_name" placeholder="Last name" required />
          <input type="email" name="email" placeholder="Email" required />
          <input type="text" name="phone" placeholder="Phone (Optional)" />
          <select name="service" defaultValue="" required>
            <option value="" disabled>
              Which service do you require?
            </option>
            {serviceCards.map((service) => (
              <option key={service.href} value={service.title}>
                {service.title}
              </option>
            ))}
          </select>
          <input type="text" name="property_address" placeholder="Subject Property Address" />
          <textarea rows={5} name="message" placeholder="Message" required />
          <input type="text" name="heard_from" placeholder="How did you hear about us?" />
          <button type="submit" disabled={status === "loading"}>
            {status === "loading" ? "Sending..." : "Submit"}
          </button>
          {status !== "idle" ? (
            <p className={`form-status ${status}`} role="status" aria-live="polite">
              {statusMessage}
            </p>
          ) : null}
        </form>
      </article>

      <aside>
        <h2>Call or Message</h2>
        <p>Alternatively, you can call us directly or chat with us on WhatsApp.</p>
        <div className="contact-card">
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
            <a
              href="https://wa.me/4476291555"
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp
            </a>
          </p>
        </div>
      </aside>
    </section>
  );
}
