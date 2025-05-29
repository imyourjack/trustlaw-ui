'use client'

import { useEffect, useRef, useState } from 'react'
import Header from '@/components/sections/Header'
import HomeSection from '@/components/sections/HomeSection'
import QualificationSection from '@/components/sections/QualificationSection'
import ConsultSection from '@/components/sections/ConsultSection'
import FaqSection from '@/components/sections/FaqSection'
import LocationSection from '@/components/sections/LocationSection'

// 스크롤에 따라 메뉴 글자 색 변화
// const SECTION_IDS = ['home', 'qualification', 'consult', 'faq', 'location']

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    // const sections = SECTION_IDS.map(id => document.getElementById(id)).filter((el): el is HTMLElement => el !== null)

    if (observerRef.current) observerRef.current.disconnect()

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.id
            setActiveSection(id)
          }
        })
      },
      {
        rootMargin: '-40% 0px -50% 0px',
        threshold: 0.1,
      }
    )

    // sections.forEach(section => {
    //   if (section) observerRef.current?.observe(section)
    // })

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <div className="bg-gray-50 text-gray-900">
      <Header activeSection={activeSection} />
      <main className="w-full px-0 py-0">
        <HomeSection />
      </main>
      <main className="max-w-screen-lg mx-auto px-4 py-12 space-y-24">
        <QualificationSection />
        <ConsultSection />
        <FaqSection />
        <LocationSection />
      </main>
    </div>
  )
}
