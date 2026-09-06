
import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "./Button";

import logo from "../images/logo.png";
import footerData from "../data/footer.json";

// Payment icons
import mastercard from "../icons/mastercard.png";
import mastercard1 from "../icons/mastercard1.png";
import mastercard2 from "../icons/mastercard2.png";
import mastercard3 from "../icons/mastercard3.png";

const paymentIcons = {
  mastercard: mastercard,
  visa: mastercard1,
  bitcoin: mastercard2,
  amex: mastercard3,
};

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!email.trim()) {
      return;
    }

    console.log("Newsletter email:", email);
    setEmail("");
  };

  return (
    <footer className="relative bg-[#071411] pt-38.75 text-white">

      {/* Newsletter Card */}
      <div
        className="absolute left-1/2 top-0 w-[calc(100%-32px)] max-w-400
        -translate-x-1/2 -translate-y-1/2 rounded-[15px]
        bg-[#075039] px-10 py-11 md:px-10"
      >
        <h2 className="max-w-xl text-2xl font-bold leading-[1.05] tracking-[-1px] md:text-[40px]">
          {footerData.newsletter.title}
        </h2>

        <p className="mt-5 text-[13px] text-white/70">
          {footerData.newsletter.description}
        </p>

        <div className="mt-5 h-px bg-white/15" />

        <form
          onSubmit={handleSubmit}
          className="mt-5 flex flex-col gap-4 sm:flex-row"
        >
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            placeholder={footerData.newsletter.placeholder}
            className="h-11.5 min-w-0 flex-1 rounded-full border
            border-white/20 bg-transparent px-7 text-[11px]
            text-white outline-none placeholder:text-white/35
            focus:border-white/40"
          />

          <Button type="submit">
            {footerData.newsletter.button}
          </Button>
        </form>
      </div>

      {/* Main Footer */}
      <div className="mx-auto mt-20 max-w-400 px-8 pb-10">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_1fr_1fr]">

          {/* Company */}
          <div>
            <Link
              to="/"
              className="mb-5 flex w-fit items-center gap-2"
            >
              <img
                src={logo}
                alt={footerData.company.name}
                className="h-auto w-32.5 brightness-0 invert
                transition-opacity hover:opacity-80"
              />
            </Link>

            <p className="max-w-65.25 text-[16px] leading-[1.55] text-[#9D9EA2]">
              {footerData.company.description}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-[20px] font-semibold">
              {footerData.quickLinks.title}
            </h3>

            <div className="space-y-3">
              {footerData.quickLinks.links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-[14px] text-[#9D9EA2]
                  transition hover:text-white"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact + Payment */}
          <div>

            {/* Contact */}
            <div>
              <h3 className="mb-4 text-[20px] font-semibold">
                {footerData.contact.title}
              </h3>

              <a
                href={`mailto:${footerData.contact.email}`}
                className="text-[14px] text-[#9D9EA2] hover:text-white"
              >
                {footerData.contact.email}
              </a>
            </div>

            {/* Payment */}
            <div className="mt-7 flex items-center gap-4">
              {footerData.payments.map((payment) => (
                <div
                  key={payment.name}
                  className="flex h-8 w-12 items-center justify-center"
                >
                  <a
                    href={payment.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={payment.name}
                    className="flex h-full w-full items-center
                    justify-center transition-opacity hover:opacity-80"
                  >
                    <img
                      src={paymentIcons[payment.icon]}
                      alt={payment.name}
                      className="max-h-full max-w-full object-contain"
                    />
                  </a>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-400 pt-6">
          <div
            className="flex flex-col justify-between gap-5
            text-[14px] text-gray-400 md:flex-row"
          >
            <span>
              {footerData.copyright}
            </span>

            <div className="flex flex-wrap gap-6">
              {footerData.bottomLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="transition hover:text-white"
                >
                  {link.title}
                </Link>
              ))}
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}

