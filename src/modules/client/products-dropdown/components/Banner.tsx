'use client'

import React from 'react'
import Image from 'next/image'
import { motion, Variants } from 'framer-motion'

// Định nghĩa các biến thể (variants) cho animation
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut"
    } 
  },
}

const floatingImageVariants: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

const Banner = () => {
  return (
    <div className="relative w-full py-6 sm:py-10 md:py-14 lg:py-20 overflow-hidden bg-gradient-to-br from-blue-50 via-white to-blue-50">
      {/* --- PHẦN NỘI DUNG CHÍNH --- */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center">
          
          {/* --- Left Content --- */}
          <div className="flex flex-col justify-center col-span-1 text-left">
            
            {/* Heading */}
            <motion.h1 
              variants={itemVariants}
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight sm:leading-tight md:leading-relaxed mb-3 sm:mb-4 md:mb-6"
            >
              <span className="text-[#1B2B4D] leading-tight">Khám Phá Các Quỹ Đầu Tư </span>
              
              <span className="text-[#00B589] leading-tight">Tài Sản Thực (RWA)</span>
              <br className="hidden sm:block" />
              <span className="text-[#1B2B4D] leading-tight"> Của Chúng Tôi</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-[#4B5563] text-sm sm:text-base md:text-lg lg:text-xl mb-5 sm:mb-6 md:mb-8 leading-relaxed max-w-xl"
            >
              Đã đăng hóa danh mục đầu tư của bạn với các tài sản có lợi suất ổn định, được bảo chứng từ thế giới thực, ngay trên blockchain.
            </motion.p>
          </div>

          {/* --- Right Image --- */}
          <div className="flex justify-center lg:justify-end col-span-1 mt-6 sm:mt-8 lg:mt-0">
            <motion.div 
              variants={itemVariants} 
              className="relative w-full max-w-[280px] sm:max-w-[350px] md:max-w-[450px] lg:max-w-[500px] h-[200px] sm:h-[250px] md:h-[320px] lg:h-[360px]"
            >
              <motion.div
                variants={floatingImageVariants}
                animate="animate"
                className="w-full h-full relative"
              >
                <Image
                  src="/image/products-dropdown/banner-product-dropdown.png"
                  alt="RWA Products"
                  fill
                  className="drop-shadow-2xl rounded-3xl object-cover" 
                  priority
                />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </motion.div>
    </div>
  )
}

export default Banner