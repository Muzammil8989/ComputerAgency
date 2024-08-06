import React from "react";
import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";
import Logo from "../../assets/Logo.png";
import { motion } from "framer-motion";

function Fotter() {
  const footerVariants = {
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
    <div className="">
      <Footer container className=" dark:bg-blue-800">
        <motion.div
          className="w-full"
          initial="hidden"
          animate="visible"
          variants={footerVariants}
        >
          <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
            <motion.div variants={itemVariants}>
              <Footer.Brand
                href="#"
                src={Logo}
                alt="Flowbite Logo"
                name="NexusTech"
              />
            </motion.div>
            <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
              <motion.div variants={itemVariants}>
                <Footer.Title title="About" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Features</Footer.Link>
                  <Footer.Link href="#">Security</Footer.Link>
                </Footer.LinkGroup>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Footer.Title title="Follow us" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Twitter</Footer.Link>
                  <Footer.Link href="#">Youtube</Footer.Link>
                </Footer.LinkGroup>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Footer.Title title="Legal" />
                <Footer.LinkGroup col>
                  <Footer.Link href="#">Privacy Policy</Footer.Link>
                  <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
                </Footer.LinkGroup>
              </motion.div>
            </div>
          </div>
          <Footer.Divider />
          <div className="w-full sm:flex sm:items-center sm:justify-between">
            <Footer.Copyright href="#" by="Nexus™" year={2024} />
            <motion.div
              className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center"
              initial="hidden"
              animate="visible"
              variants={footerVariants}
            >
              <motion.div variants={itemVariants}>
                <Footer.Icon href="#" icon={BsFacebook} />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Footer.Icon href="#" icon={BsInstagram} />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Footer.Icon href="#" icon={BsTwitter} />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Footer.Icon href="#" icon={BsGithub} />
              </motion.div>
              <motion.div variants={itemVariants}>
                <Footer.Icon href="#" icon={BsDribbble} />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </Footer>
    </div>
  );
}

export default Fotter;
