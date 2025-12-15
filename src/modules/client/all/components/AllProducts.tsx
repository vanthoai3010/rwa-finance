"use client";

import React from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import IconifyIcon from "@/modules/client/common/components/IconifyIcon";
import products from "../mocks/all-products.json";

type Product = {
  id: number;
  slug: string;
  name: string;
  token: string;
  apy: string;
  apyColor: string;
  icon: string;
  iconBg: string;
  iconColor: string;
  backedBy: string;
  riskLabel: string;
  riskIcon: string;
  riskColor: string;
  minInvest: string;
  liquidity: string;
  liquidityColor: string;
  investLabel: string;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const AllProducts: React.FC = () => {
  const typedProducts = products as unknown as Product[];

  return (
    <section className="relative py-8 sm:py-12 md:py-14 lg:py-16 overflow-hidden bg-gray-50">
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-5 md:px-6 lg:px-8 xl:px-10">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 md:gap-6 lg:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          {typedProducts.map((product) => (
            <motion.div
              key={product.id}
              variants={cardVariants}
              whileHover={{
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" },
              }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-md hover:shadow-lg border border-gray-100 p-5 sm:p-6 md:p-7 flex flex-col transition-shadow duration-200"
            >
              <div className="flex items-start justify-between mb-5 sm:mb-6">
                <div className={`${product.iconBg} p-2.5 sm:p-3 rounded-lg`}>
                  <IconifyIcon
                    icon={product.icon}
                    className={`${product.iconColor} text-xl sm:text-2xl`}
                    width="20"
                    height="20"
                  />
                </div>
                <div className="text-right">
                  <div className={`text-2xl sm:text-3xl font-bold ${product.apyColor}`}>{product.apy}</div>
                </div>
              </div>

              <h3 className="font-bold text-[#111827] text-base sm:text-lg md:text-xl mb-1">{product.name}</h3>
              <p className="text-[#4B5563] text-sm sm:text-base mb-2.5 sm:mb-3">{product.token}</p>
              <p className="text-[#4B5563] text-xs sm:text-sm mb-4">Backed by: {product.backedBy}</p>

              <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                <div className="flex items-center justify-between">
                  <span className="text-[#4B5563] text-sm sm:text-base">Rủi ro</span>
                  <div className="flex items-center gap-1">
                    <IconifyIcon
                      icon={product.riskIcon}
                      className={`${product.riskColor} text-sm`}
                      width="14"
                      height="14"
                    />
                    <span className={`font-medium text-xs sm:text-sm ${product.riskColor}`}>{product.riskLabel}</span>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#4B5563] text-sm sm:text-base">Đầu tư tối thiểu</span>
                  <span className="text-[#1B2B4D] font-semibold text-xs sm:text-sm">{product.minInvest}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#4B5563] text-sm sm:text-base">Thanh khoản</span>
                  <span className={`font-medium text-xs sm:text-sm ${product.liquidityColor}`}>{product.liquidity}</span>
                </div>
              </div>

              <div className="flex gap-2.5 sm:gap-3 mt-auto">
                <Link
                  href={`/product/${product.slug}`}
                  className="flex-1 py-2 sm:py-2.5 px-3 rounded-lg font-medium text-xs sm:text-sm text-[#6B7280] bg-gray-100 hover:bg-gray-200 transition-colors duration-200 text-center"
                >
                  Chi tiết
                </Link>
                <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="flex-1">
                  <Link
                    href={`/invest/${product.slug}`}
                    className="block w-full py-2 sm:py-2.5 px-3 rounded-lg font-semibold text-xs sm:text-sm transition-all duration-200 bg-[#00B589] text-white hover:bg-[#009e7a] shadow-sm text-center"
                  >
                    {product.investLabel}
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AllProducts;
