import ClientLayout from "@/modules/client/common/layouts/ClientLayout";
import AllProductsClientPage from "@/modules/client/pages/AllProductsClientPage";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tất Cả Sản Phẩm - RWA Finance | Danh Sách Trái Phiếu Kho Bạc Tokenized',
  description: 'Khám phá tất cả sản phẩm trái phiếu kho bạc Hoa Kỳ được token hóa trên RWA Finance. So sánh lợi nhuận, kỳ hạn và chọn sản phẩm phù hợp với mục tiêu đầu tư của bạn.',
  keywords: ['tất cả sản phẩm RWA', 'danh sách trái phiếu', 'so sánh lợi suất', 'tokenized bonds', 'sản phẩm đầu tư', 'portfolio'],
  
  openGraph: {
    title: 'Tất Cả Sản Phẩm - RWA Finance',
    description: 'Khám phá và so sánh tất cả sản phẩm trái phiếu kho bạc tokenized. Tìm sản phẩm phù hợp với mục tiêu đầu tư của bạn.',
    url: 'https://rwa-finance.vercel.app/product/all',
    siteName: 'RWA Finance',
    images: [
      {
        url: 'https://rwa-finance.vercel.app/image/home/banner-home.png',
        width: 1200,
        height: 630,
        alt: 'Tất cả sản phẩm RWA Finance - Danh sách trái phiếu kho bạc tokenized',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Tất Cả Sản Phẩm - RWA Finance',
    description: 'Khám phá và so sánh tất cả sản phẩm trái phiếu kho bạc tokenized. Tìm sản phẩm phù hợp với mục tiêu đầu tư của bạn.',
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
    canonical: 'https://rwa-finance.vercel.app/product/all',
  },
  
  // Thêm metadata khác
  authors: [{ name: 'RWA Finance Team' }],
  creator: 'RWA Finance',
  publisher: 'RWA Finance',
  
  // Thêm metadata cho products listing page
  other: {
    'og:type': 'website',
    'product:category': 'Financial Products',
    'product:availability': 'in stock',
  },
};

export default function AllProductsPage() {
  return (
    <ClientLayout>
      <AllProductsClientPage />
    </ClientLayout>
  );
}