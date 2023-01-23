import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./service";

const AvailableAppointments = ({ selected }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("http://localhost:5000/appointments")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="mx-8 md:mx-16 lg:mx:16">
      <p className="text-center text-primary text-xl mx-8 font-bold">
        Available Appointments on {format(selected, "PP")}
      </p>
      <p className="text-center text-secondary opacity-60 mb-8 lg:mb-16">
        Please select a service
      </p>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mb-32">
        {services.map((service) => (
          <Service
            key={service._id}
            service={service}
            setTreatment={setTreatment}
          ></Service>
        ))}
      </div>
      {treatment && (
        <BookingModal treatment={treatment} setTreatment={setTreatment} selected={selected}></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointments;
