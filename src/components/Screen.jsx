import { useState } from "react";
import { useSelector } from "react-redux";
import { threeDigits } from "../../Helper/index";
const Screen = () => {
  const [input, setInput] = useState("4454542");
  const theme = useSelector((state) => state.styles.value.theme);
  const number = useSelector((state) => state.calculator.value.no);

  // console.log(handleChange());
  return (
    <div className="bg-screen_bg py-3 rounded-xl h-27 mt-4 flex justify-center items-center px-3">
      <input
        type="text"
        name="calc"
        value={number || 0}
        // onChange={handleChange}
        className={`p-4 w-full bg-screen_bg ${
          theme == "theme-dark" ? "text-white" : "text-color7"
        } font-bold outline-0 text-4xl font-custom`}
        disabled
        readOnly
        dir="rtl"
      ></input>
    </div>
  );
};

export default Screen;
