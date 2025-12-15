'use client'

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

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

// Description animation
const descriptionVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: "easeOut"
    }
  }
};

// Button animation
const buttonContainerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.4,
      ease: "easeOut"
    }
  }
};

const CTA: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 overflow-hidden">
      {/* Background image with overlay for better text readability on mobile */}
      <div className="absolute inset-0">
        <Image
          src="/image/home/image 3.png"
          alt="CTA Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Subtle overlay for mobile readability */}
        <div className="absolute inset-0 bg-white/5 lg:bg-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 text-center">
        
        {/* Heading */}
        <motion.h2 
          className="text-xl leading-tight sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#111827] mb-3 sm:mb-4 md:mb-5 lg:mb-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={headerVariants}
        >
          Sẵn Sàng Để Đầu Tư Vào Tương Lai Tài Chính?
        </motion.h2>

        {/* Description */}
        <motion.p 
          className="text-sm leading-relaxed sm:text-base md:text-lg lg:text-xl text-[#4B5563] mb-6 sm:mb-8 md:mb-10 lg:mb-12 max-w-6xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={descriptionVariants}
        >
          Bắt đầu hành trình đầu tư RWA của bạn ngay hôm nay với các quỹ được kiểm chứng và minh bạch.
        </motion.p>

        {/* Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 lg:gap-5 max-w-sm sm:max-w-none mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={buttonContainerVariants}
        >
          {/* Primary Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 bg-[#00B589] text-white font-semibold text-sm sm:text-base lg:text-lg rounded-lg shadow-md hover:bg-[#009e7a] transition-colors duration-200"
          >
            Khám Phá Nền Tảng Ngay
          </motion.button>

          {/* Secondary Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto px-6 sm:px-8 lg:px-10 py-3 sm:py-3.5 border-2 border-[#00B589] text-[#111827] font-semibold text-sm sm:text-base lg:text-lg rounded-lg hover:bg-[#00B589] hover:text-white transition-all duration-200"
          >
            Liên Hệ Hỗ Trợ
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;