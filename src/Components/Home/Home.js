import React from "react";
import Banner from "./Banner/Banner";
import "./Home.css";
import Info from "./Info/Info";
import Services from "./Services/Services";
import HomeAppointment from "./HomeAppointment";
import Testimonial from "./Testimonial";
import HomeContact from "./HomeContact";
import HomeTreatmentSection from "./HomeTreatmentSection";
const Home = ({dark}) => {
  return (
    <div className="home">
      <Banner dark={dark}></Banner>
      <Info></Info>
      <Services dark={dark}></Services>
      <HomeTreatmentSection dark={dark}></HomeTreatmentSection>
      <HomeAppointment></HomeAppointment>
      <Testimonial dark={dark}></Testimonial>
      <HomeContact></HomeContact>
    </div>
  );
};
export default Home;
