import React, { useEffect } from "react";
import aboutImg from "../../assets/about.png";
import { Button } from "../ui/button";
import { PiClubBold } from "react-icons/pi";
import { MdOutlinePayment } from "react-icons/md";
import { CiBookmarkCheck } from "react-icons/ci";
import { FaUsers } from "react-icons/fa6";

import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
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

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  return (
    <>
      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8">
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
          >
            <img src={aboutImg} alt="about" />
          </motion.div>
          <motion.div
            className="md:w-3/5 mx-auto"
            initial="hidden"
            animate={controls}
            variants={variants}
          >
            <h2 className="text-4xl md:text-4xl font-semibold text-neutralDGrey mb-4 md:h-4/5">
              The unseen power of design for growth and success.
            </h2>
            <p className="text-neutralGrey md:w-3/4 text-sm mb-8">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Repudiandae in, quaerat voluptate sit amet officia veniam nemo
              aliquid eos natus magnam quod, earum similique enim ad incidunt?
              Ducimus, porro. Deleniti, molestias fugiat! Eius rem doloremque
              perspiciatis veritatis voluptate? Sequi laboriosam dolorem
              voluptates dolorum sit qui nostrum aspernatur eum modi, adipisci
            </p>
            <Button variant="default" className="dark:bg-white" asChild>
              <a href="#">Learn More</a>
            </Button>
          </motion.div>
        </div>
      </div>
      {/* Company Stats */}

      <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver dark:bg-BrandPrimary py-16">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <motion.div
            className="md:w-11/12 mx-auto"
            initial="hidden"
            animate={controls}
            variants={variants}
          >
            <h2 className="text-4xl font-semibold text-neutralDGrey mb-4 md:w-2/3">
              Helping Companies of All Sizes. <br />{" "}
              <span className="text-BrandPrimary dark:text-white">
                Trusted by Leading Companies.
              </span>
            </h2>
            <p className="text-neutralGrey">
              We reached here with our hard work and determination.
            </p>
          </motion.div>

          {/* Company Logos */}
          <motion.div
            className="md:w-1/2 mx-auto grid grid-cols-2 gap-12"
            initial="hidden"
            animate={controls}
            variants={variants}
          >
            <div className="space-y-8">
              <div className="flex gap-4 items-center">
                <FaUsers className="text-4xl" />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralDGrey">
                    2,000
                  </h4>
                  <p className="text-neutralGrey">Employees</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex gap-4 items-center">
                <PiClubBold className="text-4xl" />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralDGrey">
                    5,000
                  </h4>
                  <p className="text-neutralGrey">Projects</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex gap-4 items-center">
                <MdOutlinePayment className="text-4xl" />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralDGrey">
                    10,000
                  </h4>
                  <p className="text-neutralGrey">Transactions</p>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="flex gap-4 items-center">
                <CiBookmarkCheck className="text-4xl" />
                <div>
                  <h4 className="text-2xl font-semibold text-neutralDGrey">
                    2,000
                  </h4>
                  <p className="text-neutralGrey"> Bookmarks </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
