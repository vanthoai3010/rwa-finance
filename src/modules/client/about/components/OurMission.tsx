"use client";

import { motion, Variants } from "framer-motion";

const OurMission = () => {
    const missions = [
        {
            id: 1,
            title: "Minh Bạch Tuyệt Đối",
            description: "Mọi tài sản được xác minh 1:1 trên chuỗi. Mọi quy trình được công khai kiểm toán.",
        },
        {
            id: 2,
            title: "Bảo Mật Cấp Tổ Chức",
            description: "Chúng tôi áp dụng tiêu chuẩn bảo mật của blockchain cho công nghệ Web3.",
        },
        {
            id: 3,
            title: "Kết Nối Tương Lai",
            description: "Chúng tôi khoảng chí theo xu hướng, chúng tôi tạo ra thị trường RWA.",
        },
        {
            id: 4,
            title: "Tuân Thủ Pháp Lý",
            description: "Chúng tôi làm việc chủ động với các cơ quan quản lý để đảm bảo an toàn.",
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
        <section className="py-10 sm:py-12 md:py-16 lg:py-28 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-20 px-2 sm:px-4 lg:px-0"
                >
                    <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-[#0A2A4C] leading-tight">
                        Sứ Mệnh Của Chúng Tôi Là Gì?
                    </h2>
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-6 lg:gap-8"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                >
                    {missions.map((mission) => (
                        <motion.div
                            key={mission.id}
                            variants={cardVariants}
                            whileHover={{
                                y: -8,
                                transition: { duration: 0.3, ease: "easeOut" },
                            }}
                            className="bg-[#F9FAFB] rounded-xl sm:rounded-2xl p-6 sm:p-7 md:p-8 lg:p-10 text-center hover:shadow-lg transition-shadow duration-300"
                        >
                            {/* Icon Circle */}
                            <div className="flex justify-center mb-4 sm:mb-5 md:mb-6">
                                <motion.div
                                    className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[#00B5891A]"
                                    whileHover={{
                                        scale: 1.1,
                                        rotate: 360,
                                        transition: { duration: 0.5 },
                                    }}
                                ></motion.div>
                            </div>

                            {/* Title */}
                            <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#0A2A4C] mb-2 sm:mb-3 md:mb-4 leading-snug">
                                {mission.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm sm:text-base text-[#4B5563] leading-relaxed">
                                {mission.description}
                            </p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default OurMission;