import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPopName } from "redux/globalSlice";
import Button from "./Button";

const TestGuide7  = ({item}) => {
  const arr = [
    { id: 1, name: "1번입니다." },
    { id: 2, name: "2번입니다." },
    { id: 3, name: "3번입니다." },
  ];
  const [pick, setPick] = useState(arr);
  const [select, setSelect] = useState([]);
  return (
    <>
    <div className="modal_con">
      dddddddddddd
      <div className="buttons button_container" key={item.id}>
        <p>id:{item.id}</p>
        <div
          onClick={() => {
            !select.includes(item)
              ? setSelect((select) => [...select, item])
              : setSelect(select.filter((button) => button !== item));
          }}
          className={
            select.includes(item) ? "button " : "button {item.id}"
          }
        >
          선택 {item.name}
        </div>
      </div>
    </div>
    </>


  )
}

export default TestGuide7;






