'use client'

import React from 'react';
import Image from 'next/image';
import { motion , Variants } from 'framer-motion';

const funds = [
  {
    name: 'US Treasury Fund',
    token: '$OUSG',
    tokenColor: 'bg-[#00B5891A] text-[#00B589]',
    apy: '5.1%',
    apyColor: 'text-[#00B589]',
    desc: 'Trái phiếu Kho bạc Hoa Kỳ',
    risk: 10,
    riskLabel: 'Thấp',
    riskBar: 'bg-[#00B589]',
    button: 'Đầu tư ngay',
    buttonColor: 'bg-[#00B589] text-white',
    buttonHover: 'hover:bg-[#009e7a]'
  },
  {
    name: 'Money Market Fund',
    token: '$OMMF',
    tokenColor: 'bg-[#DBEAFE] text-[#2563EB]',
    apy: '4.8%',
    apyColor: 'text-[#2563EB]',
    desc: 'Thị trường tiền tệ Hoa Kỳ',
    risk: 10,
    riskLabel: 'Thấp',
    riskBar: 'bg-[#2563EB]',
    button: 'Đầu tư ngay',
    buttonColor: 'bg-[#2563EB] text-white',
    buttonHover: 'hover:bg-[#1d4ed8]'
  },
  {
    name: 'Short Duration Fund',
    token: '$OUSD',
    tokenColor: 'bg-[#F3E8FF] text-[#9333EA]',
    apy: '6.2%',
    apyColor: 'text-[#9333EA]',
    desc: 'Trái phiếu ngắn hạn',
    risk: 50,
    riskLabel: 'Trung bình',
    riskBar: 'bg-[#9333EA]',
    button: 'Đầu tư ngay',
    buttonColor: 'bg-[#9333EA] text-white',
    buttonHover: 'hover:bg-[#8836cc]'
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
    <section className="relative py-10 sm:py-14 md:py-16 overflow-hidden">
      
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/image/home/home-section-1.png"
          alt="Fund List Background"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-8 sm:mb-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={headerVariants}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B2B4D] mb-2">
            Các Quỹ Đầu Tư Tài Sản Thực Của Chúng Tôi
          </h2>
          <motion.p 
            className="text-[#4B5563] text-base sm:text-lg md:text-xl"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Chọn quỹ phù hợp với khẩu vị rủi ro của bạn
          </motion.p>
        </motion.div>

        {/* Fund Cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-7"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {funds.map((fund, idx) => (
            <motion.div
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 p-5 sm:p-6 flex flex-col min-h-[300px] sm:min-h-[320px] transition-shadow duration-200"
            >
              {/* Title & Token */}
              <div className="flex items-start justify-between mb-3 gap-2">
                <h3 className="font-semibold text-[#1B2B4D] text-base sm:text-lg leading-tight">
                  {fund.name}
                </h3>
                <span className={`px-2.5 py-1 rounded-full text-xs font-semibold whitespace-nowrap flex-shrink-0 ${fund.tokenColor}`}>
                  {fund.token}
                </span>
              </div>

              {/* APY */}
              <div className={`mb-2 font-bold text-3xl sm:text-4xl ${fund.apyColor}`}>
                {fund.apy} <span className="text-lg sm:text-xl font-normal">APY</span>
              </div>

              {/* Description */}
              <p className="text-[#4B5563] mt-5 text-sm sm:text-base mb-4">
                {fund.desc}
              </p>

              {/* Risk Section */}
              <div className="mt-auto">
                <div className="flex items-center justify-between text-xs sm:text-sm text-[#6B7280] mb-2">
                  <span>Mức độ rủi ro</span>
                  <span className={`font-medium ${idx === 2 ? 'text-[#9333EA]' : 'text-[#00B589]'}`}>
                    {fund.riskLabel}
                  </span>
                </div>
                <div className="w-full h-1.5 sm:h-2 rounded-full bg-gray-100 mb-4">
                  <motion.div
                    className={`${fund.riskBar} h-full rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${fund.risk}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.3 + idx * 0.1, ease: "easeOut" }}
                  />
                </div>

                {/* Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-3 rounded-lg font-semibold text-sm sm:text-base transition-all duration-200 ${fund.buttonColor} ${fund.buttonHover} shadow-md`}
                >
                  {fund.button}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FundList;