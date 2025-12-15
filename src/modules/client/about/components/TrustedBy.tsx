"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const TrustedBy = () => {
    const investors = [
        { id: 1, name: "Investor 1", logo: "/image/about/to-chuc-1.png" },
        { id: 2, name: "Investor 2", logo: "/image/about/to-chuc-2.png" },
        { id: 3, name: "Investor 3", logo: "/image/about/to-chuc-3.png" },
        { id: 4, name: "Investor 4", logo: "/image/about/to-chuc-4.png" },
        { id: 5, name: "Investor 5", logo: "/image/about/to-chuc-5.png" },
        { id: 6, name: "Investor 6", logo: "/image/about/to-chuc-8.png" },
    ];

    const strategicPartners = [
        { id: 1, name: "Partner 1", logo: "/image/about/to-chuc-7.png" },
        { id: 2, name: "Partner 2", logo: "/image/about/to-chuc-2.png" },
        { id: 3, name: "Partner 3", logo: "/image/about/to-chuc-3.png" },
        { id: 4, name: "Partner 4", logo: "/image/about/to-chuc-4.png" },
        { id: 5, name: "Partner 5", logo: "/image/about/to-chuc-5.png" },
        { id: 6, name: "Partner 6", logo: "/image/about/to-chuc-8.png" },
    ];

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.08,
                delayChildren: 0.1,
            },
        },
    };

    const logoVariants: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut",
            },
        },
    };

    return (
        <section className="py-10 sm:py-14 md:py-18 lg:py-24 px-4 sm:px-6 lg:px-8 xl:px-12 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-10 sm:mb-14 md:mb-16 lg:mb-20"
                >
                    <h2 className="text-xl leading-tight sm:text-2xl sm:leading-tight md:text-3xl md:leading-tight lg:text-4xl font-bold text-[#0A2A4C] mb-2 sm:mb-3 lg:mb-4 px-2 lg:px-0">
                        Được Tin Tưởng Bởi Các Tổ Chức Hàng Đầu
                    </h2>
                    <p className="text-sm leading-relaxed sm:text-base sm:leading-relaxed md:text-lg md:leading-relaxed lg:text-xl text-[#4B5563] max-w-3xl lg:max-w-6xl mx-auto px-2 lg:px-0">
                        Chúng tôi tự hào được hỗ trợ bởi các quỹ đầu tư mạo hiểm và các tổ chức tài chính hàng đầu thế giới.
                    </p>
                </motion.div>

                {/* Investors Section */}
                <div className="mb-12 sm:mb-16 md:mb-20 lg:mb-24">
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-lg sm:text-xl md:text-2xl font-semibold text-[#0A2A4C] text-center mb-6 sm:mb-8 md:mb-10"
                    >
                        Nhà Đầu Tư
                    </motion.h3>

                    <motion.div
                        className="grid grid-cols-2 gap-3 xs:grid-cols-3 xs:gap-4 sm:gap-5 md:grid-cols-4 md:gap-6 lg:grid-cols-6 lg:gap-8 items-center justify-center"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {investors.map((investor) => (
                            <motion.div
                                key={investor.id}
                                variants={logoVariants}
                                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center justify-center aspect-square lg:aspect-auto lg:h-20 bg-gray-50 rounded-lg p-4 sm:p-5 md:p-4 lg:p-4 hover:bg-gray-100 transition-colors"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={investor.logo}
                                        alt={investor.name}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                                        onError={(e) => {
                                            e.currentTarget.style.display = "none";
                                        }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Strategic Partners Section */}
                <div>
                    <motion.h3
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true, margin: "-100px" }}
                        className="text-lg sm:text-xl md:text-2xl font-semibold text-[#0A2A4C] text-center mb-6 sm:mb-8 md:mb-10"
                    >
                        Đối Tác Chiến Lược
                    </motion.h3>

                    <motion.div
                        className="grid grid-cols-2 gap-3 xs:grid-cols-3 xs:gap-4 sm:gap-5 md:grid-cols-4 md:gap-6 lg:grid-cols-6 lg:gap-8 items-center justify-center"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        {strategicPartners.map((partner) => (
                            <motion.div
                                key={partner.id}
                                variants={logoVariants}
                                whileHover={{ scale: 1.1, transition: { duration: 0.3 } }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center justify-center aspect-square lg:aspect-auto lg:h-20 bg-gray-50 rounded-lg p-4 sm:p-5 md:p-4 lg:p-4 hover:bg-gray-100 transition-colors"
                            >
                                <div className="relative w-full h-full">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 16vw"
                                        onError={(e) => {
                                            e.currentTarget.style.display = "none";
                                        }}
                                    />
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBy;