import Header from "@/components/home-page/home-10/Header";
import Footer from "@/components/home-page/home-10/Footer";
import PrivacyPolicyPage from "@/components/privacy/PrivacyPolicyPage";

export const metadata = {
  title: "Privacy Policy - INSURVEST | How We Protect Your Data",
  description: "Read INSURVEST's Privacy Policy to understand how we collect, use, store, and protect your personal information. Learn about your rights and choices regarding your data.",
};

const Privacy = () => {
  return (
    <>
      <Header />
      <PrivacyPolicyPage />
      <Footer />
    </>
  );
};

export default Privacy;
