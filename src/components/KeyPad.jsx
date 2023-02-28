import { useDispatch, useSelector } from "react-redux";
import SmallKey from "./Buttons/SmallKey";
import { calculate } from "./../../redux/reducers/calculatorSlice";

const KeyPad = (props) => {
  const dispatch = useDispatch();
  let number = useSelector((state) => state.calculator.value.no);

  const handleNo = (data) => {
    if (number == "0") {
      dispatch(calculate(""));
    }
    if (data == "RESET") {
      return dispatch(calculate(""));
    } else if (data == "=") {
      dispatch(calculate(eval(number)));
    } else if (data == "DEL") {
      dispatch(calculate(number.toString().slice(0, -1)));
    } else {
      return dispatch(calculate(number + data));
    }
  };

  return (
    <div className="grid grid-cols-4 p-6 bg-toggle_bg h-[26rem] mt-5 rounded-xl gap-3 ">
      <SmallKey
        className="bg-color6"
        color="bg-color5"
        textColor="text-color7"
        name="7"
        handleNumber={handleNo}
      />
      <SmallKey
        className="bg-color6"
        color="bg-color5"
        textColor="text-color7"
        handleNumber={handleNo}
        name="8"
      />
      <SmallKey
        className="bg-color6"
        color="bg-color5"
        textColor="text-color7"
        handleNumber={handleNo}
        name="9"
      />
      <SmallKey
        className="bg-color2"
        color="bg-color1"
        name="DEL"
        handleNumber={handleNo}
        textColor="text-white"
      />
      <SmallKey
        className="bg-color6"
        color="bg-color5"
        textColor="text-color7"
        handleNumber={handleNo}
        name="4"
      />
      <SmallKey
        className="bg-color6"
        color="bg-color5"
        textColor="text-color7"
        handleNumber={handleNo}
        name="5"
      />
      <SmallKey
        className="bg-color6"
        color="bg-color5"
        textColor="text-color7"
        handleNumber={handleNo}
        name="6"
      />
      <SmallKey
        className="bg-color6"
        color="bg-color5"
        textColor="text-color7"
        handleNumber={handleNo}
        name="+"
      />
      <SmallKey
        className="bg-color6"
        color="bg-color5"
        textColor="text-color7"
        handleNumber={handleNo}
        name="1"
      />
      <SmallKey
        className="bg-color6"
        color="bg-color5"
        textColor="text-color7"
        handleNumber={handleNo}
        name="2"
      />
      <SmallKey
        className="bg-color6"
        color="bg-color5"
        textColor="text-color7"
        handleNumber={handleNo}
        name="3"
      />
      <SmallKey
        className="bg-color6"
        color="bg-color5"
        textColor="text-color7"
        handleNumber={handleNo}
        name="-"
      />
      <SmallKey
        className="bg-color6"
        color="bg-color5"
        textColor="text-color7"
        handleNumber={handleNo}
        name="."
      />
      <SmallKey
        className="bg-color6"
        color="bg-color5"
        textColor="text-color7"
        handleNumber={handleNo}
        name="0"
      />
      <SmallKey
        className="bg-color6"
        color="bg-color5"
        textColor="text-color7"
        handleNumber={handleNo}
        name="/"
      />
      <SmallKey
        className="bg-color6"
        color="bg-color5"
        textColor="text-color7"
        handleNumber={handleNo}
        name="*"
      />
      <SmallKey
        className="col-span-2 bg-color2 "
        color="bg-color1"
        textColor="text-white"
        name="RESET"
        handleNumber={handleNo}
      />
      <SmallKey
        className="col-span-2 bg-color4 text-white"
        color="bg-color3"
        textColor={`${
          props.theme == "theme-purple" ? "text-black" : "text-white"
        }`}
        name="="
        handleNumber={handleNo}
      />
    </div>
  );
};

export default KeyPad;
