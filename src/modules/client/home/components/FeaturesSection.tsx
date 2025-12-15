'use client'

import React from 'react';
import { motion, Variants } from 'framer-motion'
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';

const features = [
  {
    icon: 'mdi:shield-half-full',
    title: 'An toàn & Ổn định',
    desc: 'Lợi suất được bảo chứng bởi Trái phiếu Kho bạc Hoa Kỳ, tài sản được coi là an toàn nhất thế giới.'
  },
  {
    icon: 'mingcute:earth-2-fill',
    title: 'Tiếp cận Toàn cầu',
    desc: 'Không cần là công dân Mỹ. Bất kỳ ai cũng có thể tiếp cận thị trường Trái phiếu Hoa Kỳ chỉ với một chiếc ví crypto.'
  },
  {
    icon: 'mdi:link-variant',
    title: 'Tương thích DeFi',
    desc: 'Sử dụng token RWA của bạn (ví dụ $OUSG) làm tài sản thế chấp để vay hoặc giao dịch trên các nền tảng DeFi khác.'
  }
];

// Container animation với stagger effect
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

// Header animation - fade in từ trên xuống
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

// Feature card animation - fade in và scale nhẹ
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

// Icon animation - rotate và scale khi hiện
const iconVariants: Variants = {
  hidden: { 
    scale: 0,
    rotate: -180
  },
  visible: {
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 15,
      delay: 0.2
    }
  }
};

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-12 md:py-14 lg:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
        
        {/* Header Section */}
        <motion.div 
          className="text-center mb-10 sm:mb-12 md:mb-14 lg:mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={headerVariants}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#1B2B4D] mb-3 sm:mb-4 px-2 leading-tight">
            Thị Trường Biến Động? Hãy Để Tài Sản Của Bạn Sinh Lời An Toàn
          </h2>
          <motion.p 
            className="text-[#4B5563] text-base sm:text-lg md:text-xl px-4 leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Khám phá lợi ích vượt trội của việc đầu tư vào tài sản thực thông qua blockchain
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {features.map((feature, idx) => (
            <motion.div 
              key={idx}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="flex flex-col items-center text-center px-4 sm:px-5 md:px-6 py-6 sm:py-7 md:py-8 rounded-xl bg-white hover:bg-gray-50 transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              {/* Icon Container */}
              <motion.div 
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-xl mb-3 sm:mb-4 bg-[#00B5891A] flex-shrink-0"
                variants={iconVariants}
                whileHover={{ 
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.2 }
                }}
              >
                <IconifyIcon 
                  icon={feature.icon} 
                  width={22} 
                  height={22}
                  className="text-[#00B589] sm:w-[25px] sm:h-[25px]" 
                />
              </motion.div>

              {/* Title */}
              <motion.h3 
                className="font-semibold text-xl sm:text-2xl text-[#1B2B4D] mb-2 sm:mb-3"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + idx * 0.1, duration: 0.4 }}
              >
                {feature.title}
              </motion.h3>

              {/* Description */}
              <motion.p 
                className="text-[#4B5563] text-sm sm:text-base leading-relaxed max-w-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + idx * 0.1, duration: 0.5 }}
              >
                {feature.desc}
              </motion.p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;