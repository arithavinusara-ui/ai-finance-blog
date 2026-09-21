'use client'

import { useState, useEffect } from 'react'

export default function ReadingProgressBar() {
  const [completion, setCompletion] = useState(0)

  useEffect(() => {
    const updateScrollCompletion = () => {
      // සම්පූර්ණ Page එකේ උස සහ වත්මන් Scroll පිහිටීම ගණනය කිරීම
      const currentProgress = window.scrollY
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight
      
      if (scrollHeight) {
        setCompletion(Number((currentProgress / scrollHeight).toFixed(2)) * 100)
      }
    }

    window.addEventListener('scroll', updateScrollCompletion)

    return () => {
      window.removeEventListener('scroll', updateScrollCompletion)
    }
  }, [])

  return (
    <div className="fixed top-0 left-0 w-full h-1 bg-transparent z-50">
      <div
        className="h-full bg-gradient-to-r from-teal-400 to-indigo-500 transition-all duration-150"
        style={{ width: `${completion}%` }}
      />
    </div>
  )
}