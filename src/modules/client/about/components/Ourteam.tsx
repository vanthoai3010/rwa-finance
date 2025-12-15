"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

const OurTeam = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Nguyễn Văn Minh",
      position: "CEO & Co-Founder",
      role: "CEO & Co-Founder",
      background: "Giám độc, Goldman Sachs",
      experience: "15 năm kinh nghiệm tại Phố Wall",
      image: "/image/about/avatar-1.jpg",
    },
    {
      id: 2,
      name: "Trần Thị Hương",
      position: "CTO & Co-Founder",
      role: "CTO & Co-Founder",
      background: "Kỹ sư Blockchain, ConsenSys",
      experience: "Chuyên gia Smart Contract",
      image: "/image/about/avatar-2.jpg",
    },
    {
      id: 3,
      name: "Lê Hoàng Nam",
      position: "CFO",
      role: "CFO",
      background: "VP, JP Morgan Chase",
      experience: "Chuyên gia Quản lý Rủi ro",
      image: "/image/about/avatar-3.jpg",
    },
    {
      id: 4,
      name: "Phạm Thị Lan",
      position: "COO",
      role: "COO",
      background: "Director, Binance",
      experience: "Chuyên gia Vận hành Web3",
      image: "/image/about/avatar-4.jpg",
    },
    {
      id: 5,
      name: "Độ Quang Hải",
      position: "Head of Legal & Compliance",
      role: "Head of Legal & Compliance",
      background: "Partner, Baker McKenzie",
      experience: "Chuyên gia Pháp lý Blockchain",
      image: "/image/about/avatar-5.jpg",
    },
    {
      id: 6,
      name: "Vũ Thị Mai",
      position: "Head of Product",
      role: "Head of Product",
      background: "Product Lead, Coinbase",
      experience: "Chuyên gia UX/UI Web3",
      image: "/image/about/avatar-6.jpg",
    },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="py-8 sm:py-12 md:py-16 lg:py-20 xl:py-24 px-4 sm:px-5 md:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16"
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-[#0A2A4C] mb-2 sm:mb-3 md:mb-4 px-2 sm:px-4">
            Gặp Gỡ Đội Ngũ Của Chúng Tôi
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-[#4B5563] max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
            Sự kết hợp độc đáo giữa hàng thập kỷ kinh nghiệm tại Phố Wall và chuyên môn sâu rộng về Web3.
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-10"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              className="text-center bg-white rounded-lg p-4 sm:p-5 md:p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Avatar Circle */}
              <div className="flex justify-center mb-3 sm:mb-4 md:mb-5">
                <div className="relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center shadow-md ring-4 ring-white">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                </div>
              </div>

              {/* Name */}
              <h3 className="text-base sm:text-lg md:text-xl font-semibold text-[#0A2A4C] mb-1 px-2">
                {member.name}
              </h3>

              {/* Position */}
              <p className="text-sm sm:text-base font-medium text-[#00B589] mb-3 px-2">
                {member.position}
              </p>

              {/* Background */}
              <p className="text-xs sm:text-sm text-[#4B5563] mb-1 px-2">
                <span className="font-semibold">Nguyên:</span> {member.background}
              </p>

              {/* Experience */}
              <p className="text-xs sm:text-sm text-[#4B5563] px-2">
                <span className="font-semibold">Chuyên gia:</span> {member.experience}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OurTeam;