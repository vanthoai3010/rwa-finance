"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';
import { Navlinks } from './Navlinks';
import { NavButton } from './NavButton';

const NavMobile: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  return (
    <div className="md:hidden w-full">
      {/* Top bar with logo and menu button */}
      <div className="flex items-center justify-between px-4 py-3 bg-white shadow-sm border-b border-gray-200">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#00B589] rounded-lg flex items-center justify-center">
            <IconifyIcon icon="fa7-solid:coins" width={20} height={20} className="text-white" />
          </div>
          <span className="font-bold text-lg text-gray-900">RWA Finance</span>
        </Link>
        <button
          className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#00B589]"
          onClick={() => setOpen((v) => !v)}
          aria-label="Open menu"
        >
          <IconifyIcon icon={open ? 'mdi:close' : 'mdi:menu'} width={28} height={28} className="text-[#00B589]" />
        </button>
      </div>

      {/* Mobile menu overlay */}
      {open && (
        <div className="fixed inset-0 z-40 bg-black/40" onClick={() => setOpen(false)} />
      )}
      <div
        className={`fixed top-0 right-0 h-full w-[88vw] max-w-[360px] z-50 bg-white shadow-lg transform transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="px-5 pt-5 pb-4 border-b border-gray-100">
            <div className="flex items-center justify-between">
              <div className="font-semibold text-gray-900">Menu</div>
              <button
                type="button"
                className="p-2 rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-[#00B589]"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
              >
                <IconifyIcon icon="mdi:close" width={22} height={22} className="text-gray-700" />
              </button>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto px-4 py-4">
            <Navlinks variant="mobile" onNavigate={() => setOpen(false)} />
          </div>

          <div className="px-4 pt-4 pb-6 border-t border-gray-100 flex flex-col gap-3">
            <NavButton variant="text" label="Đăng nhập" />
            <NavButton variant="primary" label="Launch App" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavMobile;
