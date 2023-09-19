import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPopName } from "redux/globalSlice";
import Button from "./Button";

const TestGuide1  = ({dispatch}) => {

  const [disabled, isdisabled] = useState();   
  const indicator = document.querySelector('.nav-indicator');
  const items = document.querySelectorAll('.nav-item');
  function handleIndicator(el) {
    items.forEach(item => {
      item.classList.remove('is-active');
      item.removeAttribute('style');
    });
    
    indicator.style.width = `${el.offsetWidth}px`;
    indicator.style.left = `${el.offsetLeft}px`;
    indicator.style.backgroundColor = el.getAttribute('active-color');

    el.classNameList.add('is-active');
    el.style.color = el.getAttribute('active-color');
  }
  items.forEach((item, index) => {
    item.addEventListener('click', (e) => { handleIndicator(e.target)});
    item.classNameList.contains('is-active') && handleIndicator(item);
  });

  return (
    <>
      <nav className="nav">
        <a href="#" className="nav-item is-active" active-color="orange">Home</a>
        <a href="#" className="nav-item" active-color="orange">실패</a>
        <a href="#" className="nav-item" active-color="green">About</a>
        <a href="#" className="nav-item" active-color="blue">Testimonials</a>
        <a href="#" className="nav-item" active-color="red">Blog</a>
        <a href="#" className="nav-item" active-color="rebeccapurple">Contact</a>
        {/* <span class="nav-indicator"></span> */}
      </nav>
    </>


  )
}

export default TestGuide1;






