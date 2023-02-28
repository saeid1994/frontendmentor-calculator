import { useSelector } from "react-redux";
import { Fragment, useState } from "react";
// import head component

import Header from "@/components/Header";
import Screen from "@/components/Screen";
import KeyPad from "@/components/KeyPad";

export default function Home() {
  const theme = useSelector((state) => state.styles.value.theme);

  return (
    <Fragment>
      <div
        className={`sm:w-full min-h-screen p-4 flex flex-col ${theme} bg-main_bg`}
      >
        <Header theme={theme} />
        <Screen />
        <KeyPad theme={theme} />
      </div>
    </Fragment>
  );
}
