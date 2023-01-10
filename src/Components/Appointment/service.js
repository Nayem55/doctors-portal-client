import React from "react";

const service = ({ service }) => {
  const { name, slots } = service;
  return (
      <div class="card shadow-xl">
        <div class="card-body flex-coloum items-center">
          <h2 class="card-title text-primary">{name}</h2>
          <p className="text-secondary">{ slots.length>0 ? slots[0] : "Please try another day"}</p>
          <p className="text-secondary">{slots.length>1? `${slots.length} spaces available`:slots.length===1?"1 space available":"No space available"}</p>
          <div class="card-actions">
            <button class="btn btn-primary text-white w-60 mt-6 ">Make Appointment</button>
          </div>
        </div>
      </div>
  );
};

export default service;
