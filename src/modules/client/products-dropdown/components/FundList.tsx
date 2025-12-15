'use client'

import React from 'react';
import Link from 'next/link';
import { motion, Variants } from 'framer-motion';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';

const funds = [
  {
    id: 1,
    slug: 'us-treasury-fund',
    name: 'US Treasury Fund',
    token: '$OUSG',
    apy: '5.1%',
    apyColor: 'text-[#00B589]',
    icon: 'fluent:building-bank-24-filled',
    iconBg: 'bg-[#DBEAFE]',
    iconColor: 'text-[#2563EB]',
    backedBy: 'US Short-Term T-Bills',
    riskLabel: 'Thấp',
    riskIcon: 'mdi:shield-half-full',
    riskColor: 'text-[#22C55E]',
    minInvest: '$1,000',
    status: 'Hàng ngày',
    statusColor: 'text-[#22C55E]',
    button: 'Đầu tư',
    buttonColor: 'bg-[#00B589] text-white',
    buttonHover: 'hover:bg-[#009e7a]'
  },
  {
    id: 2,
    slug: 'real-estate-fund',
    name: 'Real Estate Fund',
    token: '$RWRE',
    apy: '7.8%',
    apyColor: 'text-[#00B589]',
    icon: 'fa7-solid:tree-city',
    iconBg: 'bg-[#DCFCE7]',
    iconColor: 'text-[#16A34A]',
    backedBy: 'Commercial Properties',
    riskLabel: 'Trung bình',
    riskIcon: 'mdi:shield-half-full',
    riskColor: 'text-[#CA8A04]',
    minInvest: '$5,000',
    status: 'Hàng tuần',
    statusColor: 'text-[#2563EB]',
    button: 'Đầu tư',
    buttonColor: 'bg-[#00B589] text-white',
    buttonHover: 'hover:bg-[#009e7a]'
  },
  {
    id: 3,
    slug: 'credit-fund',
    name: 'Credit Fund',
    token: '$RWCR',
    apy: '9.2%',
    apyColor: 'text-[#00B589]',
    icon: 'lucide:line-chart',
    iconBg: 'bg-[#F3E8FF]',
    iconColor: 'text-[#9333EA]',
    backedBy: 'Corporate Loans',
    riskLabel: 'Cao',
    riskIcon: 'mdi:shield-half-full',
    riskColor: 'text-[#EF4444]',
    minInvest: '$10,000',
    status: 'Hàng tháng',
    statusColor: 'text-[#EA580C]',
    button: 'Đầu tư',
    buttonColor: 'bg-[#00B589] text-white',
    buttonHover: 'hover:bg-[#009e7a]'
  }
];

// Container animation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    }
  }
};

// Header animation
const headerVariants: Variants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Card animation
const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    y: 30,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const FundList: React.FC = () => {
  return (
    <section id="funds" className="relative py-8 sm:py-12 md:py-14 lg:py-16 overflow-hidden bg-gray-50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-10 md:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={headerVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111827] mb-2">
            Các Quỹ Hiện Có
          </h2>
          <div className="mt-3 flex justify-center sm:justify-end">
            <Link
              href="/product/all"
              className="inline-flex items-center gap-1.5 text-sm sm:text-base font-medium text-[#00B589] hover:text-[#009e7a] transition-colors group"
            >
              Xem tất cả quỹ
              <span className="transition-transform duration-200 group-hover:translate-x-0.5">
                <IconifyIcon icon="mdi:arrow-right" width={18} height={18} />
              </span>
              <span className="sr-only">(Xem danh sách đầy đủ)</span>
            </Link>
          </div>
        </motion.div>

        {/* Fund Cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {funds.map((fund) => (
            <motion.div
              key={fund.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg border border-gray-100 p-5 sm:p-6 md:p-7 flex flex-col transition-shadow duration-200"
            >
              {/* Icon & APY Header */}
              <div className="flex items-start justify-between mb-5 sm:mb-6">
                <div className={`${fund.iconBg} p-2.5 sm:p-3 rounded-lg`}>
                  <IconifyIcon 
                    icon={fund.icon} 
                    className={`${fund.iconColor} text-xl sm:text-2xl`}
                    width="20"
                    height="20"
                  />
                </div>
                <div className={`text-right`}>
                  <div className={`text-2xl sm:text-3xl font-bold ${fund.apyColor}`}>
                    {fund.apy}
                  </div>
                </div>
              </div>

              {/* Fund Name */}
              <h3 className="font-bold text-[#111827] text-base sm:text-lg md:text-xl mb-1">
                {fund.name}
              </h3>

              {/* Token */}
              <p className="text-[#4B5563] text-sm sm:text-base mb-2.5 sm:mb-3">
                {fund.token}
              </p>

              {/* Backed By */}
              <p className="text-[#4B5563] text-xs sm:text-sm mb-4">
                Backed by: {fund.backedBy}
              </p>

              {/* Risk Section */}
              <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-[#4B5563] text-sm sm:text-base">Rủi ro</span>
                  <div className="flex items-center gap-1">
                    <IconifyIcon 
                      icon={fund.riskIcon}
                      className={`${fund.riskColor} text-sm`}
                      width="14"
                      height="14"
                    />
                    <span className={`font-medium text-xs sm:text-sm ${fund.riskColor}`}>
                      {fund.riskLabel}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#4B5563] text-sm sm:text-base">Đầu tư tối thiểu</span>
                  <span className="text-[#1B2B4D] font-semibold text-xs sm:text-sm">
                    {fund.minInvest}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#4B5563] text-sm sm:text-base">Thanh khoản</span>
                  <span className={`font-medium text-xs sm:text-sm ${fund.statusColor}`}>
                    {fund.status}
                  </span>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex gap-2.5 sm:gap-3 mt-auto">
                <Link
                  href={`/product/${fund.slug}`}
                  className="flex-1 py-2 sm:py-2.5 px-3 rounded-lg font-medium text-xs sm:text-sm text-[#6B7280] bg-gray-100 hover:bg-gray-200 transition-colors duration-200 text-center"
                >
                  Chi tiết
                </Link>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                  <Link
                    href={`/invest/${fund.slug}`}
                    className={`block w-full py-2 sm:py-2.5 px-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-200 ${fund.buttonColor} ${fund.buttonHover} shadow-sm text-center`}
                  >
                    {fund.button}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FundList;