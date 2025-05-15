"use client";
import React, { useState } from "react";

const FooterNewsletter: React.FC = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically handle the newsletter subscription
    console.log("Subscribing email:", email);
    // Reset the form
    setEmail("");
  };

  return (
    <section className="flex flex-col gap-12 max-w-[306px] max-sm:w-full">
      <h2 className="text-base font-semibold leading-6 text-neutral-950">
        Newsletter
      </h2>
      <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email address"
          className="px-4 w-full text-sm leading-6 bg-white rounded-2xl border border-zinc-200 h-[55px] text-neutral-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-label="Email address for newsletter"
          required
        />
        <button
          type="submit"
          className="w-full text-base font-semibold leading-6 text-white bg-violet-500 rounded-2xl h-[55px] hover:bg-violet-600 transition-colors"
          aria-label="Subscribe to newsletter"
        >
          Subscribe Now
        </button>
      </form>
    </section>
  );
};

export default FooterNewsletter;
