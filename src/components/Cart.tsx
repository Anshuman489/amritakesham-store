"use client"

import { useState, useEffect } from "react"
import { X, Plus, Minus, Edit, Trash2, Shield, Award } from "lucide-react"
import Image from "next/image"

interface CartItem {
  id: string
  name: string
  color: string
  price: number
  originalPrice?: number
  quantity: number
  image: string
}

interface CartProps {
  isOpen: boolean
  onClose: () => void
}

export function Cart({ isOpen, onClose }: CartProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: "1",
      name: "La Bohème Rose Gold",
      color: "Pink",
      price: 40.00,
      originalPrice: 60.00,
      quantity: 1,
      image: "/hero2.jpg" // Using existing image from public folder
    },
    {
      id: "2", 
      name: "Blush Beanie",
      color: "Grey / S",
      price: 15.00,
      quantity: 1,
      image: "/hero2.jpg" // Using existing image from public folder
    }
  ])

  const freeShippingThreshold = 100
  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal)

  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return
    setCartItems(items => 
      items.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    )
  }

  const removeItem = (id: string) => {
    setCartItems(items => items.filter(item => item.id !== id))
  }

  // Prevent body scroll when cart is open
  useEffect(() => {
    if (isOpen) {
      // Get current scrollbar width to prevent layout shift
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = '0px'
    }
    
    return () => {
      document.body.style.overflow = 'unset'
      document.body.style.paddingRight = '0px'
    }
  }, [isOpen])

  return (
    <>
      {/* Backdrop - Dims the background */}
      <div 
        className={`fixed inset-0 bg-black bg-opacity-20 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-60' : 'opacity-0 pointer-events-none'
        }`}
        onClick={onClose}
      />
      
      {/* Cart Drawer */}
      <div 
        className={`fixed top-0 right-0 h-full w-full max-w-sm bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } shadow-2xl`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-lg font-semibold text-gray-900">SHOPPING CART</h2>
          <button 
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-5 w-5 text-gray-600" />
          </button>
        </div>

        {/* Free Shipping Banner */}
        {remainingForFreeShipping > 0 && (
          <div className="p-4 bg-gradient-to-r from-orange-50 to-red-50 border-b border-orange-200">
            <p className="text-sm text-gray-800">
              Almost there, add <span className="font-bold text-red-600">${remainingForFreeShipping.toFixed(2)}</span> more to get{" "}
              <span className="font-bold text-red-600">FREE SHIPPING!</span>
            </p>
          </div>
        )}

        {subtotal >= freeShippingThreshold && (
          <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-b border-green-200">
            <p className="text-sm text-green-800 font-medium">
              🎉 Congratulations! You qualify for <span className="font-bold">FREE SHIPPING!</span>
            </p>
          </div>
        )}

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full p-8">
              <div className="text-gray-400 mb-4">
                <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
              </div>
              <p className="text-gray-500 text-lg">Your cart is empty</p>
            </div>
          ) : (
            <div className="p-4 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-3 p-3 bg-gray-50 rounded-lg">
                  {/* Product Image */}
                  <div className="w-16 h-16 bg-white rounded-lg overflow-hidden flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={64}
                      height={64}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-gray-900 truncate">{item.name}</h3>
                    <p className="text-sm text-gray-500">{item.color}</p>
                    
                    {/* Price */}
                    <div className="flex items-center gap-2 mt-1">
                      {item.originalPrice && (
                        <span className="text-sm text-gray-400 line-through">
                          ${item.originalPrice.toFixed(2)}
                        </span>
                      )}
                      <span className="font-bold text-orange-600">
                        ${item.price.toFixed(2)}
                      </span>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-gray-300 rounded-md">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="p-1 hover:bg-gray-100 transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus className="h-4 w-4 text-gray-600" />
                        </button>
                        <span className="px-3 py-1 text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-1 hover:bg-gray-100 transition-colors"
                        >
                          <Plus className="h-4 w-4 text-gray-600" />
                        </button>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex items-center gap-2">
                        <button className="p-1 hover:bg-gray-200 rounded transition-colors">
                          <Edit className="h-4 w-4 text-gray-600" />
                        </button>
                        <button 
                          onClick={() => removeItem(item.id)}
                          className="p-1 hover:bg-red-100 rounded transition-colors"
                        >
                          <Trash2 className="h-4 w-4 text-red-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="border-t bg-white p-4 space-y-4">
            {/* Subtotal */}
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Subtotal:</span>
              <span className="text-lg font-bold">${subtotal.toFixed(2)}</span>
            </div>

            {/* Taxes Notice */}
            <p className="text-xs text-gray-500">
              Taxes, shipping and discounts codes calculated at checkout
            </p>

            {/* Action Buttons */}
            <div className="space-y-2">
              <button className="w-full bg-gray-100 text-gray-900 py-3 px-4 rounded-md font-medium hover:bg-gray-200 transition-colors">
                VIEW CART
              </button>
              <button className="w-full bg-cyan-400 text-white py-3 px-4 rounded-md font-medium hover:bg-cyan-500 transition-colors">
                CHECK OUT
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  )
}
