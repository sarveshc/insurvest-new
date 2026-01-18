import Header from "@/components/home-page/home-10/Header";
import Footer from "@/components/home-page/home-10/Footer";
import AboutUsExtendedBootstrap from "@/components/about/AboutUsExtendedBootstrap";

export const metadata = {
  title: "About Us - INSURVEST | Your Trusted Financial Advisory Platform",
  description: "Learn about INSURVEST - A trusted financial advisory platform helping individuals and businesses make confident decisions across insurance, investments, and retirement planning.",
};

const AboutPage = () => {
  return (
    <>
      <Header />
      <AboutUsExtendedBootstrap />
      <Footer />
    </>
  );
};

export default AboutPage;