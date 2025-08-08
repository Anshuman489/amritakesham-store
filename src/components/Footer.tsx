"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  const [infoOpen, setInfoOpen] = useState(false);
  const [linksOpen, setLinksOpen] = useState(false);
  const [newsOpen, setNewsOpen] = useState(false);

  return (
    <footer
      className="pt-12 pb-8 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "#94BF8B3D" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {/* Logo and Company Info */}
          <div className="flex flex-col">
            <div className="items-center gap-1 mb-4">
              <Image
                src="/logo.png"
                alt="AmrithaKesham Logo"
                width={60}
                height={60}
                className="w-[60px] h-[60px] flex-shrink-0 mb-2"
              />
              <div className="min-w-0 flex-1">
                <h3
                  className="font-medium text-emerald-900 leading-tight"
                  style={{
                    fontFamily: "var(--font-pt-serif), serif",
                    fontSize: "36px",
                  }}
                >
                  Amrithakesham
                </h3>
              </div>
            </div>

            <div
              className="space-y-2 text-gray-500 leading-6 mb-6"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: "14px",
              }}
            >
              <div className="flex items-start">
                <svg
                  className="w-4 h-4 text-emerald-600 mt-0.5 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                </svg>
                <div>
                  <p>184 Main Rd E, St Albans</p>
                  <p>VIC 3021, India</p>
                </div>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-emerald-600 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <p>contact@company.com</p>
              </div>

              <div className="flex items-center">
                <svg
                  className="w-4 h-4 text-emerald-600 mr-3 flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <p>+001 2233 456</p>
              </div>
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mt-3">
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="Facebook"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="Twitter"
                >
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="Instagram"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.488-1.995.703 0 1.219.219 1.219 1.219 0 .797-.219 1.995-.359 3.104-.219.937.468 1.714 1.406 1.714 1.687 0 2.987-1.78 2.987-4.344 0-2.270-1.625-3.856-3.949-3.856-2.691 0-4.281 2.018-4.281 4.104 0 .813.312 1.688.703 2.165.078.094.09.177.067.272-.073.297-.234.953-.266 1.087-.041.177-.135.214-.312.129-1.18-.547-1.918-2.270-1.918-3.653 0-2.984 2.167-5.726 6.256-5.726 3.287 0 5.842 2.347 5.842 5.487 0 3.271-2.063 5.906-4.926 5.906-.961 0-1.866-.5-2.174-1.103l-.590 2.249c-.213.818-.789 1.844-1.175 2.471.886.274 1.814.418 2.775.418 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.001z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="LinkedIn"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </Link>
              <Link
                href="#"
                className="text-gray-500 hover:text-gray-700 transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-label="Pinterest"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.719-.359-1.781c0-1.663.662-2.912 1.488-2.912.703 0 1.219.497 1.219 1.22 0 .797-.219 1.995-.359 3.104-.219.937.468 1.714 1.406 1.714 1.687 0 2.987-1.78 2.987-4.344 0-2.270-1.625-3.856-3.949-3.856-2.691 0-4.281 2.018-4.281 4.104 0 .813.312 1.688.703 2.165.078.094.09.177.067.272-.073.297-.234.953-.266 1.087-.041.177-.135.214-.312.129-1.18-.547-1.918-2.270-1.918-3.653 0-2.984 2.167-5.726 6.256-5.726 3.287 0 5.842 2.347 5.842 5.487 0 3.271-2.063 5.906-4.926 5.906-.961 0-1.866-.5-2.174-1.103l-.590 2.249c-.213.818-.789 1.844-1.175 2.471 .886.274 1.814.418 2.775.418 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001.012.001z" />
                </svg>
              </Link>
            </div>
          </div>

          {/* Information Column */}
          <div className="lg:ml-10">
            {/* Mobile toggle header */}
            <button
              type="button"
              className="flex w-full items-center justify-between md:hidden mb-4"
              aria-expanded={infoOpen}
              aria-controls="footer-info"
              onClick={() => setInfoOpen((v) => !v)}
            >
              <h4
                className="font-normal"
                style={{
                  fontFamily: "var(--font-pt-serif), serif",
                  fontSize: "24px",
                  color: "#126B42",
                }}
              >
                Information
              </h4>
              <svg
                className={`w-4 h-4 text-current transition-transform ${
                  infoOpen ? "rotate-180" : "rotate-0"
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/* Tablet/Desktop header */}
            <h4
              className="hidden md:block font-normal mb-5"
              style={{
                fontFamily: "var(--font-pt-serif), serif",
                fontSize: "24px",
                color: "#126B42",
              }}
            >
              Information
            </h4>
            {/* Content */}
            <div
              id="footer-info"
              className={`${infoOpen ? "block" : "hidden"} md:block`}
            >
              <ul
                className="space-y-2 leading-6"
                style={{
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: "14px",
                }}
              >
                <li>
                  <Link
                    href="/about"
                    className="text-gray-500 hover:text-emerald-600 transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-500 hover:text-emerald-600 transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-gray-500 hover:text-emerald-600 transition-colors"
                  >
                    Terms & Conditions
                  </Link>
                </li>
                <li>
                  <Link
                    href="/returns"
                    className="text-gray-500 hover:text-emerald-600 transition-colors"
                  >
                    Returns & Exchanges
                  </Link>
                </li>
                <li>
                  <Link
                    href="/shipping"
                    className="text-gray-500 hover:text-emerald-600 transition-colors"
                  >
                    Shipping & Delivery
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-500 hover:text-emerald-600 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Useful Links Column */}
          <div className="lg:ml-8">
            {/* Mobile toggle header */}
            <button
              type="button"
              className="flex w-full items-center justify-between md:hidden mb-4"
              aria-expanded={linksOpen}
              aria-controls="footer-links"
              onClick={() => setLinksOpen((v) => !v)}
            >
              <h4
                className="font-normal"
                style={{
                  fontFamily: "var(--font-pt-serif), serif",
                  fontSize: "24px",
                  color: "#126B42",
                }}
              >
                Useful links
              </h4>
              <svg
                className={`w-4 h-4 text-current transition-transform ${
                  linksOpen ? "rotate-180" : "rotate-0"
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/* Tablet/Desktop header */}
            <h4
              className="hidden md:block font-normal mb-5"
              style={{
                fontFamily: "var(--font-pt-serif), serif",
                fontSize: "24px",
                color: "#126B42",
              }}
            >
              Useful links
            </h4>
            {/* Content */}
            <div
              id="footer-links"
              className={`${linksOpen ? "block" : "hidden"} md:block`}
            >
              <ul
                className="space-y-2 leading-6"
                style={{
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: "14px",
                }}
              >
                <li>
                  <Link
                    href="/store-location"
                    className="text-gray-500 hover:text-emerald-600 transition-colors"
                  >
                    Store Location
                  </Link>
                </li>
                <li>
                  <Link
                    href="/latest-news"
                    className="text-gray-500 hover:text-emerald-600 transition-colors"
                  >
                    Latest News
                  </Link>
                </li>
                <li>
                  <Link
                    href="/my-account"
                    className="text-gray-500 hover:text-emerald-600 transition-colors"
                  >
                    My Account
                  </Link>
                </li>
                <li>
                  <Link
                    href="/size-guide"
                    className="text-gray-500 hover:text-emerald-600 transition-colors"
                  >
                    Size Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faqs"
                    className="text-gray-500 hover:text-emerald-600 transition-colors"
                  >
                    FAQs 2
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faqs"
                    className="text-gray-500 hover:text-emerald-600 transition-colors"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup Column */}  
          <div className="lg:mr-2">
            {/* Mobile toggle header */}
            <button
              type="button"
              className="flex w-full items-center justify-between md:hidden mb-4"
              aria-expanded={newsOpen}
              aria-controls="footer-news"
              onClick={() => setNewsOpen((v) => !v)}
            >
              <h4
                className="font-normal"
                style={{
                  fontFamily: "var(--font-pt-serif), serif",
                  fontSize: "24px",
                  color: "#126B42",
                }}
              >
                Newsletter Signup
              </h4>
              <svg
                className={`w-4 h-4 text-current transition-transform ${
                  newsOpen ? "rotate-180" : "rotate-0"
                }`}
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            {/* Tablet/Desktop header */}
            <h4
              className="hidden md:block font-normal mb-5"
              style={{
                fontFamily: "var(--font-pt-serif), serif",
                fontSize: "24px",
                color: "#126B42",
              }}
            >
              Newsletter Signup
            </h4>
            {/* Content */}
            <div
              id="footer-news"
              className={`${newsOpen ? "block" : "hidden"} md:block`}
            >
              <p
                className="text-gray-500 mb-4 leading-6"
                style={{
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: "14px",
                }}
              >
                Subscribe to our newsletter and get 10% off on your first purchase!
              </p>
              <div className="flex flex-col sm:flex-row items-stretch gap-3 mb-4">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full sm:flex-1 px-4 py-2 border border-gray-300 rounded-full sm:rounded-r-none focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent sm:border-r-0"
                  style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: "14px",
                  }}
                />
                <button
                  className="w-full sm:w-auto px-6 py-2 bg-emerald-600 text-white rounded-full sm:rounded-l-none hover:bg-emerald-700 transition-colors font-medium sm:-ml-3"
                  style={{
                    fontFamily: "var(--font-poppins), sans-serif",
                    fontSize: "14px",
                  }}
                >
                  Subscribe
                </button>
              </div>
              
              {/* Payment Methods */}
              <div className="mt-4">
                <Image
                  src="/payment2.webp"
                  alt="Accepted Payment Methods"
                  width={800}
                  height={200}
                  className="w-full h-auto object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
