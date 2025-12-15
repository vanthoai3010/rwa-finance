'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const Navlinks: React.FC<{ variant?: 'desktop' | 'mobile'; onNavigate?: () => void }> = ({
  variant = 'desktop',
  onNavigate,
}) => {
  const pathname = usePathname();

  const links = [
    {
      label: 'Sản phẩm (Dropdown)',
      href: '/products-dropdown',
    },
    {
      label: 'Bảo mật',
      href: '/security',
    },
    {
      label: 'Về chúng tôi',
      href: '/about',
    },
    {
      label: 'Docs',
      href: '/docs',
    },
    {
      label: 'Đầu tư',
      href: '/invest',
    },
    {
      label: 'Lịch sử',
      href: '/transaction-history',
    },
  ];

  const isMobile = variant === 'mobile';

  return (
    <div className={isMobile ? 'flex flex-col items-stretch gap-1' : 'flex items-center gap-8'}>
      {links.map((link) => {
        const isActive = pathname === link.href || pathname.startsWith(link.href + '/');

        return (
          <Link
            key={link.label}
            href={link.href}
            onClick={onNavigate}
            className={
              isMobile
                ? `w-full flex items-center justify-between gap-2 px-3 py-3 rounded-lg text-base transition-colors ${
                    isActive
                      ? 'text-[#00B589] font-semibold bg-emerald-50'
                      : 'text-[#374151] hover:bg-gray-100'
                  }`
                : `flex items-center gap-1 text-base transition-all relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-px after:bg-[#00B589] after:transition-all after:duration-300 ${
                    isActive
                      ? 'text-[#00B589] font-bold'
                      : 'text-[#4B5563] hover:text-[#00B589] after:w-0 hover:after:w-full'
                  }`
            }
          >
            {link.label}
          </Link>
        );
      })}
    </div>
  );
};
