'use client'

import { useEffect, useRef, useState } from 'react'
import Header from '@/components/sections/Header'
import HomeSection from '@/components/sections/HomeSection'
import QualificationSection from '@/components/sections/QualificationSection'
import ConsultSection from '@/components/sections/ConsultSection'
import FaqSection from '@/components/sections/FaqSection'
import LocationSection from '@/components/sections/LocationSection'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
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

    return () => observerRef.current?.disconnect()
  }, [])

  return (
    <>
      {/* ✅ Header는 회색 배경 div 바깥에 위치 */}
      <Header activeSection={activeSection} />
  
      {/* 상단 회색 배경 영역: 홈~상담 섹션에만 적용 */}
      <div className="bg-gray-50 text-gray-900">
        <main className="w-full px-0 py-0">
          <HomeSection />
          <QualificationSection />
        </main>
      </div>
  
      {/* FAQ 섹션은 배경 이미지가 있으므로 분리 */}
      <ConsultSection />
      <FaqSection />
  
      {/* 하단 회색 배경 계속 유지 */}
      <div className="bg-gray-50 text-gray-900">
        <main className="w-full px-0 py-0">
          <LocationSection />
        </main>
      </div>
    </>
  )
  
}
