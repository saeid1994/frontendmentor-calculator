import { useSelector } from "react-redux";

const Screen = () => {
  const theme = useSelector((state) => state.styles.value.theme);
  const number = useSelector((state) => state.calculator.value.no);

  return (
    <div className="bg-screen_bg py-3 rounded-xl h-27 mt-4 flex justify-center items-center px-3">
      <input
        type="text"
        name="calc"
        value={number || 0}
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
