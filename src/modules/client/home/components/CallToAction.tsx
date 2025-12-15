"use client";

import React from "react";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const CallToAction = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.1, 0.25, 1]
      }
    }
  };

  const descriptionVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 1.1 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="relative w-full py-12 sm:py-16 md:py-20 lg:py-28 xl:py-32 overflow-hidden bg-white/50">
      {/* Ảnh nền phía dưới với animation */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={imageVariants}
      >
        <Image
          src="/image/home/home-section-2.png"
          alt="Call To Action Background"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay gradient cho dễ đọc text */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/40" />
      </motion.div>

      {/* Nội dung chính */}
      <motion.div
        className="relative z-10 flex flex-col items-center justify-center text-center max-w-6xl mx-auto px-4 sm:px-6 md:px-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        {/* Heading */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-5 md:mb-6 text-black leading-tight px-2"
          variants={headingVariants}
        >
          Đã Đến Lúc Để Tiền Của Bạn Làm Việc
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-[#656565] text-base sm:text-lg md:text-xl mb-6 sm:mb-7 md:mb-8 max-w-2xl px-4"
          variants={descriptionVariants}
        >
          Tham gia hàng nghìn nhà đầu tư thông minh đã chọn RWA Finance
        </motion.p>

        {/* Button */}
        <motion.button
          className="bg-[#00B589] w-full sm:w-[200px] md:w-[220px] h-[52px] sm:h-[56px] md:h-[60px] hover:bg-emerald-600 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-200 text-base sm:text-lg"
          variants={buttonVariants}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 10px 25px rgba(0, 181, 137, 0.3)"
          }}
          whileTap={{ scale: 0.98 }}
        >
          Bắt đầu Ngay
        </motion.button>

        {/* Decorative elements - subtle floating animation */}
        <motion.div
          className="absolute top-8 left-4 sm:top-12 sm:left-8 w-16 h-16 sm:w-20 sm:h-20 bg-[#00B589]/10 rounded-full blur-2xl"
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-8 right-4 sm:bottom-12 sm:right-8 w-20 h-20 sm:w-24 sm:h-24 bg-[#00B589]/10 rounded-full blur-2xl"
          animate={{
            y: [0, 20, 0],
            opacity: [0.4, 0.7, 0.4]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </motion.div>
    </section>
  );
};

export default CallToAction;