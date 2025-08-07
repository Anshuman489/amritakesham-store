"use client"

import { useEffect } from "react"

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  useEffect(() => {
    // Ensure focus-visible is set on client-side to match server
    if (!document.documentElement.hasAttribute('data-js-focus-visible')) {
      document.documentElement.setAttribute('data-js-focus-visible', '')
    }
  }, [])

  return <>{children}</>
}
