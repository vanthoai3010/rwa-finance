'use client'

import React from 'react';
import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

// Title animation
const titleVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

// Description animation
const descriptionVariants: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 0.2,
      ease: "easeOut"
    }
  }
};

// Image animation
const imageVariants: Variants = {
  hidden: { opacity: 0, x: 30 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
      ease: "easeOut"
    }
  }
};

const Banner: React.FC = () => {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 lg:py-20 xl:py-28 overflow-hidden">
      {/* Background Image */}
      <Image
        src="/image/security/security-section-2.png"
        alt="Background"
        fill
        className="object-cover"
        quality={100}
        priority
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-10 xl:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                  delayChildren: 0
                }
              }
            }}
            className="text-center lg:text-left"
          >
            {/* Title */}
            <motion.h2
              className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-5xl font-bold text-[#0A2A4C] mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight px-2 sm:px-0"
              variants={titleVariants}
            >
              Bảo Mật Là Nền Tảng<br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Của Chúng Tôi.
            </motion.h2>

            {/* Description */}
            <motion.p
              className="text-sm sm:text-base md:text-lg lg:text-xl text-[#374151] leading-relaxed max-w-2xl mx-auto lg:mx-0 px-2 sm:px-0"
              variants={descriptionVariants}
            >
              Chúng tôi bảo vệ tài sản của bạn bằng các biện pháp kiểm toàn nghiêm ngặt, công nghệ bảo mật cấp tổ chức và sự minh bạch 1:1 tuyệt đối.
            </motion.p>
          </motion.div>

          {/* Right Image */}
          <motion.div
            className="flex justify-center lg:justify-end mt-4 sm:mt-6 lg:mt-0"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={imageVariants}
          >
            <div className="relative w-full max-w-[280px] h-[240px] sm:max-w-[360px] sm:h-[300px] md:max-w-[440px] md:h-[360px] lg:max-w-[500px] lg:h-[420px] xl:max-w-[580px] xl:h-[480px]">
              <Image
                src="/image/security/security-section-1.png"
                alt="Security Shield"
                fill
                className="object-contain"
                priority
                sizes="(max-width: 640px) 280px, (max-width: 768px) 360px, (max-width: 1024px) 440px, (max-width: 1280px) 500px, 580px"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;