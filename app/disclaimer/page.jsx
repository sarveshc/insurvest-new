import Header from "@/components/home-page/home-10/Header";
import Footer from "@/components/home-page/home-10/Footer";
import DisclaimerPage from "@/components/disclaimer/DisclaimerPage";

export const metadata = {
  title: "Disclaimer - INSURVEST | Legal Information",
  description: "Read the disclaimer for INSURVEST website. Important information regarding the use of our website and services, policy purchases, and limitations of liability.",
};

const Disclaimer = () => {
  return (
    <>
      <Header />
      <DisclaimerPage />
      <Footer />
    </>
  );
};

export default Disclaimer;
