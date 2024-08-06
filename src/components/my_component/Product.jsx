import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "../ui/button";
import productImg from "../../assets/product.png";
import computerImg from "../../assets/computer.png";
import { FaLongArrowAltRight } from "react-icons/fa";

function Product() {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
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
        <div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-44">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={controls}
            variants={variants}
          >
            <img src={productImg} alt="about" />
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
            className="md:w-1/3 mx-auto"
            initial="hidden"
            animate={controls}
            variants={variants}
          >
            <img src={computerImg} alt="about" className="sm:w-3/4" />
          </motion.div>
          <div className="md:w-2/3 mx-auto">
            <div>
              <p className="md:w-4/5 text-sm text-neutralGrey mb-8 leading-7">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
                recusandae, alias, incidunt illo, tempore dolores veniam rem
                adipisci dolorum quisquam in impedit omnis vitae asperiores
                harum dolore ullam? Odio quasi maiores est adipisci, itaque
                ullam unde architecto pariatur doloremque distinctio expedita.
                Quisquam excepturi animi dolores asperiores ratione, dicta qui
                veniam nobis eum maiores quibusdam, labore ea. Sit repudiandae
                dignissimos distinctio, architecto ex quod rerum quibusdam
                nostrum perferendis, fugiat natus sequi fuga quae nisi pariatur
                sint. Nisi cumque illum dolorem eaque illo ad quae qui
                aspernatur excepturi exercitationem, vel nulla vitae! Ea placeat
                suscipit maxime, vitae doloribus sequi veniam inventore illo.
              </p>
              <h5 className="text-xl font-semibold mb-2">- John Doe</h5>
              <p className="text-neutralGrey text-sm">
                Designer at Company Name Ltd{" "}
              </p>
              <div>
                <div className="flex items-center gap-8 flex-wrap mt-4">
                  <img
                    src="/src/assets/company1.png"
                    alt=""
                    className="size-8 text-neutralDGrey"
                  />
                  <img
                    src="/src/assets/company2.png"
                    alt=""
                    className="size-8 text-neutralDGrey"
                  />
                  <img
                    src="/src/assets/company3.png"
                    alt=""
                    className="size-8 text-neutralDGrey"
                  />
                  <img
                    src="/src/assets/company4.png"
                    alt=""
                    className="size-8 text-neutralDGrey"
                  />
                  <img
                    src="/src/assets/company5.png"
                    alt=""
                    className="size-8 text-neutralDGrey"
                  />
                  <img
                    src="/src/assets/company6.png"
                    alt=""
                    className="size-8 text-neutralDGrey"
                  />
                  <img
                    src="/src/assets/company7.png"
                    alt=""
                    className="size-8 text-neutralDGrey"
                  />
                  <img
                    src="/src/assets/company8.png"
                    alt=""
                    className="size-8 text-neutralDGrey"
                  />
                  <div className="flex items-center gap-2">
                    <a href="/" className="font-bold hover:text-neutral-700">
                      See all
                    </a>
                    <FaLongArrowAltRight />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
