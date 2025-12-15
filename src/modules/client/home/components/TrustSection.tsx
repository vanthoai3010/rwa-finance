'use client'

import React from 'react';
import { motion, Variants } from 'framer-motion';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';

const tradfiPartners = [
  'Franklin Templeton',
  'BNY Mellon',
];
const auditPartners = [
  'CertiK',
  'Trail of Bits',
];

const flowSteps = [
  {
    icon: 'mdi:currency-usd',
    bgColor: 'bg-[#DBEAFE]',
    iconColor: 'text-[#2563EB]',
    label: 'USDC Deposit',
  },
  {
    icon: 'fluent:building-bank-24-filled',
    bgColor: 'bg-[#E6FBF4]',
    iconColor: 'text-[#00B589]',
    label: 'T-Bill Purchase',
  },
  {
    icon: 'fa7-solid:coins',
    bgColor: 'bg-[#F3E8FF]',
    iconColor: 'text-[#9333EA]',
    label: 'RWA Token Mint',
  },
];

// Container animation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
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

// Partner card animation
const cardVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.9,
    y: 20
  },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// Flow step animation
const stepVariants: Variants = {
  hidden: { 
    opacity: 0, 
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
    }
  }
};

// Arrow animation
const arrowVariants: Variants = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};

const TrustSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-12 md:py-14 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={headerVariants}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center text-[#1B2B4D] mb-2 px-4">
            Minh Bạch Tuyệt Đối. Bảo Mật Tối Đa
          </h2>
          <motion.p 
            className="text-center text-[#4B5563] text-base sm:text-lg md:text-xl mb-8 sm:mb-10 px-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Được tin tưởng bởi các tổ chức hàng đầu thế giới
          </motion.p>
        </motion.div>

        {/* Partners Section */}
        <motion.div 
          className="flex flex-col lg:flex-row justify-center gap-8 lg:gap-16 mb-10 sm:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {/* TradFi Partners */}
          <motion.div 
            className="flex-1 max-w-xl mx-auto lg:mx-0"
            variants={cardVariants}
          >
            <h3 className="font-semibold text-[#1B2B4D] text-xl sm:text-2xl mb-4 text-center lg:text-left">
              Đối tác TradFi
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center lg:justify-start">
              {tradfiPartners.map((p, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white border border-gray-200 rounded-xl px-5 py-4 text-[#4B5563] font-medium text-sm sm:text-base shadow-sm hover:shadow-md transition-shadow duration-200 text-center flex-1 min-w-[140px]"
                >
                  {p}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Audit & Security Partners */}
          <motion.div 
            className="flex-1 max-w-xl mx-auto lg:mx-0"
            variants={cardVariants}
          >
            <h3 className="font-semibold text-[#1B2B4D] text-xl sm:text-2xl mb-4 text-center lg:text-left">
              Kiểm toán & Bảo mật
            </h3>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 justify-center lg:justify-start">
              {auditPartners.map((p, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
                    transition: { duration: 0.2 }
                  }}
                  className="bg-white border border-gray-200 rounded-xl px-5 py-4 text-[#4B5563] font-medium text-sm sm:text-base shadow-sm hover:shadow-md transition-shadow duration-200 text-center flex-1 min-w-[140px]"
                >
                  {p}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Transparent Flow */}
        <motion.div 
          className="mt-6 p-5 sm:p-6 md:p-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.h3 
            className="font-semibold text-lg sm:text-xl md:text-2xl text-[#1B2B4D] mb-6 sm:mb-8 text-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Dòng Tiền Minh Bạch 1:1
          </motion.h3>

          {/* Flow Steps - Desktop/Tablet Horizontal */}
          <motion.div 
            className="hidden sm:flex flex-row items-center justify-center gap-4 md:gap-8 lg:gap-12"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {flowSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <motion.div 
                  className="flex flex-col items-center"
                  variants={stepVariants}
                >
                  <motion.div 
                    className={`w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full ${step.bgColor} shadow-md`}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <IconifyIcon 
                      icon={step.icon} 
                      width={24} 
                      height={24}
                      className={`${step.iconColor} md:w-[30px] md:h-[30px]`} 
                    />
                  </motion.div>
                  <span className="mt-3 text-xs sm:text-sm md:text-base text-[#4B5563] font-medium text-center max-w-[100px]">
                    {step.label}
                  </span>
                </motion.div>
                
                {idx < flowSteps.length - 1 && (
                  <motion.span 
                    className="text-[#9CA3AF]"
                    variants={arrowVariants}
                  >
                    <IconifyIcon icon="mdi:arrow-right" width={24} height={24} className="md:w-[28px] md:h-[28px]" />
                  </motion.span>
                )}
              </React.Fragment>
            ))}
          </motion.div>

          {/* Flow Steps - Mobile Vertical */}
          <motion.div 
            className="flex sm:hidden flex-col items-center gap-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={containerVariants}
          >
            {flowSteps.map((step, idx) => (
              <React.Fragment key={idx}>
                <motion.div 
                  className="flex flex-col items-center"
                  variants={stepVariants}
                >
                  <motion.div 
                    className={`w-16 h-16 flex items-center justify-center rounded-full ${step.bgColor} shadow-md`}
                    whileHover={{ 
                      scale: 1.15,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    <IconifyIcon 
                      icon={step.icon} 
                      width={26} 
                      height={26}
                      className={step.iconColor} 
                    />
                  </motion.div>
                  <span className="mt-2 text-sm text-[#4B5563] font-medium text-center">
                    {step.label}
                  </span>
                </motion.div>
                
                {idx < flowSteps.length - 1 && (
                  <motion.span 
                    className="text-[#9CA3AF]"
                    variants={arrowVariants}
                  >
                    <IconifyIcon icon="mdi:arrow-down" width={24} height={24} />
                  </motion.span>
                )}
              </React.Fragment>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustSection;