import ClientLayout from "@/modules/client/common/layouts/ClientLayout";
import SecurityClientPage from "@/modules/client/pages/SecurityClientPage";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bảo Mật - RWA Finance | Bảo Vệ Tài Sản Với Công Nghệ Cấp Tổ Chức',
  description: 'Bảo mật đa lớp với kiểm toán hợp đồng thông minh liên tục, bảo chứng tài sản 1:1, mã hóa dữ liệu và xác thực đa yếu tố. An toàn tuyệt đối cho tài sản của bạn.',
  keywords: ['bảo mật RWA', 'kiểm toán smart contract', 'bảo chứng tài sản 1:1', 'mã hóa dữ liệu', 'xác thực đa yếu tố', 'bảo mật blockchain', 'Web3 security'],
  
  openGraph: {
    title: 'Bảo Mật Là Nền Tảng - RWA Finance',
    description: 'Bảo vệ tài sản của bạn với kiểm toán liên tục, bảo chứng 1:1 và công nghệ bảo mật cấp tổ chức. Minh bạch tuyệt đối, an toàn tối đa.',
    url: 'https://rwa-finance.vercel.app/security',
    siteName: 'RWA Finance',
    images: [
      {
        url: 'https://rwa-finance.vercel.app/image/security/security-banner.png',
        width: 1200,
        height: 630,
        alt: 'Bảo mật đa lớp RWA Finance - Kiểm toán, Bảo chứng 1:1, Mã hóa',
      },
    ],
    locale: 'vi_VN',
    type: 'website',
  },
  
  // Twitter Card
  twitter: {
    card: 'summary_large_image',
    title: 'Bảo Mật Là Nền Tảng - RWA Finance',
    description: 'Kiểm toán liên tục | Bảo chứng 1:1 | Mã hóa dữ liệu | Xác thực đa yếu tố. Bảo vệ tài sản tuyệt đối.',
    images: ['https://rwa-finance.vercel.app/image/security/security-banner.png'],
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
    canonical: 'https://rwa-finance.vercel.app/security',
  },
  
  // Metadata bổ sung
  authors: [{ name: 'RWA Finance Security Team' }],
  creator: 'RWA Finance',
  publisher: 'RWA Finance',
  
  // Metadata cho trang bảo mật
  other: {
    'og:type': 'website',
    'article:section': 'Security & Trust',
    'article:tag': 'Security, Smart Contract Audit, Asset Backing, Encryption, Multi-Factor Authentication, DDoS Protection',
  },
};

export default function SecurityClient() {
  return (
    <ClientLayout>
      <SecurityClientPage />
    </ClientLayout>
  );
}