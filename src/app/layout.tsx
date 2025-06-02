import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: '최길성 법무사사무소',
  description: '광주, 전남 지역의 개인회생, 개인파산, 부동산 및 법인등기, 민사소송, 가사사건에 특화된 전문 법무사입니다.',
  icons: {
    icon: '/favicon.ico',
  },
  appleWebApp: {
    capable: true,
    title: '최길성 법무사사무소',
    statusBarStyle: 'black-translucent',
  },
  keywords: [
    '광주 개인회생',
    '광주 파산',
    '개인파산',
    '부동산등기',
    '법인등기',
    '민사소송',
    '물품대금',
    '공사대금',
    '손해배상',
    '가사사건',
    '이혼',
    '개명',
    '상속',
    '광주 법무사'
  ],
  openGraph: {
    title: '최길성 법무사사무소',
    description: '광주 개인회생, 개인파산, 부동산 및 법인등기, 민사·가사사건 법률상담 전문.',
    url: 'https://trustlaw.kr',
    siteName: 'TrustLaw',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: '광주 개인회생 파산 법률상담 미리보기 이미지',
      },
    ],
    locale: 'ko_KR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko">
      <head>
        {/* ✅ 카카오맵 JavaScript SDK 추가 */}
        <script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=YOUR_KAKAO_API_KEY&autoload=false`}
          async
        ></script>
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-white text-gray-900`}
      >
        {children}
      </body>
    </html>
  )
}
