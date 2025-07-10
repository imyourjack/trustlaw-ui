import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import { generateSeoMetadata, generateLocalBusinessJsonLd } from '@/utils/seo';

// 폰트 최적화 - Geist 폰트는 latin과 latin-ext만 지원
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin", "latin-ext"],
  display: 'swap',
  preload: true,
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin", "latin-ext"],
  display: 'swap',
  preload: true,
})

// 구조화된 데이터 생성
const structuredData = generateLocalBusinessJsonLd();

// SEO 메타데이터 생성
export const metadata = generateSeoMetadata({
  title: '최길성 법무사사무소 | 광주 전남 개인회생·파산 전문',
  description: '광주·전남을 중심으로, 전국 어디서든 회생·파산 상담이 가능합니다. 부동산등기, 법인등기, 민사소송, 이혼·상속·개명 등 가사사건까지 신속하고 정확하게 도와드립니다.',
  url: 'https://yourdomain.com',
  type: 'website',
  siteName: '최길성 법무사사무소',
  locale: 'ko_KR',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://yourdomain.com',
    siteName: '최길성 법무사사무소',
    title: '최길성 법무사사무소 | 광주 전남 개인회생·파산 전문',
    description: '광주·전남을 중심으로, 전국 어디서든 회생·파산 상담이 가능합니다. 부동산등기, 법인등기, 민사소송, 이혼·상속·개명 등 가사사건까지 신속하고 정확하게 도와드립니다.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '최길성 법무사사무소',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '최길성 법무사사무소 | 광주 전남 개인회생·파산 전문',
    description: '광주·전남을 중심으로, 전국 어디서든 회생·파산 상담이 가능합니다.',
    images: ['/images/og-image.jpg'],
  },
  icons: {
    icon: [{ url: '/favicon.ico' }],
    apple: [{ url: '/apple-touch-icon.png' }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    viewportFit: 'cover',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification=your-verification-code',
    other: {
      'naver-site-verification': 'your-naver-verification-code',
    },
  },
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        {/* 구조화된 데이터 추가 */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        {/* 구글 애널리틱스 스크립트 (필요시 주석 해제) */}
        {/* <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </Script> */}
      </head>
      <body className="min-h-screen bg-background font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
