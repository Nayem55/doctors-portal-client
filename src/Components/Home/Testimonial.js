import React from "react";
import PatientReview from "./PatientReview";

const Testimonial = ({dark}) => {
  return (
    <div className="testimonial mt-20">
      <h2 className="text-center text-primary font-bold text-xl lg:text-2xl uppercase">
        Testimonial
      </h2>
      <p className={`text-center text-2xl lg:text-4xl ${dark? "text-accent" : "text-secondary" } `}>
        What Our Patients Says
      </p>
      <PatientReview></PatientReview>
    </div>
  );
};

export default Testimonial;
