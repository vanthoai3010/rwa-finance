"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const Banner = () => {
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

  const contentVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
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
    <section className="relative py-10 sm:py-12 md:py-16 lg:py-24 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gradient-to-br from-[#F5F7FA] via-[#F8FAFB] to-[#F0F4F8] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/image/about/banner-about.png"
          alt="Background"
          fill
          className="object-cover object-bottom"
          quality={90}
          priority
        />
      </div>

      {/* Decorative Background Elements - Hidden on mobile */}
      <div className="hidden md:block absolute top-0 right-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-br from-blue-100 to-transparent rounded-full opacity-30 blur-3xl -mr-32 md:-mr-40 lg:-mr-48 -mt-32 md:-mt-40 lg:-mt-48 z-0"></div>
      <div className="hidden md:block absolute bottom-0 left-0 w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-gradient-to-tr from-blue-50 to-transparent rounded-full opacity-20 blur-3xl -ml-32 md:-ml-40 lg:-ml-48 -mb-32 md:-mb-40 lg:-mb-48 z-0"></div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-16 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Column - Content */}
          <motion.div variants={contentVariants} className="order-2 lg:order-1 px-2 sm:px-0">
            <h1 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#0A2A4C] mb-4 sm:mb-5 md:mb-5 lg:mb-6 leading-snug sm:leading-relaxed lg:leading-tight">
              Xây Dựng Cầu Nối Giữa Tài Chính Truyền Thống Và Tương Lai Phi Tập Trung
            </h1>

            <p className="text-sm sm:text-base md:text-base lg:text-lg text-[#4B5563] leading-relaxed mb-6 sm:mb-7 md:mb-8">
              Chúng tôi là đội ngũ gồm các chuyên gia kỳ cựu từ cả hai thế giới tài chính và công nghệ, cùng chung một sứ mệnh: làm cho các tài sản giá trị nhất thế giới trở nên minh bạch, hiệu quả và dễ tiếp cận cho tất cả mọi người thông qua công nghệ blockchain.
            </p>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div variants={imageVariants} className="order-1 lg:order-2 relative">
            <div className="relative w-full h-[240px] sm:h-[280px] md:h-[320px] lg:h-[360px] xl:h-[384px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl">
              {/* Image Container */}
              <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                <Image
                  src="/image/about/about-section-1.png"
                  alt="Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                  priority
                  onError={(e) => {
                    // Fallback if image doesn't exist
                    e.currentTarget.style.display = "none";
                  }}
                />
              </div>

              {/* Decorative Border */}
              <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-white/30 pointer-events-none"></div>
            </div>

            {/* Floating Accent - Hidden on mobile */}
            <div className="hidden sm:block absolute -bottom-4 sm:-bottom-6 -right-4 sm:-right-6 w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-white rounded-full shadow-lg opacity-80 blur-xl"></div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Banner;