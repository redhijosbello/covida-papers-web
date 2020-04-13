import {PaperSource} from "../enums/PaperSource";
import React from "react";

export default function PaperSourceOptions() {
  return <>{
    Object.keys(PaperSource).filter(k => typeof PaperSource[k as any] === "number").map((key, idx) => {
      return <option value={PaperSource[key as any]} key={idx}>{key}</option>
    })
  }</>;
}
