"use client";
// Cart item type for localStorage
interface CartItem {
  id: string;
  name: string;
  color: string;
  price: number;
  quantity: number;
  image: string;
}
import Image from "next/image";
import { useState } from "react";

const SIZES = [
  { label: "100ml", price: 300 },
  { label: "200ml", price: 550 },
  { label: "550ml", price: 1100 },
];

export function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState(SIZES[0]);
  const [quantity, setQuantity] = useState(2);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <section id="product-details" className="w-full min-h-[650px] md:min-h-[700px] bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-14 flex flex-col md:flex-row gap-6 md:gap-16 items-center justify-center relative overflow-hidden transition-all duration-300 font-dm-sans">
      {/* Left: Product Image */}
      <div className="relative w-full max-w-[260px] sm:max-w-xs md:max-w-sm flex-shrink-0 mb-4 md:mb-0">
        <div className="rounded-2xl overflow-hidden">
          <Image
            src="/hairoil.png"
            alt="AmrithaKeshan Hair Oil"
            width={400}
            height={400}
            className="object-cover w-full h-auto"
            priority
          />
        </div>
      </div>

      {/* Right: Product Details */}
  <div className="flex-1 w-full max-w-lg flex flex-col">
  <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif text-[#185B3C] mb-2 text-center md:text-left">AmrithaKesham Hair Oil</h2>
  <div className="text-lg sm:text-xl md:text-2xl text-green-800 font-medium mb-4 font-dm-sans text-center md:text-left">Rs. {selectedSize.price} <span className="text-base font-normal">(inr)</span></div>
  <p className="text-gray-600 mb-6 text-sm sm:text-base md:text-lg font-dm-sans text-center md:text-left">Beautiful hair begins here, get yours now</p>
  <div className="mb-4 font-dm-sans w-full flex flex-col items-center md:items-start">
          <label className="block text-gray-700 mb-1 font-medium font-dm-sans">Select size</label>
          <div className="relative w-full max-w-xs select-none">
            <button
              type="button"
              className="w-full flex items-center justify-between border border-green-400 rounded-xl px-5 py-3 bg-green-50 text-green-900 font-semibold shadow-sm hover:border-green-600 focus:outline-none focus:ring-2 focus:ring-green-300 transition font-dm-sans"
              onClick={() => setDropdownOpen((open) => !open)}
              aria-haspopup="listbox"
              aria-expanded={dropdownOpen}
            >
              <span>{selectedSize.label} </span>
              <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" className={`ml-2 transition-transform ${dropdownOpen ? 'rotate-180' : ''} text-green-700`}>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {dropdownOpen && (
              <ul className="absolute z-10 mt-2 w-full bg-white border border-green-200 rounded-xl shadow-lg overflow-hidden animate-fadeIn font-dm-sans">
                {SIZES.map((size) => (
                  <li
                    key={size.label}
                    className={`px-5 py-3 cursor-pointer hover:bg-green-100 text-green-900 font-medium flex items-center justify-between font-dm-sans ${selectedSize.label === size.label ? 'bg-green-50' : ''}`}
                    onClick={() => {
                      setSelectedSize(size);
                      setDropdownOpen(false);
                    }}
                  >
                    <span>{size.label}</span>
                    <span className="text-green-700 font-normal">₹{size.price}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
  <div className="mb-6 font-dm-sans w-full flex flex-col items-center md:items-start">
          <label className="block text-gray-700 mb-1 font-medium font-dm-sans">Select Quantity</label>
          <div className="flex items-center gap-3 sm:gap-4 font-dm-sans">
            <button
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-green-400 text-green-700 flex items-center justify-center text-lg sm:text-xl font-bold hover:bg-green-50 font-dm-sans"
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
              aria-label="Decrease quantity"
            >
              –
            </button>
            <span className="text-lg sm:text-xl font-semibold text-green-900 w-8 text-center font-dm-sans">{quantity}</span>
            <button
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-green-400 text-green-700 flex items-center justify-center text-lg sm:text-xl font-bold hover:bg-green-50 font-dm-sans"
              onClick={() => setQuantity(q => q + 1)}
              aria-label="Increase quantity"
            >
              +
            </button>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4 font-dm-sans w-full">
          <button
            className="w-full sm:w-auto flex-1 py-3 rounded-full border border-green-700 text-green-800 font-semibold text-base sm:text-lg hover:bg-green-50 transition font-dm-sans cursor-pointer"
            onClick={() => {
              // Add to cart logic: store in localStorage and dispatch event
              const cart: CartItem[] = JSON.parse(localStorage.getItem("cart") || "[]");
              const productId = `amrithakesham-hair-oil-${selectedSize.label}`;
              const existing = cart.find((item: CartItem) => item.id === productId);
              if (existing) {
                existing.quantity += quantity;
              } else {
                cart.push({
                  id: productId,
                  name: "AmrithaKesham Hair Oil",
                  color: selectedSize.label,
                  price: selectedSize.price,
                  quantity,
                  image: "/hairoil.png",
                });
              }
              localStorage.setItem("cart", JSON.stringify(cart));
              window.dispatchEvent(new Event("cart-updated"));
              window.dispatchEvent(new CustomEvent("open-cart"));
            }}
          >
            ADD TO BAG
          </button>
          <button className="w-full sm:w-auto flex-1 py-3 rounded-full bg-green-700 text-white font-semibold text-base sm:text-lg hover:bg-green-800 transition font-dm-sans cursor-pointer">BUY NOW</button>
        </div>
      </div>
    </section>
  );
}
