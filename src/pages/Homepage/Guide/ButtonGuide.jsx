import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPopName } from "redux/globalSlice";
import Button from "./Button";

const ButtonGuide  = ({dispatch}) => {

  const [disabled, isdisabled] = useState();   

  return (
    <>
      {/* <button className="close" onClick={ () => dispatch(setPopName())}>X</button> */}
      <div className="button_guide">
        <h2>Button</h2>
          <div className="button_table">
            <ul>
              <li>Solid</li>
              <li> 
                <p>Nomal</p>
                <Button color="bg-main">button</Button>
              </li>
              <li>         
                <p>Hover</p>
                <Button color="bg-main_dark">button</Button>
              </li>
              <li>         
                <p>Active</p>
                <Button color="bg-main_light">button</Button>
              </li>
              <li>         
                <p>Disabled</p>
                <Button color="bg-main" disabled="" >button</Button>
              </li>
            </ul>
            <ul>
              <li>Warning</li>
              <li> 
                <p>Nomal</p>
                <Button color="bg-red_dark">button</Button>
              </li>
              <li>         
                <p>Hover</p>
                <Button color="bg-red_dark">button</Button>
              </li>
              <li>         
                <p>Active</p>
                <Button color="bg-red_light">button</Button>
              </li>
              <li>         
                <p>Disabled</p>
                <Button color="bg-red_disabled">button</Button>
              </li>
            </ul>
            <ul>
              <li>Line</li>
              <li> 
                <p>Nomal</p>
                <Button color="white">button</Button>
              </li>
              <li>         
                <p>Hover</p>
                <Button color="gray01">button</Button>
              </li>
              <li>         
                <p>Active</p>
                <Button color="gray02" disabled={true}>button</Button>
              </li>
              <li>         
                <p>Disabled</p>
                <Button color="white-disabled">button</Button>
              </li>
            </ul>
            <ul>
              <li>Size</li>
              <li>    
                <p>Small</p>
                <Button size="small" color="bg-main">button</Button>
              </li>
              <li>     
                <p>Medium</p>
                <Button color="bg-main">button</Button>
              </li>
              <li>     
                <p>Large</p>
                <Button size="large" color="bg-main" disabled>button</Button>
              </li>
            </ul>
            <ul>
              <li>fullWidth</li>
            </ul>
            <Button fullWidth="full" size="large" color="bg-main">button</Button>
          </div>
      </div>
    </>


  )
}

export default ButtonGuide;






