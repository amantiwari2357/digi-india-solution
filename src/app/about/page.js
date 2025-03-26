// import About from "@/components/ContactForm";
// import ProudClients from "@/components/ProudClients";
// import ServicesOffer from "@/components/ServiceOffer";
// import ThreeDServices from "@/components/ThreeD_Services";
import AboutOne from "@/components/AboutOne";
import AboutTwo from "@/components/AboutTwo";
import AboutThree from "@/components/AboutThree";
import Design from "@/components/Design";
import AboutFour from "@/components/AboutFour";
import AboutFive from "@/components/AboutFive";
import Ranking from "@/components/Ranking";
export default function ResultsPage() {
  return (
    <div>
      <AboutOne/>
      <AboutThree/>
      <Design/>
      <AboutTwo/>
      <AboutFour/>
      <Ranking/>
      <AboutFive/>
     {/* <About/> */}
     {/* <ProudClients/> */}
     {/* <ThreeDServices/> */}
     {/* <ServicesOffer/> */}
    </div>
  );
}
