import ClientLayout from "@/modules/client/common/layouts/ClientLayout";
import ProductDetailClientPage from "@/modules/client/pages/ProductDetailClientPage";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Chi Tiết Sản Phẩm - RWA Finance | Thông Tin Trái Phiếu Kho Bạc Tokenized',
  description: 'Xem chi tiết sản phẩm trái phiếu kho bạc Hoa Kỳ được token hóa. Lợi nhuận, kỳ hạn, mức đầu tư tối thiểu, và cách thức hoạt động trên blockchain.',
  keywords: ['chi tiết sản phẩm RWA', 'thông tin trái phiếu', 'tokenized treasury bonds', 'lợi suất', 'kỳ hạn đầu tư', 'product details'],
  
  openGraph: {
    title: 'Chi Tiết Sản Phẩm - RWA Finance',
    description: 'Xem đầy đủ thông tin về sản phẩm trái phiếu kho bạc tokenized: lợi nhuận, kỳ hạn, mức đầu tư và cách thức hoạt động.',
    url: 'https://rwa-finance.vercel.app/product/all',
    siteName: 'RWA Finance',
    images: [
      {
        url: 'https://rwa-finance.vercel.app/image/home/banner-home.png',
        width: 1200,
        height: 630,
        alt: 'Chi tiết sản phẩm RWA Finance - Trái phiếu kho bạc tokenized',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Chi Tiết Sản Phẩm - RWA Finance',
    description: 'Xem đầy đủ thông tin về sản phẩm trái phiếu kho bạc tokenized: lợi nhuận, kỳ hạn, mức đầu tư và cách thức hoạt động.',
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
  
  // Thêm metadata cho product page
  other: {
    'og:type': 'product',
    'product:brand': 'RWA Finance',
    'product:availability': 'in stock',
    'product:condition': 'new',
    'product:price:amount': '4-5',
    'product:price:currency': 'USD',
    'product:category': 'Financial Products',
  },
};

export default function ProductDetailPage() {
  return (
    <ClientLayout>
      <ProductDetailClientPage />
    </ClientLayout>
  );
}