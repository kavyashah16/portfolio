import React from "react";
import bannerImg from "../../assets/bannerImg.png";

const RightBanner = () => {
  return (
    <div className="w-1/2 flex justify-center items-center relative">
      <img
        className="w-[500px] h-[680px] z-10"
        src={bannerImg}
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-[500px] h-[500px] shadow-shadowOne bg-gradient-to-r from-[#1e2024] to-[#202327] flex justify-center items-center"></div>
    </div>
  );
};

export default RightBanner;
