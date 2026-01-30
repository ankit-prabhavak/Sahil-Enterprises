import React from "react";
import { IoMdImages } from "react-icons/io";

const UploadBox = (props) => {
  return (
    <div className="uploadBox relative p-3 rounded-md overflow-hidden border border-dashed border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200 flex items-center justify-center flex-col">
        <IoMdImages className="text-[40px] opacity-35 pointer-events-none" />
        <h4 className="text-[14px] opacity-35 pointer-events-none">Upload Image</h4>

        <input type="file" multiple={props.multiple !== undefined ? props.multiple : false} className="absolute inset-0 z-50 opacity-0 cursor-pointer" />
    </div>
  );
};

export default UploadBox;
