"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const JoinUs = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="relative py-10 sm:py-14 md:py-18 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-[#F0F8F6] to-[#F5FAFB] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-40 sm:opacity-60 md:opacity-80 lg:opacity-100">
        <Image
          src="/image/security/security-section-4.png"
          alt="Background"
          fill
          className="object-contain"
          quality={90}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20"
        >
          <h2 className="text-xl leading-tight sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight lg:text-4xl font-bold text-[#000000] px-2 lg:px-0">
            Trở Thành Một Phần Của Tương Lai Tài Chính
          </h2>
        </motion.div>

        {/* Cards Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Join Team Card */}
          <motion.div
            variants={cardVariants}
            className="flex flex-col items-center justify-between text-center p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl bg-white/60 sm:bg-white/70 md:bg-transparent backdrop-blur-sm sm:backdrop-blur-md md:backdrop-blur-none h-full"
          >
            <div className="flex-1 flex flex-col items-center">
              {/* Icon Circle */}
              <div className="mb-5 sm:mb-6 lg:mb-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-[#00B58933] flex items-center justify-center"></div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#000000] mb-2 sm:mb-3 lg:mb-4">
                Tham Gia Đội Ngũ
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#4B5563] mb-5 sm:mb-6 lg:mb-8 leading-relaxed max-w-sm mx-auto">
                Chúng tôi luôn tìm kiếm tài năng. Xem các vị trí đang mở.
              </p>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full max-w-[195px] h-[44px] sm:h-[48px] px-6 sm:px-8 lg:px-10 bg-[#00B589] text-white text-sm sm:text-base font-semibold rounded-lg hover:bg-[#00A076] transition-colors duration-300 active:bg-[#009068]"
            >
              Tham Gia
            </motion.button>
          </motion.div>

          {/* Connect Card */}
          <motion.div
            variants={cardVariants}
            className="flex flex-col items-center justify-between text-center p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl bg-white/60 sm:bg-white/70 md:bg-transparent backdrop-blur-sm sm:backdrop-blur-md md:backdrop-blur-none h-full"
          >
            <div className="flex-1 flex flex-col items-center">
              {/* Icon Circle */}
              <div className="mb-5 sm:mb-6 lg:mb-8">
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-[#B4B4B4] flex items-center justify-center"></div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-[#000000] mb-2 sm:mb-3 lg:mb-4">
                Kết Nối Với Chúng Tôi
              </h3>

              {/* Description */}
              <p className="text-sm sm:text-base text-[#4B5563] mb-5 sm:mb-6 lg:mb-8 leading-relaxed max-w-sm mx-auto">
                Bạn là đối tác, bao chỉ, hay tổ chức? Hãy kết nối.
              </p>
            </div>

            {/* Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full max-w-[195px] h-[44px] sm:h-[48px] px-6 sm:px-8 lg:px-10 border-2 border-[#00B589] text-[#000000] text-sm sm:text-base font-semibold rounded-lg hover:bg-[#00B589]/5 transition-colors duration-300 active:bg-[#00B589]/10"
            >
              Liên Hệ
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default JoinUs;