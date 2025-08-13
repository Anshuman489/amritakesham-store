"use client";
import Link from "next/link";
import { Trash2 } from "lucide-react";
import { useEffect, useState } from "react";

import { useCartStore, CartItem } from "@/store/cartStore";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function CheckoutPage() {
  const cartCount = useCartStore((s) => s.items.length);
  const items = useCartStore((s) => s.items);
  const deleteItem = useCartStore((s) => s.removeItem);
  const updateQty = useCartStore((s) => s.updateQty);
  const [form, setForm] = useState({
    name: "",
    card: "",
    exp: "",
    cvv: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });
  // Selection state for each item
  const [selected, setSelected] = useState<{ [id: string]: boolean }>({});
  // Select all by default on first render
  useEffect(() => {
    setSelected(Object.fromEntries(items.map((it) => [it.id, true])));
  }, [items.length]);

  const selectedItems = items.filter((it) => selected[it.id]);
  const selectedSubtotal = selectedItems.reduce((s, it) => s + it.price * it.qty, 0);
  const selectedShipping = selectedItems.length > 0 ? 4 : 0;
  const selectedTotal = selectedSubtotal + selectedShipping;

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });
  const canPay =
    selectedItems.length > 0 &&
    form.name &&
    form.card.replace(/\s/g, "").length >= 12 &&
    /^(0[1-9]|1[0-2])\/[0-9]{2}$/.test(form.exp) &&
    /^[0-9]{3,4}$/.test(form.cvv) &&
    form.address;
  const checkout = () => {
    alert(
      `This is a demo checkout. You selected: ` +
      selectedItems.map((it) => `${it.name} (x${it.qty})`).join(", ") +
      ". Hook up your gateway and order API here."
    );
  };
  const handleCartClick = () => {
    window.location.reload();
  };
  return (
    <div className="min-h-screen bg-background text-foreground font-dm-sans">
  <Header cartItemCount={cartCount} onCartClick={handleCartClick} />
  <main className="mx-auto max-w-6xl px-2 py-6 sm:px-4 sm:py-10 grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-8">
        {/* Left: Cart + Address */}
  <section className="lg:col-span-2 w-full">
          <h1 className="text-2xl sm:text-3xl font-semibold text-primary font-pt-serif tracking-tight text-center sm:text-left">Your Cart</h1>
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center min-h-[200px] sm:min-h-[300px]">
              <p className="text-lg text-muted-foreground mb-6 mt-8">Your cart is empty.</p>
              <Link href="/" className="px-6 py-3 rounded-full bg-green-700 text-white font-semibold text-base hover:bg-green-800 transition font-dm-sans">Go to Shop</Link>
            </div>
          ) : (
            <>
              <p className="text-base text-muted-foreground mt-1">You have following items in your cart. Select the items you want to checkout.</p>
              <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
                {items.map((it) => (
                  <div
                    key={it.id}
                    className="flex flex-col sm:flex-row items-center sm:items-center justify-between rounded-2xl border border-border bg-card p-3 sm:p-4 shadow-sm gap-3 sm:gap-0"
                  >
                    <div className="flex items-center gap-2 sm:gap-4 w-full sm:w-auto">
                      <input
                        type="checkbox"
                        checked={!!selected[it.id]}
                        onChange={e => setSelected(sel => ({ ...sel, [it.id]: e.target.checked }))}
                        className="accent-[#1c6311] w-5 h-5 mr-2 cursor-pointer"
                        aria-label={`Select ${it.name}`}
                      />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={it.image || "/placeholder.svg"}
                        alt={it.name}
                        className="h-14 w-14 sm:h-16 sm:w-16 rounded-xl object-cover border border-muted"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="font-medium text-primary font-dm-sans text-base sm:text-lg truncate">{it.name}</div>
                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                          <button
                            className="px-2 py-1 rounded bg-muted text-primary border border-border hover:bg-primary hover:text-primary-foreground transition flex items-center justify-center cursor-pointer"
                            onClick={() => (it.qty === 1 ? deleteItem(it.id) : updateQty(it.id, it.qty - 1))}
                            aria-label={it.qty === 1 ? "Remove item" : "Decrease quantity"}
                          >
                            {it.qty === 1 ? <Trash2 size={16} /> : "−"}
                          </button>
                          <span className="text-xs text-muted-foreground min-w-[24px] text-center">{it.qty}</span>
                          <button
                            className="px-2 py-1 rounded bg-muted text-primary border border-border hover:bg-primary hover:text-primary-foreground transition cursor-pointer"
                            onClick={() => updateQty(it.id, it.qty + 1)}
                            aria-label="Increase quantity"
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row sm:flex-col items-end gap-2 sm:gap-2 mt-2 sm:mt-0">
                      <div className="text-primary font-semibold text-base sm:text-lg">{it.price * it.qty}rs</div>
                      <button
                        className="text-xs text-red-600 hover:underline mt-1 cursor-pointer"
                        onClick={() => deleteItem(it.id)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              {/* Address */}
              <div className="mt-8 sm:mt-10">
                <h2 className="text-2xl sm:text-3xl font-semibold text-primary font-pt-serif text-center sm:text-left">Enter Address</h2>
                <p className="text-xs text-muted-foreground text-center sm:text-left">Or select from existing ones</p>
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                  <textarea
                    name="address"
                    placeholder="Street address"
                    value={form.address}
                    onChange={onChange}
                    className="sm:col-span-2 min-h-[80px] sm:min-h-[100px] rounded-xl border border-border p-2 sm:p-3 outline-none focus:ring-2 focus:ring-primary bg-background text-foreground font-dm-sans"
                  />
                  <input
                    name="city"
                    placeholder="City"
                    value={form.city}
                    onChange={onChange}
                    className="rounded-xl border border-border p-2 sm:p-3 outline-none focus:ring-2 focus:ring-primary bg-background text-foreground font-dm-sans"
                  />
                  <input
                    name="state"
                    placeholder="State"
                    value={form.state}
                    onChange={onChange}
                    className="rounded-xl border border-border p-2 sm:p-3 outline-none focus:ring-2 focus:ring-primary bg-background text-foreground font-dm-sans"
                  />
                  <input
                    name="zip"
                    placeholder="ZIP/Postal code"
                    value={form.zip}
                    onChange={onChange}
                    className="rounded-xl border border-border p-2 sm:p-3 outline-none focus:ring-2 focus:ring-primary bg-background text-foreground font-dm-sans"
                  />
                </div>
              </div>
            </>
          )}
        </section>
        {/* Right: Payment Card */}
  <aside className="lg:col-span-1 w-full mt-8 lg:mt-0">
          <div className="rounded-2xl sm:rounded-3xl border border-border bg-[#F3F8F2] p-4 sm:p-6 shadow-md w-full">
            <div className="flex items-center gap-2 sm:gap-3 mb-1">
              <h3 className="text-xl font-semibold text-primary font-serif">Bill Details</h3>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo.png" alt="Logo" className="h-7 w-7 sm:h-8 sm:w-8 object-contain ml-1" />
            </div>
            {/* Payment method section removed as per request */}
            <div className="mt-4 sm:mt-6 space-y-3 sm:space-y-4">
              <div className="mt-2 sm:mt-4 space-y-1 sm:space-y-2 text-sm sm:text-base">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>Rs {selectedSubtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>Rs {selectedShipping}</span>
                </div>
                <div className="flex justify-between font-semibold text-primary">
                  <span>Total (Tax incl.)</span>
                  <span>Rs {selectedTotal.toLocaleString()}</span>
                </div>
              </div>
              <button
                disabled={!canPay}
                onClick={checkout}
                className="mt-3 sm:mt-4 w-full rounded-xl bg-[#74a46d] py-3 sm:py-4 text-white font-semibold font-dm-sans text-base sm:text-lg disabled:opacity-100 transition hover:bg-[#1c6311]"
              >
                {`Pay ₹${selectedTotal.toLocaleString()} amount`}
              </button>
              <Link href="/" className="block text-center text-xs sm:text-sm underline mt-2 text-muted-foreground font-dm-sans">
                Continue shopping
              </Link>
            </div>
          </div>
        </aside>
      </main>
      <Footer />
    </div>
  );
}




