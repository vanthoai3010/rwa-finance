"use client";

import IconifyIcon from "@/modules/client/common/components/IconifyIcon";
import { motion, Variants } from "framer-motion";

interface SecurityFeature {
  icon: string;
  title: string;
  description: string;
}

const SecuritySection = () => {
  const features: SecurityFeature[] = [
    {
      icon: "mdi:code-tags",
      title: "Bảo Mật Hợp Đồng Thông Minh",
      description:
        "Mã nguồn của chúng tôi được kiểm toán liên tục bởi các công ty bảo mật Web3 hàng đầu. Mọi hợp đồng đều được công khai để khai đó công động xác minh.",
    },
    {
      icon: "streamline-plump:safe-vault-remix",
      title: "Bảo Chứng Tài Sản Thực 1:1",
      description:
        "Mỗi token RWA được bảo chứng 1:1 bằng tài sản thực. Các tài sản này được lưu ký an toàn bởi các tổ chức tài chính uy tín và được kiểm toán độc lập.",
    },
    {
      icon: "flowbite:server-solid",
      title: "Bảo Mật Nền Tảng & Dữ Liệu",
      description:
        "Hạ tầng của chúng tôi tuân thủ các tiêu chuẩn an ninh mạng nghiêm ngặt, bao gồm mã hóa dữ liệu, xác thực đa yếu tố và chống lại công kích DDoS.",
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
    <section className="py-10 sm:py-12 md:py-14 lg:py-16 xl:py-20 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-10 md:mb-12 lg:mb-14 px-2 sm:px-4 leading-tight"
          variants={titleVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          Tiếp Cận Bảo Mật Đa Lớp<br className="sm:hidden" />
          <span className="sm:inline"> </span>Của Chúng Tôi
        </motion.h2>

        {/* Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-6 lg:gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="bg-white rounded-xl p-5 sm:p-6 md:p-7 lg:p-8 shadow-sm hover:shadow-md transition-shadow"
            >
              {/* Icon */}
              <motion.div
                className="mb-4 sm:mb-5 md:mb-6 inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-[#00B5891A] rounded-lg"
                whileHover={{
                  scale: 1.1,
                  rotate: 5,
                  transition: { duration: 0.3 },
                }}
              >
                <IconifyIcon
                  icon={feature.icon}
                  className="text-[#00B589]"
                  width="24"
                  height="24"
                />
              </motion.div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl md:text-xl font-semibold text-gray-900 mb-2 sm:mb-3 leading-snug">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-[#4B5563] text-sm sm:text-base md:text-base leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default SecuritySection;