import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Blog() {
  const blog = [
    {
      _id: 1,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      _id: 2,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      _id: 3,
      title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-12">
      <div className="text-center md:w-1/2 mx-auto mb-12">
        <h2 className="text-4xl font-semibold text-neutralDGrey mb-4">
          Our Latest Blog
        </h2>
        <p className="text-neutralGrey text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          natus cumque doloremque. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Officiis natus cumque doloremque.
        </p>
      </div>

      {/* All Blog */}
      <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8">
        {blog.map((item) => (
          <BlogCard key={item._id} image={item.image} title={item.title} />
        ))}
      </div>
    </div>
  );
}

function BlogCard({ image, title }) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className="relative group"
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
      transition={{ duration: 0.5 }}
    >
      <img
        src={image}
        className="w-full h-64 object-cover rounded-lg"
        alt="blog"
      />
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-25 transition-opacity rounded-lg"></div>
      <div className="text-center w-3/4 px-4 py-6 bg-white rounded-md absolute -bottom-12 left-1/2 transform -translate-x-1/2 shadow-lg transition-transform group-hover:translate-y-4">
        <h1 className="mb-3 text-neutralDGrey font-semibold">{title}</h1>
        <div className="flex items-center justify-center gap-2">
          <a href="/" className="font-bold hover:text-neutral-700">
            See all
          </a>
          <FaLongArrowAltRight />
        </div>
      </div>
    </motion.div>
  );
}

export default Blog;
