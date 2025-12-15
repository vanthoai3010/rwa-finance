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
      staggerChildren: 0.2, // Thời gian trễ giữa các phần tử con
      delayChildren: 0.3,   // Đợi ảnh nền load xong xíu mới chạy
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 }, // Ẩn: mờ và nằm thấp hơn 20px
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.6, 
      ease: "easeOut" // Hiệu ứng trượt ra nhẹ nhàng
    } 
  },
}

const floatingImageVariants: Variants = {
  animate: {
    y: [0, -15, 0], // Di chuyển lên xuống 15px
    transition: {
      duration: 4,
      repeat: Infinity, // Lặp vô tận
      ease: "easeInOut", // Chuyển động mượt mà đầu/cuối
    },
  },
}

const Banner = () => {
  return (
    <div className="relative w-full py-8 sm:py-12 md:py-16 lg:py-20 overflow-hidden bg-white/50"> 
      {/* --- PHẦN ẢNH NỀN (BACKGROUND) --- */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/image/home/home-section-1.png"
          alt="Banner Background"
          fill
          className="object-cover opacity-60"
          priority
        />
      </div>

      {/* --- PHẦN NỘI DUNG CHÍNH --- */}
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-center">
          
          {/* --- Left Content --- */}
          <div className="flex flex-col justify-center col-span-1 text-center lg:text-left">
            
            {/* Heading */}
            <motion.h1 
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 sm:mb-5 md:mb-6"
            >
              <span className="text-[#1B2B4D]">Mang Lợi Nhuận An Toàn Của </span>
              <span className="text-[#00B589]">Trái Phiếu Kho Bạc Hoa Kỳ</span>
              <span className="text-[#1B2B4D]"> Đến Blockchain</span>
            </motion.h1>

            {/* Description */}
            <motion.p 
              variants={itemVariants}
              className="text-[#4B5563] text-base sm:text-lg md:text-xl mb-6 md:mb-8 leading-relaxed"
            >
              Đầu tư vào các tài sản tài chính ổn định nhất thế giới. Kiếm lợi suất thực, minh bạch trên chuỗi, và thanh khoản 24/7.
            </motion.p>

            {/* APY Card */}
            <motion.div 
              variants={itemVariants}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="bg-white/80 backdrop-blur-md w-full sm:w-[310px] max-w-[310px] h-[100px] sm:h-[110px] rounded-2xl p-5 sm:p-6 mb-6 md:mb-8 mx-auto lg:mx-0 shadow-lg border border-gray-100"
            >
              <div className="text-[#00B589] text-2xl sm:text-3xl font-bold mb-2">
                Lên đến 5.1% APY
              </div>
              <div className="text-[#6B7280] text-sm">
                từ Trái phiếu Kho bạc
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div 
              variants={itemVariants} 
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 items-center lg:items-start"
            >
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#00B589] w-full sm:w-auto h-[56px] sm:h-[60px] hover:bg-teal-600 text-base sm:text-lg text-white font-semibold py-3 px-6 sm:px-8 rounded-lg transition-colors duration-200 shadow-md shadow-teal-200"
              >
                Launch App
              </motion.button>
              
              <motion.button 
                whileHover={{ x: 5 }}
                className="text-[#00B589] w-full sm:w-auto hover:text-teal-600 font-medium text-base sm:text-lg py-3 px-6 sm:px-8 flex items-center justify-center gap-2 transition-colors duration-200"
              >
                Tìm hiểu thêm
                <span>→</span>
              </motion.button>
            </motion.div>
          </div>

          {/* --- Right Image --- */}
          <div className="flex justify-center lg:justify-end col-span-1 mt-8 lg:mt-0">
            <motion.div 
              variants={itemVariants} 
              className="relative w-full max-w-[400px] sm:max-w-[450px] md:max-w-[484px] h-[300px] sm:h-[340px] md:h-[384px]"
            >
              <motion.div
                variants={floatingImageVariants}
                animate="animate"
                className="w-full h-full relative"
              >
                <Image
                  src="/image/home/banner-home.png"
                  alt="Blockchain Investment"
                  fill
                  className="drop-shadow-2xl rounded-3xl" 
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