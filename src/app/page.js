// import Image from "next/image";
import Link from "next/link";
// import styles from "./page.module.css";
import TextAnimation from "@/components/Textanimation";
import HeroSection from "@/components/HeroSection";
import WebDesign from "@/components/WebDesign";
import Animation from "@/components/Animation";
import Design from "@/components/Design";
import Feed from "@/components/Feed";
import Culture from "@/components/Culture";
// import HomeNew from "@/components/HomeNew"
export default function Home() {
  return (
    <div>
      {/* <HomeNew/> */}
      <HeroSection />
      <Animation/>
      <TextAnimation/>
      <WebDesign/>
      <Design/>
      <Feed/>
      <Culture/>
    </div>
  );
}
