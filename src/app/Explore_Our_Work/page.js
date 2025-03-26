import Services from "@/components/ResultsSection";
import ReviewSection from "@/components/ReviewSection"; 
import MarqueeImages from "@/components/MarqueeImages";// ✅ Make sure this path is correct
import CaseStudies from "@/components/casestudies";
// import Ranking from "@/components/Ranking";
import Proof from "@/components/proof";

export default function ResultsPage() {
  return (
    <div>
      <Services />
      <ReviewSection /> {/* This should now display properly */}
      <MarqueeImages /> 
      <CaseStudies/>
      {/* <Ranking/> */}
      <Proof/>
    </div>
  );
}
