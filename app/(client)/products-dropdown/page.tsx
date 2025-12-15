import ClientLayout from "@/modules/client/common/layouts/ClientLayout";
import ProductsDropdownClientPage from "@/modules/client/pages/ProductsDropdownClientPage";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Quỹ Trái Phiếu RWA - RWA Finance | Đầu Tư Minh Bạch & An Toàn',
  description: 'Đầu tư vào quỹ trái phiếu kho bạc Hoa Kỳ tokenized với RWA Finance. Minh bạch toàn diện, bảo mật cao cấp, thanh khoản 24/7 và tuân thủ pháp lý đầy đủ.',
  keywords: ['quỹ trái phiếu RWA', 'đầu tư RWA', 'real world assets', 'tokenized bonds', 'minh bạch blockchain', 'thanh khoản 24/7', 'hợp đồng thông minh'],
  
  openGraph: {
    title: 'Quỹ Trái Phiếu RWA - Đầu Tư Minh Bạch & An Toàn',
    description: 'Tại sao nên chọn RWA Finance? Minh bạch toàn diện, bảo mật cao cấp, thanh khoản linh hoạt 24/7 và tuân thủ pháp lý. Bắt đầu đầu tư ngay!',
    url: 'https://rwa-finance.vercel.app/product/all',
    siteName: 'RWA Finance',
    images: [
      {
        url: 'https://rwa-finance.vercel.app/image/home/banner-home.png',
        width: 1200,
        height: 630,
        alt: 'Quỹ trái phiếu RWA Finance - Minh bạch, an toàn, thanh khoản cao',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Quỹ Trái Phiếu RWA - Đầu Tư Minh Bạch & An Toàn',
    description: 'Minh bạch toàn diện | Bảo mật cao cấp | Thanh khoản 24/7 | Tuân thủ pháp lý. Bắt đầu đầu tư RWA ngay!',
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
  
  // Thêm metadata cho RWA fund page
  other: {
    'og:type': 'website',
    'product:category': 'Investment Funds',
    'product:availability': 'in stock',
    'article:tag': 'RWA, Real World Assets, Tokenized Bonds, DeFi, Blockchain Investment',
  },
};

export default function ProductsDropdownClient() {
  return (
    <ClientLayout>
      <ProductsDropdownClientPage />
    </ClientLayout>
  );
}