import React from "react";
import { Button } from "../ui/button";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion } from "framer-motion";

function Newsletter() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver dark:bg-BrandPrimary py-16 mt-20"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div>
        <div className="text-center">
          <motion.h2
            className="lg:text-5xl text-3xl text-neutral-800 font-semibold mb-6 lg:leading-snug"
            variants={itemVariants}
          >
            Lorem ipsum dolor sit excepturi.
          </motion.h2>
          <motion.div variants={itemVariants}>
            <Button
              size="lg"
              className="text-white bg-BrandPrimary hover:bg-BrandSecondary hover:text-white flex gap-2 mx-auto"
            >
              <a href="/" className="font-bold hover:text-neutral-700">
                Demo
              </a>
              <FaLongArrowAltRight />
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

export default Newsletter;
