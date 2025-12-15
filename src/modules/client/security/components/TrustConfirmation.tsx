"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

const TrustConfirmation = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const contentVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const buttonContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Title */}
          <motion.h2
            variants={contentVariants}
            className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-[#0A2A4C] mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight px-2 sm:px-4 lg:px-0"
          >
            An Tâm Đầu Tư
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={contentVariants}
            className="text-sm sm:text-base md:text-base lg:text-lg text-[#4B5563] max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed px-2 sm:px-4 lg:px-0"
          >
            Giờ bạn đã hiểu về cam kết bảo mật của chúng tôi, hãy khám phá các sản phẩm RWA hàng đầu một cách tự tin.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 px-2 sm:px-0"
            variants={buttonContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Primary Button */}
            <motion.div variants={buttonVariants} className="w-full sm:w-auto">
              <Link
                href="#"
                className="flex items-center justify-center w-full sm:w-auto px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-[#0A2A4C] hover:bg-[#051a2f] text-white text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 whitespace-nowrap"
              >
                Khám Phá Các Sản Phẩm
              </Link>
            </motion.div>

            {/* Secondary Button */}
            <motion.div variants={buttonVariants} className="w-full sm:w-auto">
              <Link
                href="#"
                className="flex items-center justify-center w-full sm:w-auto px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 border-2 border-[#0A2A4C] text-[#0A2A4C] hover:bg-[#0A2A4C] hover:text-white text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 whitespace-nowrap"
              >
                Đọc Tài Liệu Kỹ Thuật (Docs)
              </Link>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TrustConfirmation;