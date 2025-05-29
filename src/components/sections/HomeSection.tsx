import React from 'react'
import Image from 'next/image'

export default function HomeSection() {
  return (
    <section id="home" className="relative h-screen flex items-center">
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="/pic_home.webp"
          alt="광주 법무사 메인 배경"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      <div className="relative w-full text-white text-center px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          광주·전남 개인회생 · 파산 전문 법무사사무소
        </h1>

        <p className="text-xl md:text-2xl mb-8 leading-relaxed">
          광주·전남을 중심으로, 전국 어디서든 회생·파산 상담이 가능합니다. <br />
          부동산등기, 법인등기, 민사소송(물품대금·손해배상),<br className="hidden md:block" />
          이혼·상속·개명 등 가사사건까지 신속하고 정확하게 도와드립니다.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">
          <a href="tel:0212345678">
            {/* <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
              상담 예약하기
            </button> */}
          </a>
          <button
            onClick={() =>
              document.getElementById('consult')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="px-8 py-3 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
          >
            상담 방법 알아보기
          </button>
        </div>
      </div>
    </section>
  )
}
