import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  darkTheme,
  lightTheme,
  purpleTheme,
} from "./../../../redux/reducers/stylesSlice";

const Toggle = () => {
  const dispatch = useDispatch();
  const [toggleNo, setToggleNo] = useState(1);

  useEffect(() => {
    if (toggleNo == 1) {
      dispatch(darkTheme(toggleNo));
    }
    if (toggleNo == 2) {
      dispatch(lightTheme(toggleNo));
    }
    if (toggleNo == 3) {
      dispatch(purpleTheme(toggleNo));
    }
  }, [toggleNo]);

  return (
    <div className="bg-toggle_bg flex justify-center rounded-[50px] p-1">
      <input
        className={`button w-8 h-8 bg-color3 rounded-[50%] appearance-none ${
          toggleNo === 1 ? "opacity-100" : "opacity-0"
        }`}
        type="radio"
        name="toggleOne"
        id="one"
        onClick={() => setToggleNo(1)}
      />
      <input
        className={`button w-8 h-8 bg-color3 rounded-[50%] appearance-none ${
          toggleNo === 2 ? "opacity-100" : "opacity-0"
        }`}
        type="radio"
        name="toggleTwo"
        id="two"
        onClick={() => setToggleNo(2)}
      />
      <input
        className={`button w-8 h-8 bg-color3 rounded-[50%] appearance-none ${
          toggleNo === 3 ? "opacity-100" : "opacity-0"
        }`}
        type="radio"
        name="toggleThree"
        id="three"
        onClick={() => setToggleNo(3)}
      />
    </div>
  );
};

export default Toggle;
