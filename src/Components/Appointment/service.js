import React from "react";

const service = ({ service ,setTreatment }) => {
  const { name, slots } = service;
  return (
      <div className="card shadow-xl">
        <div className="card-body flex-coloum items-center">
          <h2 className="card-title text-primary">{name}</h2>
          <p className="text-secondary">{ slots.length>0 ? slots[0] : "Please try another day"}</p>
          <p className="text-secondary">{slots.length>1? `${slots.length} spaces available`:slots.length===1?"1 space available":"No space available"}</p>
          <div className="card-actions">
            <label onClick={()=>setTreatment(service)} htmlFor="booking-modal" className="btn btn-primary text-white">Make Appointment</label>
          </div>
        </div>
      </div>
  );
};

export default service;
