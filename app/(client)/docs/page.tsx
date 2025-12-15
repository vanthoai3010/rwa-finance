import ClientLayout from "@/modules/client/common/layouts/ClientLayout";
import DocsClientPage from "@/modules/client/pages/DocsClientPage";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Tài Liệu - RWA Finance | Hướng Dẫn Đầu Tư Trái Phiếu Kho Bạc Trên Blockchain',
  description: 'Tài liệu hướng dẫn chi tiết về cách đầu tư vào trái phiếu kho bạc Hoa Kỳ được token hóa. Whitepaper, hướng dẫn sử dụng, API docs và câu hỏi thường gặp.',
  keywords: ['tài liệu RWA Finance', 'hướng dẫn đầu tư', 'whitepaper', 'API documentation', 'FAQ', 'tutorial', 'user guide'],
  
  openGraph: {
    title: 'Tài Liệu - RWA Finance',
    description: 'Tài liệu hướng dẫn chi tiết về cách đầu tư vào trái phiếu kho bạc Hoa Kỳ được token hóa trên blockchain.',
    url: 'https://rwa-finance.vercel.app/docs',
    siteName: 'RWA Finance',
    images: [
      {
        url: 'https://rwa-finance.vercel.app/image/home/banner-home.png',
        width: 1200,
        height: 630,
        alt: 'Tài liệu RWA Finance - Hướng dẫn và Documentation',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Tài Liệu - RWA Finance',
    description: 'Tài liệu hướng dẫn chi tiết về cách đầu tư vào trái phiếu kho bạc Hoa Kỳ được token hóa trên blockchain.',
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
    canonical: 'https://rwa-finance.vercel.app/docs',
  },
  
  // Thêm metadata khác
  authors: [{ name: 'RWA Finance Team' }],
  creator: 'RWA Finance',
  publisher: 'RWA Finance',
  
  // Thêm metadata cho documentation
  other: {
    'article:section': 'Documentation',
    'article:tag': 'tutorial, guide, documentation',
  },
};

export default function DocsClient() {
  return (
    <ClientLayout>
      <DocsClientPage />
    </ClientLayout>
  );
}