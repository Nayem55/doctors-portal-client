import React, { useState } from "react";
import "./Appointment.css";
import AppointmentBanner from "./AppointmentBanner";
import AvailableAppointments from "./AvailableAppointments";

const Appointment = () => {
  const [selected, setSelected] = useState(new Date);
  return (
    <div className="appointment">
      <AppointmentBanner selected={selected} setSelected={setSelected}></AppointmentBanner>
      <AvailableAppointments selected={selected}></AvailableAppointments>
    </div>
  );
};

export default Appointment;
