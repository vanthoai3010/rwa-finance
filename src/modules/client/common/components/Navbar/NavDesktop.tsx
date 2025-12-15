import React from 'react';
import Link from 'next/link';
import { Navlinks } from './Navlinks';
import { NavButton } from './NavButton';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';

export const NavDesktop: React.FC = () => {
  return (
    <nav className="hidden md:flex items-center justify-between px-16 py-4 bg-white shadow-sm">
      {/* Column 1: Logo */}
      <Link href="/" className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#00B589] rounded-full flex items-center justify-center">
          <IconifyIcon icon="fa7-solid:coins" width={20} height={20} className="text-white" />
        </div>
        <span className="font-bold text-lg text-gray-900">RWA Finance</span>
      </Link>

      {/* Column 2: Navigation Links */}
      <Navlinks />

      {/* Column 3: Action Buttons */}
      <div className="flex items-center gap-4">
        <NavButton variant="text" label="Đăng nhập" />
        <NavButton variant="primary" label="Launch App" />
      </div>
    </nav>
  );
};
