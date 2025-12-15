import ClientLayout from "@/modules/client/common/layouts/ClientLayout";
import TransactionHistoryClientPage from "@/modules/client/pages/TransactionHistoryClientPage";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lịch Sử Giao Dịch - RWA Finance | Theo Dõi Minh Bạch Mọi Hoạt Động',
  description: 'Xem lịch sử giao dịch chi tiết của bạn trên RWA Finance. Theo dõi mua, bán, chuyển khoản và lợi nhuận với giao diện trực quan, minh bạch hoàn toàn trên blockchain.',
  keywords: ['lịch sử giao dịch RWA', 'theo dõi đầu tư', 'transaction history', 'blockchain transparency', 'portfolio tracking', 'investment history'],
  
  openGraph: {
    title: 'Lịch Sử Giao Dịch - Minh Bạch & Truy Xuất Dễ Dàng',
    description: 'Theo dõi toàn bộ lịch sử giao dịch RWA của bạn. Xem chi tiết mua, bán, chuyển khoản và lợi nhuận. Minh bạch 100% trên blockchain.',
    url: 'https://rwa-finance.vercel.app/transaction-history',
    siteName: 'RWA Finance',
    images: [
      {
        url: 'https://rwa-finance.vercel.app/image/transaction/transaction-history.png',
        width: 1200,
        height: 630,
        alt: 'Lịch sử giao dịch RWA Finance - Minh bạch và dễ theo dõi',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Lịch Sử Giao Dịch - RWA Finance',
    description: 'Theo dõi chi tiết mọi giao dịch | Minh bạch blockchain | Truy xuất dễ dàng | Báo cáo đầy đủ',
    images: ['https://rwa-finance.vercel.app/image/transaction/transaction-history.png'],
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
    canonical: 'https://rwa-finance.vercel.app/transaction-history',
  },
  
  // Metadata bổ sung
  authors: [{ name: 'RWA Finance Team' }],
  creator: 'RWA Finance',
  publisher: 'RWA Finance',
  
  // Metadata cho trang lịch sử giao dịch
  other: {
    'og:type': 'website',
    'article:section': 'Transaction Management',
    'article:tag': 'Transaction History, Portfolio Tracking, Blockchain Transparency, Investment Records, Trade History',
  },
};

export default function TransactionHistoryPage() {
  return (
    <ClientLayout>
      <TransactionHistoryClientPage />
    </ClientLayout>
  );
}