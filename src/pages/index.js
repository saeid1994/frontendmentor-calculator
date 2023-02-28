import { useSelector } from "react-redux";
import { Fragment, useState } from "react";
// import head component

import Header from "@/components/Header";
import Screen from "@/components/Screen";
import KeyPad from "@/components/KeyPad";

export default function Home() {
  const theme = useSelector((state) => state.styles.value.theme);

  return (
    <div className={` ${theme} flex justify-center bg-main_bg`}>
      <div className={`min-h-screen p-4 flex flex-col   max-w-lg `}>
        <Header theme={theme} />
        <Screen />
        <KeyPad theme={theme} />
      </div>
    </div>
  );
}
