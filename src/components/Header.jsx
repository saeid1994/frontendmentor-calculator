import React from "react";
import Toggle from "./Buttons/Toggle";

const Header = (props) => {
  return (
    <div className="  h-20 flex flex-row   items-center  ">
      <h2
        className={`text-2xl font-bold  ${
          props.theme === "theme-dark" ? "text-white" : "text-color7"
        } w-1/2`}
      >
        calc
      </h2>
      {/* container text and toggle */}
      <div className="flex mt-3 flex-row  w-1/2 px-2 space-x-2">
        <p
          className={`text-[11px] font-bold ${
            props.theme === "theme-dark" ? "text-white" : "text-color7"
          }  flex items-center justify-center w-1/2`}
        >
          THEME
        </p>
        <Toggle />
      </div>
    </div>
  );
};

export default React.memo(Header);
