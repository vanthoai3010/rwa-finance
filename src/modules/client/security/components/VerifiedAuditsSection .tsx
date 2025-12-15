"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import IconifyIcon from "@/modules/client/common/components/IconifyIcon";

interface AuditCard {
  icon: string;
  badge: string;
  title: string;
  date: string;
  pdfLink: string;
}

const VerifiedAuditsSection = () => {
  const audits: AuditCard[] = [
    {
      icon: "mdi:shield-half-full",
      badge: "Đã vượt qua",
      title: "Kiểm toán Hợp đồng Thông minh Quỹ SOUSG",
      date: "Tháng 10, 2025",
      pdfLink: "#",
    },
    {
      icon: "tabler:search",
      badge: "Đã vượt qua",
      title: "Đánh Giá Bảo Mật Nền Tảng",
      date: "Tháng 9, 2025",
      pdfLink: "#",
    },
    {
      icon: "typcn:starburst",
      badge: "Đã vượt qua",
      title: "Kiểm Toán Tuân Thủ SOC 2",
      date: "Tháng 8, 2025",
      pdfLink: "#",
    },
  ];

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

  return (
    <section className="py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14">
          <motion.h2
            className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-5 px-2 sm:px-4 leading-tight"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
          >
            Đã Được Kiểm Toán &<br className="sm:hidden" />
            <span className="sm:inline"> </span>Xác Minh Độc Lập
          </motion.h2>

          <motion.p
            className="text-sm sm:text-base md:text-base lg:text-lg text-[#4B5563] max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed"
            variants={titleVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.1 }}
          >
            Chúng tôi cam kết minh bạch tối đa. Xem các báo cáo kiểm toán đầy đủ từ các đối tác bảo mật hàng đầu của chúng tôi.
          </motion.p>
        </div>

        {/* Audit Cards Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {audits.map((audit, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="bg-white border border-gray-200 rounded-xl p-5 sm:p-6 md:p-6 lg:p-7 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon and Badge */}
              <div className="flex items-start justify-between mb-4 sm:mb-5 md:mb-5 lg:mb-6">
                <motion.div 
                  className="inline-flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 bg-[#F3F4F6] rounded-lg flex-shrink-0"
                  whileHover={{
                    scale: 1.1,
                    rotate: 5,
                    transition: { duration: 0.3 },
                  }}
                >
                  <IconifyIcon
                    icon={audit.icon}
                    className="text-[#4B5563]"
                    width="20"
                    height="20"
                  />
                </motion.div>
                <span className="text-xs sm:text-sm font-medium text-[#00B589] bg-[#00B58914] px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full whitespace-nowrap ml-2">
                  {audit.badge}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg md:text-lg lg:text-xl font-semibold text-[#0A2A4C] mb-2 sm:mb-3 leading-snug min-h-[2.5rem] sm:min-h-[3rem]">
                {audit.title}
              </h3>

              {/* PDF Link Button */}
              <Link
                href={audit.pdfLink}
                className="inline-flex items-center justify-center w-full px-4 py-2.5 sm:py-3 md:py-3 border border-[#007AFF] text-[#007AFF] text-sm sm:text-base font-medium rounded-lg hover:bg-[#007AFF] hover:text-white transition-all duration-300 group"
              >
                <span>Đọc Báo Cáo Đầy Đủ (PDF)</span>
                <IconifyIcon
                  icon="mdi:arrow-right"
                  className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
                  width="18"
                  height="18"
                />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default VerifiedAuditsSection;