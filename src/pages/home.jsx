import Hero from "../components/hero.jsx";
import HeroFeat from "../components/heroFeat.jsx";
import ProductLists from "../components/productLists.jsx";
// import ProductOverviews from "../components/productOverviews.jsx";
import ContactForm from "../components/contactForm.jsx";
import About from "../components/about.jsx";
const Home = () => {
  return (
    <>
      <Hero>
        <HeroFeat />
      </Hero>
      <About />
      <ProductLists />
      {/* <ProductOverviews /> */}
      <ContactForm />
    </>
  );
};

export default Home;
