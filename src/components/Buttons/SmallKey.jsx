import { useEffect, useState } from "react";

const SmallKey = (props) => {
  const [textColor, setTextColor] = useState("text-color10");
  const [fontSize, setFontSize] = useState("text-3xl");

  const handleBigKeys = () => {
    if (props.name === "RESET") {
      setTextColor("text-white");
      setFontSize("text-[19px]");
    }
    if (props.name === "=") {
      setTextColor("text-white");
      setFontSize("text-[19px]");
    }
    if (props.name === "DEL") {
      setTextColor("text-white");
      setFontSize("text-[19px]");
    }
  };

  useEffect(() => {
    handleBigKeys();
  }, []);

  return (
    <div className={`rounded-lg ${props.className} duration-150 group`}>
      <div
        onClick={() => props.handleNumber(props.name)}
        className={`h-[60px] duration-150 ${props.color} rounded-lg  group-hover:bg-white flex justify-center relative `}
      >
        <p
          className={`${props.textColor} ${fontSize} font-custom absolute top-1/2 -translate-y-[43%] `}
        >
          {props.name}
        </p>
      </div>
    </div>
  );
};

export default SmallKey;
