import ClientLayout from "@/modules/client/common/layouts/ClientLayout";
import AboutClientPage from "@/modules/client/pages/AboutClientPage";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Về Chúng Tôi - RWA Finance | Tiên Phong Tokenization Trái Phiếu Kho Bạc',
  description: 'Chúng tôi là đội ngũ gồm các chuyên gia kỳ cựu từ cả hai thế giới tài chính và công nghệ. Tìm hiểu về sứ mệnh, tầm nhìn và đội ngũ của chúng tôi.',
  keywords: ['về RWA Finance', 'giới thiệu RWA Finance', 'đội ngũ RWA', 'sứ mệnh', 'tầm nhìn', 'Real World Assets', 'tokenization'],
  
  openGraph: {
    title: 'Về Chúng Tôi - RWA Finance',
    description: 'Chúng tôi là đội ngũ gồm các chuyên gia kỳ cựu từ cả hai thế giới tài chính và công nghệ. Tìm hiểu về sứ mệnh, tầm nhìn và đội ngũ của chúng tôi.',
    url: 'https://rwa-finance.vercel.app/about',
    siteName: 'RWA Finance',
    images: [
      {
        url: 'https://rwa-finance.vercel.app/image/logo-metadata.png',
        width: 1200,
        height: 630,
        alt: 'Về RWA Finance - Đội ngũ và sứ mệnh',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Về Chúng Tôi - RWA Finance',
    description: 'Chúng tôi là đội ngũ gồm các chuyên gia kỳ cựu từ cả hai thế giới tài chính và công nghệ. Tìm hiểu về sứ mệnh, tầm nhìn và đội ngũ của chúng tôi.',
    images: ['https://rwa-finance.vercel.app/image/logo-metadata.png'],
  },
  
  // Robots
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
  
  // Canonical URL
  alternates: {
    canonical: 'https://rwa-finance.vercel.app/about',
  },
  
  // Thêm metadata khác
  authors: [{ name: 'RWA Finance Team' }],
  creator: 'RWA Finance',
  publisher: 'RWA Finance',
};

export default function AboutClient() {
  return (
    <ClientLayout>
      <AboutClientPage />
    </ClientLayout>
  );
}