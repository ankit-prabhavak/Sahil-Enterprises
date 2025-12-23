import React from "react";
import Button from "@mui/material/Button";
import { FaAngleUp } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";

const QtyBox = () => {
  const [qty, setQty] = React.useState(1);

  const plusQty = () => {
    setQty(qty + 1);
  };

  const minusQty = () => {
    if (qty == 1) {
      setQty(1);
    } else {
      setQty(qty - 1);
    }
  };

  return (
    <div className="qtyBox flex items-center relative">
      <input
        type="number"
        className="w-full pl-5 h-9 p-2 text-[15px] focus:outline-none border border-[rgba(0,0,0,0.2)] rounded-md"
        value={qty}
        onChange={(e) => setQty(Number(e.target.value))}
      />

      <div className="flex items-center flex-col justify-between h-9 absolute top-0 right-0 z-50 border-l border-[rgba(0,0,0,0.2)]">
        <Button
          className="min-w-6! w-6! h-[18px]! text-black! rounded-none! hover:bg-[#f1f1f1]!"
          onClick={plusQty}
        >
          <FaAngleUp className="text-[12px] opacity-55" />
        </Button>
        <Button
          className="min-w-6! w-6! h-[18px]! text-black! rounded-none! hover:bg-[#f1f1f1]!"
          onClick={minusQty}
        >
          <FaAngleDown className="text-[12px] opacity-55" />
        </Button>
      </div>
    </div>
  );
};

export default QtyBox;
