import ClientLayout from "@/modules/client/common/layouts/ClientLayout";
import InvestClientPage from "@/modules/client/pages/InvestClientPage";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Đầu Tư - RWA Finance | Đầu Tư Trái Phiếu Kho Bạc Hoa Kỳ Trên Blockchain',
  description: 'Bắt đầu đầu tư vào trái phiếu kho bạc Hoa Kỳ được token hóa với lợi nhuận ổn định 4-5% năm. Minh bạch, an toàn và dễ dàng giao dịch 24/7 trên blockchain.',
  keywords: ['đầu tư RWA', 'mua trái phiếu kho bạc', 'đầu tư blockchain', 'lợi nhuận ổn định', 'tokenized bonds', 'passive income'],
  
  openGraph: {
    title: 'Đầu Tư - RWA Finance | Lợi Nhuận Ổn Định 4-5%/Năm',
    description: 'Bắt đầu đầu tư vào trái phiếu kho bạc Hoa Kỳ được token hóa. Lợi nhuận ổn định, minh bạch và an toàn.',
    url: 'https://rwa-finance.vercel.app/invest',
    siteName: 'RWA Finance',
    images: [
      {
        url: 'https://rwa-finance.vercel.app/image/home/banner-home.png',
        width: 1200,
        height: 630,
        alt: 'Đầu tư RWA Finance - Trái phiếu kho bạc Hoa Kỳ trên blockchain',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Đầu Tư - RWA Finance | Lợi Nhuận Ổn Định 4-5%/Năm',
    description: 'Bắt đầu đầu tư vào trái phiếu kho bạc Hoa Kỳ được token hóa. Lợi nhuận ổn định, minh bạch và an toàn.',
    images: ['https://rwa-finance.vercel.app/image/home/banner-home.png'],
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
    canonical: 'https://rwa-finance.vercel.app/invest',
  },
  
  // Thêm metadata khác
  authors: [{ name: 'RWA Finance Team' }],
  creator: 'RWA Finance',
  publisher: 'RWA Finance',
  
  // Thêm metadata cho trang invest
  other: {
    'og:type': 'website',
    'product:price:amount': '4-5',
    'product:price:currency': 'USD',
  },
};

export default function InvestDetailPage() {
  return (
    <ClientLayout>
      <InvestClientPage />
    </ClientLayout>
  );
}