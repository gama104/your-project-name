import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="fixed z-50 top-0 left-0 h-full w-full bg-black bg-opacity-30 flex items-center justify-center">
        <span className="loader"></span>
      </div>
    </div>
  );
};

export default Loading;
