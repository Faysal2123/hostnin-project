import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";
import ControlPanelSection from "./page/home/ControlPanelSection";
import DomainSearchSection from "./page/home/DomainSearchSection";
import ReviewSection from "./page/home/ReviewSection";






export default function Home() {
  return (
    <div className="min-h-screen">
      
      <Navbar />
      <DomainSearchSection></DomainSearchSection>
      <ControlPanelSection></ControlPanelSection>
      <ReviewSection></ReviewSection>
      
     
      
      <Footer></Footer>
    </div>
  );
}
