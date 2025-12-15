"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const BugBountySection = () => {
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

  const iconVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-12 sm:py-16 md:py-20 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/security/security-section-4.png"
          alt="Bug Bounty Background"
          fill
          className="object-cover object-center"
          quality={90}
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto">
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Icon */}
          <motion.div
            variants={iconVariants}
            className="flex justify-center mb-5 sm:mb-6 md:mb-7 lg:mb-8"
          >
            <motion.div
              className="w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-full bg-[#00B58933] flex items-center justify-center"
              whileHover={{
                scale: 1.1,
                rotate: 360,
                transition: { duration: 0.5 },
              }}
            >
              <svg
                className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-[#00A896]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="9" strokeWidth="2" />
                <circle cx="12" cy="12" r="5" strokeWidth="2" />
                <circle cx="12" cy="12" r="1" fill="currentColor" />
              </svg>
            </motion.div>
          </motion.div>

          {/* Title */}
          <motion.h2
            variants={contentVariants}
            className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-[#000000] mb-3 sm:mb-4 md:mb-5 lg:mb-6 leading-tight px-2 sm:px-4 lg:px-0"
          >
            Giúp Chúng Tôi Bảo Mật Hơn
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={contentVariants}
            className="text-sm sm:text-base md:text-base lg:text-xl text-[#4B5563] max-w-3xl mx-auto mb-6 sm:mb-8 md:mb-10 lg:mb-12 leading-relaxed px-2 sm:px-4 lg:px-0"
          >
            Bạn tìm thấy một lỗ hổng bảo mật? Chúng tôi có chương trình Bug Bounty đang hoạt động thông qua Immunefi với phần thưởng lên đến $500,000.
          </motion.p>

          {/* Button */}
          <motion.div variants={contentVariants}>
            <Link
              href="#"
              className="inline-flex items-center justify-center px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 bg-[#00B589] hover:bg-[#00A076] text-white text-sm sm:text-base font-semibold rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
            >
              Báo Cáo Lỗ Hổng
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default BugBountySection;