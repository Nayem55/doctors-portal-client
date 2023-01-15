import React from "react";
import chair from '../../../assets/images/chair.png'


const Banner = () => {
  return (
    <div>
      <div className="banner">
        <div className="banner-text  lg:mr-16">
          <h1>A better life starts with a beautiful smile</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button className="btn btn-primary text-accent font-bold">
            GET STARTED
          </button>
        </div>
        <img src={chair} alt="" />
      </div>
    </div>
  );
};

export default Banner;
