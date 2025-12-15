import ClientLayout from "@/modules/client/common/layouts/ClientLayout";
import HomeClientPage from "@/modules/client/pages/HomeClientPage";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'RWA Finance - Mang Lợi Nhuận An Toàn Của Trái Phiếu Kho Bạc Hoa Kỳ Đến Blockchain',
  description: 'Đầu tư vào trái phiếu kho bạc Hoa Kỳ được token hóa trên blockchain. Lợi nhuận ổn định, minh bạch và an toàn với công nghệ RWA.',
  keywords: ['RWA Finance', 'trái phiếu kho bạc', 'blockchain', 'tokenization', 'đầu tư an toàn'],
  
  openGraph: {
    title: 'RWA Finance - Đầu Tư Trái Phiếu Kho Bạc Hoa Kỳ Trên Blockchain',
    description: 'Mang Lợi Nhuận An Toàn Của Trái Phiếu Kho Bạc Hoa Kỳ Đến Blockchain',
    url: 'https://rwa-finance.vercel.app',
    siteName: 'RWA Finance',
    images: [
      {
        url: 'https://rwa-finance.vercel.app/image/logo-metadata.png',
        width: 1200,
        height: 630,
        alt: 'RWA Finance - Trái phiếu kho bạc trên blockchain',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'RWA Finance',
    description: 'Mang Lợi Nhuận An Toàn Của Trái Phiếu Kho Bạc Hoa Kỳ Đến Blockchain',
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
    canonical: 'https://rwa-finance.vercel.app',
  },
  
  // Thêm metadata khác
  authors: [{ name: 'RWA Finance' }],
  creator: 'RWA Finance',
  publisher: 'RWA Finance',
  
  // Verification (nếu có)
  // verification: {
  //   google: 'your-google-verification-code',
  // },
};

export default function HomeClient() {
  return (
    <ClientLayout>
      <HomeClientPage />
    </ClientLayout>
  );
}