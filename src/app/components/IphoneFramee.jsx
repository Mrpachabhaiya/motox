import React from "react";

const iPhoneFramee = ({ children }) => {
  return (
    <div className="w-[300px] h-[640px] bg-black rounded-[40px] border-[6px] border-[#FF4C00] shadow-2xl overflow-hidden relative">
      {/* Top notch area */}
      <div className="absolute top-0 left-0 w-full h-5 flex justify-center items-center">
        <div className="w-20 h-3 bg-black rounded-b-full"></div>
      </div>

      {/* Inner screen content */}
      <div className="w-full h-full p-4 relative z-10">{children}</div>
    </div>
  );
};

export default iPhoneFramee;
