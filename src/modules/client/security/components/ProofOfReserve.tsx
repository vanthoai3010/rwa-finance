"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import Link from "next/link";

const ProofOfReserve = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const titleVariants: Variants = {
    hidden: { opacity: 0, y: -10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-10 sm:py-12 md:py-14 lg:py-16 px-4 sm:px-6 md:px-8 lg:px-16 bg-gradient-to-b from-white to-[#F8FAFB]">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-[#0A2A4C] mb-3 sm:mb-4 md:mb-4 lg:mb-5 px-2 sm:px-4 lg:px-0 leading-tight">
            Bằng Chứng Dự Trữ 1:1
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#4B5563] max-w-6xl mx-auto px-2 sm:px-4 lg:px-0 leading-relaxed">
            Tài sản thực của chúng tôi được lưu ký an toàn bởi một ngân hàng lưu ký cấp quốc gia. Chúng tôi cung cấp báo cáo xác minh hàng tháng từ các kiểm toán viên bên thứ ba.
          </p>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column - Stats and Button */}
          <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-8">
            {/* Stat Card 1 */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
                <h3 className="text-sm sm:text-base md:text-base lg:text-lg font-semibold text-[#0A2A4C] leading-snug">
                  Tổng Tài sản Lưu ký (TraDFi)
                </h3>
                <span className="text-xs sm:text-sm font-medium text-[#00B589] bg-[#00B58914] px-2 sm:px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                  Đã xác minh
                </span>
              </div>
              <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                $100,000,000
              </p>
            </motion.div>

            {/* Stat Card 2 */}
            <motion.div
              variants={itemVariants}
              className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-7 lg:p-8 border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4 gap-2">
                <h3 className="text-sm sm:text-base md:text-base lg:text-lg font-semibold text-[#0A2A4C] leading-snug">
                  Tổng Token RWA (Blockchain)
                </h3>
                <span className="text-xs sm:text-sm font-medium text-[#00B589] bg-[#00B58914] px-2 sm:px-2.5 py-1 rounded-full whitespace-nowrap flex-shrink-0">
                  Cân bằng 1:1
                </span>
              </div>
              <p className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-bold text-gray-900">
                $100,000,000
              </p>
            </motion.div>

            {/* Button */}
            <motion.div variants={itemVariants}>
              <Link
                href="#"
                className="inline-flex items-center justify-center w-full px-5 sm:px-6 py-2.5 sm:py-3 md:py-3.5 lg:py-4 border border-[#007AFF] text-[#007AFF] text-sm sm:text-base font-semibold rounded-lg hover:bg-[#007AFF] hover:text-white transition-all duration-300 group"
              >
                <span>Xem Báo cáo Lưu ký Hàng tháng</span>
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
            </motion.div>
          </div>

          {/* Right Column - Image */}
          <motion.div
            variants={imageVariants}
            className="relative order-first lg:order-last mt-0 lg:mt-0"
          >
            <div className="relative overflow-hidden w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px] ">
              <Image
                src="/image/security/security-section-3.png"
                alt="Asset Booking Dashboard"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 600px"
                priority
              />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProofOfReserve;