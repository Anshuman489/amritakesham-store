"use client"

import Image from "next/image"
import { useState } from "react"

// Custom Chevron Down Icon
function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg 
      className={className} 
      fill="none" 
      stroke="currentColor" 
      viewBox="0 0 24 24" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
    </svg>
  )
}

export function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const faqs = [
    {
      id: 1,
      question: "What hair types are your products suitable for?",
      answer: "Our hair care products are formulated to work effectively on all hair types - straight, wavy, curly, and coily hair. Whether you have fine, thick, dry, oily, or chemically treated hair, our natural ingredients provide nourishment and care suitable for your specific hair needs."
    },
    {
      id: 2,
      question: "Are your ingredients natural or organic?",
      answer: "Yes, we use 100% natural ingredients in all our hair care products. Our formulations include traditional herbs, natural oils, and plant-based extracts. While we source the finest natural ingredients, we focus on traditional recipes passed down through generations for maximum effectiveness."
    },
    {
      id: 3,
      question: "Are your products sulfate and paraben-free?",
      answer: "Absolutely! All our products are completely free from sulfates, parabens, and harsh chemicals. We believe in gentle, natural hair care that doesn't strip your hair of its natural oils or cause irritation to your scalp."
    },
    {
      id: 4,
      question: "How long will it take to receive my order?",
      answer: "We typically process and ship orders within 1-2 business days. Delivery usually takes 3-5 business days within India. You'll receive a tracking number once your order ships so you can monitor its progress."
    },
    {
      id: 5,
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy for unopened products. If you're not satisfied with your purchase, you can return it within 30 days for a full refund. For opened products, we evaluate returns on a case-by-case basis to ensure customer satisfaction."
    },
    {
      id: 6,
      question: "Can I use your products daily?",
      answer: "Yes, our products are gentle enough for daily use. However, we recommend using hair oils 2-3 times per week for optimal results. Listen to your hair's needs - if it feels well-moisturized, you can use products less frequently."
    },
    {
      id: 7,
      question: "Can I return a product if it didn't work?",
      answer: "Yes, customer satisfaction is our priority. If a product doesn't work for your hair type or you experience any issues, please contact us within 30 days. We'll work with you to find a suitable solution or process a return."
    },
    {
      id: 8,
      question: "Do your products contain allergens?",
      answer: "Our products contain natural ingredients, some of which may cause allergic reactions in sensitive individuals. Common allergens in our products may include tree nuts (coconut, sesame), essential oils, and certain herbs. Please check the ingredient list carefully and do a patch test before first use."
    }
  ]

  const toggleFAQ = (faqId: number) => {
    console.log('Toggling FAQ ID:', faqId, 'Current open:', openFAQ)
    setOpenFAQ(prevOpen => prevOpen === faqId ? null : faqId)
  }

  return (
    <section className="pt-10 pb-20 md:pt-16 md:pb-24 bg-gradient-to-b from-white to-green-50/30 relative overflow-hidden">
      {/* Decorative Logo Background */}
      <div className="absolute top-5 right-10 opacity-10 hidden lg:block">
        <Image
          src="/logo.png"
          alt="Amritakesham Logo"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-start justify-center mb-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-[#15442F] leading-tight" style={{ fontFamily: 'PT Serif, serif' }}>
              Frequently Asked Questions
            </h2>
          </div>
          <div className="w-20 h-1 bg-gradient-to-r from-green-600 to-green-400 rounded-full mx-auto mb-8"></div>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'DM Sans, sans-serif' }}>
            Find answers to common questions about our natural hair care products and services.
          </p>
        </div>

        {/* FAQ Grid */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 md:items-start">
            {faqs.map((faq, index) => (
              <div
                key={`faq-${faq.id}`}
                className={`rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl self-start ${
                  openFAQ === faq.id ? 'bg-green-50 border border-green-200' : 'bg-white border border-gray-200'
                }`}
              >
                <button
                  onClick={() => toggleFAQ(faq.id)}
                  className="w-full text-left p-6 md:p-8 focus:outline-none"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg md:text-xl font-semibold text-[#15442F] leading-tight pr-4" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                      {faq.question}
                    </h3>
                    <ChevronDownIcon
                      className={`w-6 h-6 text-green-600 transform transition-transform duration-300 flex-shrink-0 ${
                        openFAQ === faq.id ? 'rotate-180' : 'rotate-0'
                      }`}
                    />
                  </div>
                </button>
                
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    openFAQ === faq.id 
                      ? 'max-h-96 opacity-100' 
                      : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 md:px-8 pb-6 md:pb-8">
                    <div className="border-t border-green-100 pt-6">
                      <p className="text-gray-700 leading-relaxed text-base md:text-lg" style={{ fontFamily: 'DM Sans, sans-serif' }}>
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center bg-white px-8 py-4 rounded-full shadow-lg border border-green-100">
            <Image
              src="/logo2.png"
              alt="Amritakesham Logo"
              width={24}
              height={24}
              className="object-contain mr-3"
            />
            <p className="text-[#15442F] font-medium" style={{ fontFamily: 'DM Sans, sans-serif' }}>
              Have more questions? Contact us directly!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
