"use client"

import React, { useRef, useEffect } from "react"
import { useMousePositionRef } from "@/hooks/use-mouse-position-ref"

interface CursorProximityTextProps {
  children: string
  className?: string
  style?: React.CSSProperties
  containerRef: React.RefObject<HTMLDivElement>
  radius?: number
  as?: React.ElementType
}

export default function CursorProximityText({
  children,
  className = "",
  style = {},
  containerRef,
  radius = 100,
  as: Component = "span"
}: CursorProximityTextProps) {
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([])
  const mousePositionRef = useMousePositionRef(containerRef)

  const calculateDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
  }

  const updateLetters = () => {
    if (!containerRef.current) return

    const containerRect = containerRef.current.getBoundingClientRect()

    letterRefs.current.forEach((letterRef) => {
      if (!letterRef) return

      const rect = letterRef.getBoundingClientRect()
      const letterCenterX = rect.left + rect.width / 2 - containerRect.left
      const letterCenterY = rect.top + rect.height / 2 - containerRect.top

      const distance = calculateDistance(
        mousePositionRef.current.x,
        mousePositionRef.current.y,
        letterCenterX,
        letterCenterY
      )

      if (distance <= radius) {
        const proximity = 1 - (distance / radius)
        const scale = 1 + (proximity * 0.3)
        const brightness = 1 + (proximity * 0.5)
        
        letterRef.style.transform = `scale(${scale})`
        letterRef.style.filter = `brightness(${brightness})`
        letterRef.style.transition = "all 0.2s ease-out"
      } else {
        letterRef.style.transform = "scale(1)"
        letterRef.style.filter = "brightness(1)"
        letterRef.style.transition = "all 0.3s ease-out"
      }
    })
  }

  useEffect(() => {
    const animationFrame = () => {
      updateLetters()
      requestAnimationFrame(animationFrame)
    }
    requestAnimationFrame(animationFrame)
  }, [])

  const words = children.split(" ")
  let letterIndex = 0

  return (
    <Component className={className} style={style}>
      {words.map((word, wordIndex) => (
        <span key={wordIndex} className="inline-block whitespace-nowrap">
          {word.split("").map((letter) => {
            const currentLetterIndex = letterIndex++
            return (
              <span
                key={currentLetterIndex}
                ref={(el) => {
                  letterRefs.current[currentLetterIndex] = el
                }}
                className="inline-block"
                style={{ transformOrigin: "center" }}
              >
                {letter}
              </span>
            )
          })}
          {wordIndex < words.length - 1 && (
            <span className="inline-block">&nbsp;</span>
          )}
        </span>
      ))}
    </Component>
  )
}
