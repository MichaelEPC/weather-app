import React from "react";
import style from "./style.module.css";

function index() {
  return (
    <div
      className={`${style.loaderContainer} absolute top-32 flex items-center justify-center`}
    >
      <div className={`${style.loaderAnimation} h-52 w-52`}></div>
    </div>
  );
}

export default index;
