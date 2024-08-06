import React, { useEffect } from "react";
import { FaBuildingColumns, FaUsersLine } from "react-icons/fa6";
import { GiClubs } from "react-icons/gi";
import company1 from "../../assets/company1.png";
import company2 from "../../assets/company2.png";
import company3 from "../../assets/company3.png";
import company4 from "../../assets/company4.png";
import company5 from "../../assets/company5.png";
import company6 from "../../assets/company6.png";
import company7 from "../../assets/company7.png";
import company8 from "../../assets/company8.png";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Services() {
  const services = [
    {
      id: 1,
      icon: <FaBuildingColumns />,
      title: "Creative Design",
      description:
        "We craft beautiful and intuitive designs that help our clients achieve their goals.",
    },
    {
      id: 2,
      icon: <FaUsersLine />,
      title: "Creative Design",
      description:
        "We craft beautiful and intuitive designs that help our clients achieve their goals.",
    },
    {
      id: 3,
      icon: <GiClubs />,
      title: "Creative Design",
      description:
        "We craft beautiful and intuitive designs that help our clients achieve their goals.",
    },
  ];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.1 },
    },
  };

  return (
    <div className="md:px-14 px-4 py-16 max-w-screen-2xl mx-auto">
      <div className="text-center my-8">
        <motion.h2
          className="text-4xl text-neutralDGrey font-semibold mb-2"
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
          Our Clients
        </motion.h2>
        <motion.p
          className="text-neutralGrey"
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
          We have worked with some Fortune 500 clients
        </motion.p>

        {/* Company Logos */}
        <motion.div
          animate={controls}
          variants={textVariants}
          className="my-12 flex flex-wrap justify-between items-center gap-8 Services_img"
        >
          <img src={company1} alt="" className="size-20" />
          <img src={company2} alt="" className="size-20" />
          <img src={company3} alt="" className="size-20" />
          <img src={company4} alt="" className="size-20" />
          <img src={company5} alt="" className="size-20" />
          <img src={company6} alt="" className="size-20" />
          <img src={company7} alt="" className="size-20" />
          <img src={company8} alt="" className="size-20" />
        </motion.div>

        <motion.div
          className="mt-20 md:w-1/2 mx-auto text-center"
          initial="hidden"
          animate={controls}
          variants={textVariants}
        >
          <h1 className="text-4xl font-semibold text-neutralDGrey mb-3">
            Manage your entire business from one dashboard
          </h1>
          <p className="text-neutralGrey">
            Who is more important than your business?
          </p>
        </motion.div>

        <div ref={ref} className="flex flex-wrap justify-center">
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="w-full sm:w-1/2 md:w-1/3 p-4 flex justify-center cursor-pointer"
              variants={cardVariants}
              initial="hidden"
              animate={controls}
              whileHover={{ scale: 1.05 }}
            >
              <div className="p-6 bg-gray-300 border border-gray-200 rounded-lg shadow dark:bg-BrandPrimary dark:border-blue-400 dark:shadow-inner">
                <div className="flex justify-center mb-4 bg-[#E8F5E9] p-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl dark:text-BrandPrimary">
                  {service.icon}
                </div>
                <div className="text-center">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {service.title}
                  </h5>
                  <p className="font-normal text-gray-700 dark:text-gray-200">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
