"use client";

import { useState, type FormEvent } from "react";
import { Icon } from "@/components/icons";

export function NewsletterForm() {
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setMessage("Tính năng đăng ký sẽ được kết nối khi website có backend.");
  }

  return (
    <>
      <form className="site-footer__signup" onSubmit={handleSubmit}>
        <label className="visually-hidden" htmlFor="newsletter-email">Địa chỉ email</label>
        <input
          autoComplete="email"
          id="newsletter-email"
          name="email"
          onChange={() => setMessage("")}
          placeholder="Email của bạn"
          required
          type="email"
        />
        <button aria-label="Đăng ký nhận tin" type="submit"><Icon name="arrow" /></button>
      </form>
      <p aria-live="polite" className="site-footer__signup-message">{message}</p>
    </>
  );
}
