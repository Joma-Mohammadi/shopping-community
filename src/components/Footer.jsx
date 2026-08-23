import { useState } from "react";
import { Link } from "react-router-dom";

import {
  FaCcMastercard,
  FaCcVisa,
  FaBitcoin,
  FaCcAmex,
  FaPaperPlane,
} from "react-icons/fa";

import { GiThreeLeaves } from "react-icons/gi";

import footerData from "../data/footer.json";

const paymentIcons = {
  mastercard: FaCcMastercard,
  visa: FaCcVisa,
  bitcoin: FaBitcoin,
  amex: FaCcAmex,
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

      <div className="absolute left-1/2 top-0 w-[calc(100%-32px)] max-w-400 -translate-x-1/2 -translate-y-1/2 rounded-[15px] bg-[#075039] px-10 py-11 md:px-10">

        <h2 className=" text-[32px] font-bold leading-[1.05] tracking-[-1px] md:text-[40px]">
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
            className="h-11.5 min-w-0 flex-1 rounded-full border border-white/20 bg-transparent px-7 text-[11px] text-white outline-none placeholder:text-white/35 focus:border-white/40"
          />

          <button
            type="submit"
            className="h-11.5 shrink-0 rounded-full bg-[#0abe28] px-8 text-[11px] font-bold text-white transition hover:bg-[#08a923]"
          >
            {footerData.newsletter.button}
          </button>
        </form>

      </div>


      {/* Main Footer */}

      <div className="mx-auto max-w-400 px-8 pb-10">

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.1fr_1fr_1fr]">

          {/* Company */}

          <div>

            <Link
              to="/"
              className="mb-5 flex w-fit items-center gap-2"
            >
              <GiThreeLeaves
                size={28}
                className="text-white"
              />

              <div>
                <div className="font-serif text-[17px] tracking-[2px]">
                  {footerData.company.name}
                </div>

                <div className="text-[6px] tracking-[3px] text-white/60">
                  {footerData.company.country}
                </div>
              </div>
            </Link>

            <p className="max-w-56.25 text-[11px] leading-[1.55] text-white/55">
              {footerData.company.description}
            </p>

          </div>


          {/* Quick Links */}

          <div>

            <h3 className="mb-4 text-[13px] font-semibold">
              {footerData.quickLinks.title}
            </h3>

            <div className="grid grid-cols-2 gap-x-8">

              <div className="space-y-3">
                {footerData.quickLinks.links.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-[10px] text-white/50 transition hover:text-white"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>

              <div className="space-y-3">
                {footerData.quickLinksRight.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className="block text-[10px] text-white/50 transition hover:text-white"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>

            </div>


            {/* Contact */}

            <div className="mt-7">

              <h3 className="mb-4 text-[13px] font-semibold">
                {footerData.contact.title}
              </h3>

              <a
                href={`mailto:${footerData.contact.email}`}
                className="text-[10px] text-white/50 hover:text-white"
              >
                {footerData.contact.email}
              </a>

            </div>


            {/* More */}

            <div className="mt-7">

              <h3 className="mb-4 text-[13px] font-semibold">
                {footerData.more.title}
              </h3>

              <div className="grid grid-cols-2 gap-x-8">

                {footerData.more.columns.map((column, index) => (
                  <div
                    key={index}
                    className="space-y-3"
                  >
                    {column.map((link) => (
                      <Link
                        key={link.path}
                        to={link.path}
                        className="block text-[10px] leading-4 text-white/50 transition hover:text-white"
                      >
                        {link.title}
                      </Link>
                    ))}
                  </div>
                ))}

              </div>

            </div>


            {/* Payment */}

            <div className="mt-7 flex items-center gap-8">

              {footerData.payments.map((payment) => {
                const Icon = paymentIcons[payment];

                return (
                  <div
                    key={payment}
                    className="flex h-5 w-8.75 items-center justify-center rounded-[3px] bg-white"
                  >
                    <Icon
                      size={23}
                      className="text-gray-700"
                    />
                  </div>
                );
              })}

            </div>

          </div>

        </div>


        {/* Bottom */}

        <div className="mt-10 border-t border-white/10 pt-6">

          <div className="flex flex-col justify-between gap-5 text-[9px] text-white/45 md:flex-row">

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