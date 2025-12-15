"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';

const steps = [
  {
    icon: 'zondicons:wallet',
    title: 'Kết nối Ví & KYC',
    desc: 'Hoàn tất xác minh danh tính và kết nối ví Web3 của bạn.'
  },
  {
    icon: 'material-symbols:add-rounded',
    title: 'Nạp tiền & Mint',
    desc: 'Chọn quỹ và nạp stablecoin (USDC) để "mint" (đúc) token RWA của bạn.'
  },
  {
    icon: 'lucide:line-chart',
    title: 'Nhận Lợi Nhuận',
    desc: 'Nắm giữ token và xem lợi suất tích lũy hằng ngày. Rút tiền bất cứ lúc nào.'
  },
];

const HowItWorksSection = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

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

  const stepVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const iconVariants: Variants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        duration: 0.6
      }
    }
  };

  const badgeVariants: Variants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.2
      }
    }
  };

  return (
    <div className="w-full bg-gray-50 py-8 sm:py-12 md:py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={headerVariants}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B2B4D] mb-2 sm:mb-3 md:mb-4 px-2">
            Kiếm Lợi Nhuận Chỉ Trong 3 Bước Đơn Giản
          </h2>
          <p className="text-[#4B5563] text-base sm:text-lg md:text-xl px-4">
            Bắt đầu đầu tư dễ dàng hơn bạn nghĩ
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              className="relative sm:last:col-span-2 lg:last:col-span-1"
              variants={stepVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ scale: 0.98 }}
            >
              {/* Step number badge */}
              <motion.div
                className="absolute -top-3 sm:-top-4 right-6 sm:right-8 bg-[#1B2B4D] text-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center font-bold text-base sm:text-lg z-10 shadow-lg"
                variants={badgeVariants}
              >
                {idx + 1}
              </motion.div>

              {/* Card */}
              <div className="text-center bg-white rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow">
                {/* Icon circle */}
                <motion.div
                  className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-[#00B589] rounded-full mb-4 sm:mb-6 shadow-md"
                  variants={iconVariants}
                >
                  <IconifyIcon icon={step.icon} className="text-2xl sm:text-3xl text-white" />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-semibold text-[#1B2B4D] mb-2 sm:mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorksSection;