"use client";

import { useState, type FormEvent } from "react";
import { footerContent } from "@/config/footer";
import styles from "./FooterNewsletter.module.css";

export default function FooterNewsletter() {
  const { title, placeholder, submitLabel, successMessage } = footerContent.newsletter;
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <form className={styles.newsletter} onSubmit={handleSubmit}>
      <label className={styles.label} htmlFor="footer-newsletter-email">
        {title}
      </label>
      <div className={styles.field}>
        <input
          id="footer-newsletter-email"
          type="email"
          name="email"
          placeholder={placeholder}
          autoComplete="email"
          required
          onChange={() => setIsSubmitted(false)}
        />
        <button type="submit" aria-label={submitLabel}>
          <svg viewBox="0 0 30 12" aria-hidden="true">
            <path d="M0 6h28M23 1l5 5-5 5" />
          </svg>
        </button>
      </div>
      {isSubmitted && (
        <p className={styles.success} role="status">
          {successMessage}
        </p>
      )}
    </form>
  );
}
