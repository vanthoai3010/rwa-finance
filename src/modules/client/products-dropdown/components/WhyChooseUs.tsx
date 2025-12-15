'use client'

import React from 'react';
import { motion, Variants } from 'framer-motion';
import IconifyIcon from '@/modules/client/common/components/IconifyIcon';

const features = [
  {
    id: 1,
    title: 'Minh Bạch Toàn Diện',
    description: 'Mọi tài sản đều được kiểm toán độc lập và hiển thị trên chuỗi.',
    icon: 'mdi:eye',
    iconBg: 'bg-[#DBEAFE]',
    iconColor: 'text-[#2563EB]'
  },
  {
    id: 2,
    title: 'Bảo Mật Cao Cấp',
    description: 'Hợp đồng thông minh được kiểm toán, tài sản được lưu kỳ bởi các tổ chức đầu.',
    icon: 'mdi:shield-half-full',
    iconBg: 'bg-[#DCFCE7]',
    iconColor: 'text-[#16A34A]'
  },
  {
    id: 3,
    title: 'Thanh Khoản Linh Hoạt',
    description: 'Mua/bán token 24/7 trên các sàn giao dịch phi tập trung.',
    icon: 'fa7-solid:exchange',
    iconBg: 'bg-[#F3E8FF]',
        iconColor: 'text-[#9333EA]'
  },
  {
    id: 4,
    title: 'Tuân Thủ Pháp Lý',
    description: 'Hoạt động hoàn toàn tuân thủ các quy định tài chính.',
    icon: 'mdi:scale-balance',
    iconBg: 'bg-[#FEF9C3]',
    iconColor: 'text-[#CA8A04]'
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

const WhyChooseUs: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-24 overflow-hidden bg-white">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10">
        
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-14 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={headerVariants}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111827]">
            Tại Sao Nên Chọn Đầu Tư RWA Với Chúng Tôi?
          </h2>
        </motion.div>

        {/* Feature Cards */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {features.map((feature) => (
            <motion.div
              key={feature.id}
              variants={cardVariants}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              className="flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className={`${feature.iconBg} p-4 sm:p-5 rounded-full mb-4 sm:mb-5`}>
                <IconifyIcon 
                  icon={feature.icon} 
                  className={`${feature.iconColor} text-2xl sm:text-3xl`}
                  width="30"
                  height="30"
                />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-[#111827] text-base sm:text-lg md:text-xl mb-2 sm:mb-3">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[#4B5563] text-sm sm:text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
