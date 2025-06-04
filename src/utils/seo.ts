import { Metadata, Viewport } from 'next';

interface OpenGraphImage {
  url: string;
  width?: number;
  height?: number;
  alt?: string;
}

interface OpenGraphMetadata {
  type: 'website' | 'article';
  locale?: string;
  url?: string;
  siteName?: string;
  title?: string;
  description?: string;
  images?: OpenGraphImage[];
}

interface TwitterMetadata {
  card?: 'summary' | 'summary_large_image' | 'app' | 'player';
  title?: string;
  description?: string;
  images?: string[];
}

interface IconsMetadata {
  icon?: Array<{ url: string; sizes?: string; type?: string }>;
  apple?: Array<{ url: string }>;
}

type SeoConfig = {
  title: string;
  description: string;
  url: string;
  type?: 'website' | 'article';
  siteName?: string;
  locale?: string;
  openGraph?: Partial<OpenGraphMetadata>;
  twitter?: TwitterMetadata;
  icons?: IconsMetadata;
  appleWebApp?: {
    capable?: boolean;
    title?: string;
    statusBarStyle?: 'default' | 'black' | 'black-translucent';
  };
  viewport?: Viewport;
  robots?: {
    index?: boolean;
    follow?: boolean;
    googleBot?: string | {
      index?: boolean;
      follow?: boolean;
      noimageindex?: boolean;
      'max-video-preview'?: number | string;
      'max-image-preview'?: 'none' | 'standard' | 'large';
      'max-snippet'?: number;
    };
  };
  verification?: {
    google?: string;
    other?: Record<string, string>;
  };
};

export const defaultSeoConfig: SeoConfig = {
  title: '개인회생 · 파산 전문 법무사사무소',
  description: '광주·전남을 중심으로, 전국 어디서든 회생·파산 상담이 가능합니다. 부동산등기, 법인등기, 민사소송, 이혼·상속·개명 등 가사사건까지 신속하고 정확하게 도와드립니다.',
  url: 'https://yourdomain.com',
  type: 'website',
  siteName: '법무법인 신화',
  locale: 'ko_KR',
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://yourdomain.com',
    siteName: '법무법인 신화',
    title: '개인회생 · 파산 전문 법무사사무소',
    description: '광주·전남을 중심으로, 전국 어디서든 회생·파산 상담이 가능합니다.',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: '개인회생 · 파산 전문 법무사사무소',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '개인회생 · 파산 전문 법무사사무소',
    description: '광주·전남을 중심으로, 전국 어디서든 회생·파산 상담이 가능합니다.',
    images: ['/images/og-image.jpg'],
  },
};

export const generateSeoMetadata = (config: Partial<SeoConfig> = {}): Metadata => {
  // Merge config with defaults
  const baseConfig = { ...defaultSeoConfig, ...config };
  
  // Destructure and provide defaults
  const {
    title = '법무법인 신화',
    description = '개인회생 · 파산 전문 법무사사무소',
    url = 'https://yourdomain.com',
    type = 'website',
    ...restConfig
  } = baseConfig;
  
  const seo = {
    title,
    description,
    url,
    type,
    ...restConfig,
  };

  // Ensure openGraph has required fields
  const openGraph: OpenGraphMetadata = {
    type: seo.openGraph?.type || 'website',
    title: seo.openGraph?.title || seo.title,
    description: seo.openGraph?.description || seo.description,
    url: seo.openGraph?.url || seo.url,
    siteName: seo.openGraph?.siteName || seo.siteName,
    locale: seo.openGraph?.locale || seo.locale,
    ...seo.openGraph,
  };

  // Build metadata object
  const metadata: Metadata = {
    title: seo.title,
    description: seo.description,
    metadataBase: new URL(seo.url),
    alternates: {
      canonical: seo.url,
    },
    openGraph,
  };

  // Add twitter card if provided
  if (seo.twitter) {
    metadata.twitter = {
      ...seo.twitter,
      title: seo.twitter.title || seo.title,
      description: seo.twitter.description || seo.description,
    };
  }

  // Add icons if provided
  if (seo.icons) {
    metadata.icons = seo.icons;
  }

  // Add apple web app config if provided
  if (seo.appleWebApp) {
    metadata.appleWebApp = {
      capable: seo.appleWebApp.capable ?? true,
      title: seo.appleWebApp.title,
      statusBarStyle: seo.appleWebApp.statusBarStyle,
    };
  }

  // Add viewport if provided
  if (seo.viewport) {
    metadata.viewport = seo.viewport;
  }

  // Add robots if provided
  if (seo.robots) {
    metadata.robots = seo.robots;
  }

  // Add verification if provided
  if (seo.verification) {
    metadata.verification = seo.verification;
  }

  return metadata;
};

export const generateBreadcrumbJsonLd = (items: Array<{ name: string; item: string }>) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item,
    })),
  };
};

export const generateLocalBusinessJsonLd = () => ({
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: '법무법인 신화',
  image: 'https://yourdomain.com/images/logo.png',
  '@id': 'https://yourdomain.com',
  url: 'https://yourdomain.com',
  telephone: '062-224-2227',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '광주 동구 동명로 110 법조타운 4층 404호',
    addressLocality: '광주',
    addressRegion: '광주',
    postalCode: '61475',
    addressCountry: 'KR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.1467,
    longitude: 126.9251,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    opens: '09:00',
    closes: '18:00',
  },
  priceRange: '₩₩',
  sameAs: [
    'https://www.instagram.com/your-instagram',
    'https://www.facebook.com/your-facebook',
  ],
});
