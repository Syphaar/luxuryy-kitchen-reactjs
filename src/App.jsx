import { useRef } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import About from "./Components/About";
import Approach from "./Components/Approach";
import Chooseus from "./Components/Chooseus";
import Collection from "./Components/Collection";
import Customers from "./Components/Customers";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import News from "./Components/News";
import Promo from "./Components/Promo";
import Sectionone from "./Components/Sectionone";
import ScrollToTop from "react-scroll-to-top";
import { useEffect, useState } from "react";


function App() {
  const [activeSection, setActiveSection] = useState(""); // Track active section

  useEffect(() => {
    Aos.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-size",
      delay: 800,
    });
    Aos.refresh();
  }, []);

  // Section references
  const sectiononeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const projectsRef = useRef(null);
  const blogsRef = useRef(null);
  const contactRef = useRef(null);

  // Scroll function
  const scrollToSection = (section) => {
    if (section === "homeRef") {
        window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
        const targetRef = { sectiononeRef, aboutRef, servicesRef, projectsRef, blogsRef, contactRef }[section];
        targetRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  //  Track the active section using Intersection Observer (for the active navbar buttons)
  useEffect(() => {
    const observerOptions = { 
      root: null, //  Uses the viewport
      threshold: 0.22, // % of the section that is visible
      rootMargin: "-10% 0px -15% 0px", // Adjust detection timingx`
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id); // Set active section ID
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    [sectiononeRef, aboutRef, servicesRef, projectsRef, blogsRef, contactRef].forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => {
      [sectiononeRef, aboutRef, servicesRef, projectsRef, blogsRef, contactRef].forEach((ref) => {
        if (ref.current) observer.unobserve(ref.current);
      });
    };
  }, []);   

  return (
    <>
      {/* Each section of the page */}
      <Navbar scrollToSection={scrollToSection} activeSection={activeSection} />
      <Sectionone sectiononeRef={sectiononeRef} id="sectionone" />
      <About aboutRef={aboutRef} id="about" />
      <Collection />
      <Chooseus servicesRef={servicesRef} id="services" />
      <Promo projectsRef={projectsRef} id="projects" />
      <Customers />
      <Approach />
      <News blogsRef={blogsRef} id="blogs" />
      <Footer contactRef={contactRef} id="contact" />
      <ScrollToTop smooth top="120" width="39" height="20" color="black" />
    </>
  )
}

export default App
