import React from "react";
import { Carousel } from "flowbite-react";
import banner from "../../assets/Banner.png";
import { Button } from "../ui/button";

const Home = () => {
  return (
    <>
      <div className="bg-neutralSilver dark:bg-background">
        <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
          <Carousel
            className="w-full mx-auto"
            indicators={false}
            slideInterval={3000}
            leftControl=" "
            rightControl=" "
          >
            {/* Slide 1 */}
            <div className="my-12 py-8 flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-12">
              <div className="flex-shrink-0">
                <img
                  className="h-48 md:h-64 lg:h-96"
                  src={banner}
                  alt="banner"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-2xl md:text-4xl font-semibold text-neutralDGrey mb-4">
                  Transform Your Business{" "}
                  <span className="text-BrandPrimary dark:text-white">
                    with Innovative Solutions
                  </span>{" "}
                </h1>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
                  Unlock your business's potential with our tailored solutions
                  designed to drive growth and efficiency. Our expert team
                  leverages cutting-edge technology and industry best practices
                  to deliver results that exceed expectations.
                </p>
                <Button
                  variant="default"
                  size="lg"
                  className="dark:bg-white dark:hover:bg-white/90"
                >
                  Get Started
                </Button>
              </div>
            </div>

            {/* Slide 2 */}
            <div className="my-12 py-8 flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-12">
              <div className="flex-shrink-0">
                <img
                  className="h-48 md:h-64 lg:h-96"
                  src={banner}
                  alt="banner"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-2xl md:text-4xl font-semibold text-neutralDGrey mb-4">
                  Revolutionize Your Workflow{" "}
                  <span className="text-BrandPrimary dark:text-white">
                    with Advanced Technologies
                  </span>{" "}
                </h1>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
                  Streamline your operations with our cutting-edge technologies
                  that enhance productivity and efficiency. Our solutions are
                  designed to simplify complex processes and drive innovation.
                </p>
                <Button
                  variant="default"
                  size="lg"
                  className="dark:bg-white dark:hover:bg-white/90"
                >
                  Learn More
                </Button>
              </div>
            </div>

            {/* Slide 3 */}
            <div className="my-12 py-8 flex flex-col md:flex-row-reverse items-center justify-center gap-8 md:gap-12">
              <div className="flex-shrink-0">
                <img
                  className="h-48 md:h-64 lg:h-96"
                  src={banner}
                  alt="banner"
                />
              </div>
              <div className="text-center md:text-left">
                <h1 className="text-2xl md:text-4xl font-semibold text-neutralDGrey mb-4">
                  Elevate Your Brand{" "}
                  <span className="text-BrandPrimary dark:text-white">
                    with Our Strategic Insights
                  </span>{" "}
                </h1>
                <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 mb-4">
                  Discover new ways to enhance your brand’s visibility and
                  impact. Our team provides strategic insights and creative
                  solutions to help you stand out in a competitive market.
                </p>
                <Button
                  variant="default"
                  size="lg"
                  className="dark:bg-white dark:hover:bg-white/90"
                >
                  Contact Us
                </Button>
              </div>
            </div>
          </Carousel>
        </div>
      </div>
    </>
  );
};

export default Home;
