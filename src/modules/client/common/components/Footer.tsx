import React from "react";
import Link from 'next/link';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 pt-8 sm:pt-10 md:pt-12 pb-4 px-4 sm:px-6 md:px-8 text-gray-700">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10">
        {/* Logo + Description */}
        <div className="flex flex-col gap-3 sm:col-span-2 lg:col-span-1">
          <Link href="/" className="flex items-center gap-2 mb-1 sm:mb-2 w-fit" passHref>
            <div className="w-9 h-9 sm:w-10 sm:h-10 bg-[#00B589] rounded-lg flex items-center justify-center flex-shrink-0">
              <IconifyIcon icon="fa7-solid:coins" width={20} height={20} className="sm:w-6 sm:h-6 text-white" />
            </div>
            <span className="font-bold text-lg sm:text-xl text-[#000000]">RWA Finance</span>
          </Link>
          <span className="text-sm sm:text-base text-[#9CA3AF] leading-relaxed max-w-xs">
            Mang lợi nhuận an toàn của tài sản thực đến blockchain.
          </span>
        </div>

        {/* Sitemap */}
        <div>
          <h4 className="font-semibold mb-3 sm:mb-4 text-[#000000] text-sm sm:text-base">Sitemap</h4>
          <ul className="space-y-2 text-[#707070] text-sm sm:text-base">
            <li>
              <a href="#" className="hover:text-[#00B589] transition-colors duration-200 inline-block">
                Sản phẩm
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00B589] transition-colors duration-200 inline-block">
                Bảo mật
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00B589] transition-colors duration-200 inline-block">
                Về chúng tôi
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00B589] transition-colors duration-200 inline-block">
                Docs
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00B589] transition-colors duration-200 inline-block">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h4 className="font-semibold mb-3 sm:mb-4 text-[#000000] text-sm sm:text-base">Cộng đồng</h4>
          <ul className="space-y-2.5 text-sm sm:text-base">
            <li className="flex items-center gap-2.5">
              <IconifyIcon icon="mdi:twitter" width={18} height={18} className="text-[#707070] flex-shrink-0" />
              <a href="#" className="hover:text-[#00B589] text-[#707070] transition-colors duration-200">
                Twitter
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <IconifyIcon icon="ic:baseline-discord" width={18} height={18} className="text-[#707070] flex-shrink-0" />
              <a href="#" className="hover:text-[#00B589] text-[#707070] transition-colors duration-200">
                Discord
              </a>
            </li>
            <li className="flex items-center gap-2.5">
              <IconifyIcon icon="ic:baseline-telegram" width={18} height={18} className="text-[#707070] flex-shrink-0" />
              <a href="#" className="hover:text-[#00B589] text-[#707070] transition-colors duration-200">
                Telegram
              </a>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="font-semibold mb-3 sm:mb-4 text-[#000000] text-sm sm:text-base">Pháp lý</h4>
          <ul className="space-y-2.5 text-sm sm:text-base">
            <li>
              <a href="#" className="hover:text-[#00B589] text-[#707070] transition-colors duration-200 inline-block">
                Điều khoản Dịch vụ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00B589] text-[#707070] transition-colors duration-200 inline-block">
                Chính sách Bảo mật
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-[#00B589] text-[#707070] transition-colors duration-200 inline-block">
                Tuyên bố Miễn trừ
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider - Responsive margins */}
      <div className="my-6 sm:my-7 md:my-8 mx-0 sm:mx-8 md:mx-16 lg:mx-36 border-t border-gray-300" />

      {/* Copyright */}
      <div className="text-center text-xs sm:text-sm md:text-base mb-3 sm:mb-4 md:mb-5 text-[#9CA3AF]">
        © 2024 RWA Finance. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;