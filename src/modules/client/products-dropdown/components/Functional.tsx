'use client'

import React from 'react'
import { motion, Variants } from 'framer-motion'

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

const Functional = () => {
  const funds = [
    {
      title: 'Loại tài sản',
      items: ['Tất cả', 'Trái phiếu', 'Bất động sản', 'Tín dụng'],
      highlight: 0,
    },
    {
      title: 'Mục độ rủi ro',
      items: ['Thấp', 'Trung bình', 'Cao'],
    },
    {
      title: 'APY mục tiêu',
      items: ['3-5%', '5-8%', '>8%'],
    },
  ]

  return (
    <div className="relative w-full py-8 sm:py-12 md:py-16 lg:py-24 overflow-hidden bg-white">
      <motion.div 
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Header */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111827] mb-3 sm:mb-4 md:mb-6">
            Tìm Quỹ Phù Hợp Với Bạn
          </h2>
          <p className="text-[#4B5563] text-sm sm:text-base md:text-lg max-w-6xl mx-auto leading-relaxed px-2">
            Sử dụng các bộ lọc bên dưới để khám phá quỹ RWA phù hợp với mục tiêu tiêu lợi nhuận và mức độ chấp nhận rủi ro của bạn.
          </p>
        </motion.div>

        {/* Filter Cards */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
        >
          {funds.map((fund, index) => (
            <div 
              key={index}
              className="bg-gray-50 rounded-2xl p-5 sm:p-6 md:p-8"
            >
              {/* Title */}
              <h3 className="text-sm md:text-base font-semibold text-[#1B2B4D] mb-4 sm:mb-5 md:mb-6">
                {fund.title}
              </h3>

              {/* Items */}
              <div className="space-y-2.5 sm:space-y-3">
                {fund.items.map((item, itemIndex) => (
                  <button
                    key={itemIndex}
                    className={`w-full h-9 sm:h-10 md:h-[36px] flex items-center justify-center rounded-lg text-sm sm:text-base font-medium transition-all duration-200 ${
                      fund.highlight === itemIndex
                        ? 'bg-[#00B589] text-white shadow-md shadow-teal-200'
                        : 'bg-white text-[#4B5563] hover:bg-gray-100'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Functional