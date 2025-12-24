import React from "react";

const Progress = (props) => {
  return (
    <div className="w-25 h-auto overflow-hidden rounded-md bg-[#f1f1f1]">
      <span
        className={`flex items-center w-[${props.value}%] h-2 ${
          props.type === "success" && "bg-[#10b981]"
        } ${props.type === "error" && "bg-[#f04d4f]"} ${
          props.type === "warning" && "bg-amber-300"
        }`}
      ></span>
    </div>
  );
};

export default Progress;
