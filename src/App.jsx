import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./components/my_component/Navbar";
import { Element } from "react-scroll";
import Home from "./components/my_component/Home";
import Services from "./components/my_component/Services";
import About from "./components/my_component/About";
import Products from "./components/my_component/Product";
import Blog from "./components/my_component/Blog";
import Newsletter from "./components/my_component/Newsletter";
import Fotter from "./components/my_component/Fotter";
import "./App.css";

import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AnimatedCursor
        innerSize={10}
        outerSize={10}
        innerScale={2.5}
        outerScale={10}
        color="14, 83, 173"
      />
      <div>
        <Navbar />
        <Element name="home">
          <Home />
        </Element>
        <Element name="services">
          <Services />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="products">
          <Products />
        </Element>
        <Element name="testimonials">
          <Blog />
        </Element>
        <Element name="faq">
          <Newsletter />
        </Element>
        <Fotter />
      </div>
    </ThemeProvider>
  );
}

export default App;
