import React, { ReactNode } from "react";
import style from "./style.module.css";

interface ControlProps {
  children: ReactNode;
}

const index = ({ children }: ControlProps) => {
  return (
    <main className={`${style.MainContainer} bg-green-light`}>{children}</main>
  );
};

export default index;
