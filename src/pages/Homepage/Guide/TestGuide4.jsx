import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPopName } from "redux/globalSlice";
import Button from "./Button";

const TestGuide4  = ({dispatch}) => {
  return (
    <>
      <div className="toggle_con">
        <div class="toggle-wrapper">
          <div class="toggle normal">
            <input id="normal" type="checkbox"/>
            <label class="toggle-item" for="normal"></label>
          </div>
          <div class="name">Normal</div>
        </div>
        <div class="toggle-wrapper">
          <div class="toggle transparent">
            <input id="transparent" type="checkbox"/>
            <label class="toggle-item" for="transparent"></label>
          </div>
          <div class="name">Transparent</div>
        </div>
        <div class="toggle-wrapper">
          <div class="toggle checkcross">
            <input id="checkcross" type="checkbox"/>
            <label class="toggle-item" for="checkcross">
              <div class="check"></div>
            </label>
          </div>
          <div class="name">Yes & No</div>
        </div>
        <div class="toggle-wrapper">
          <div class="toggle">
            <input id="gravity" type="checkbox"/>
            <label class="toggle-item" for="gravity"></label>
          </div>
          <div class="name">Gravity</div>
        </div>
        <div class="toggle-wrapper">
          <div class="toggle pancake-stack">
            <input id="pancake" type="checkbox"/>
            <label class="toggle-item" for="pancake">
              <div class="pancakes">
                <div class="pancake"></div>
                <div class="pancake"></div>
                <div class="pancake"></div>
                <div class="butter"></div>
              </div>
            </label>
          </div>
          <div class="name">Pancake Stacks</div>
        </div>
        <div class="toggle-wrapper">
          <div class="toggle dog-rollover">
            <input id="doggo" type="checkbox"/>
            <label class="toggle-item" for="doggo">
              <div class="dog">
                <div class="ear"></div>
                <div class="ear right"></div>
                <div class="face">
                  <div class="eyes"></div>
                  <div class="mouth"></div>
                </div>
              </div>
            </label>
          </div>
          <div class="name">Doggo Wants a Treat</div>
        </div>
        <div class="toggle-wrapper">
          <div class="toggle basketball-hoop">
            <input id="hoop" type="checkbox"/>
            <label class="toggle-item" for="hoop">
              <div class="ball__wrapper">
                <div class="ball"></div>
              </div>
              <div class="hoop"></div>
            </label>
          </div>
          <div class="name">Kobe Bryant Tribute</div>
        </div>
        <div class="toggle-wrapper">
          <div class="toggle beer-pong">
            <input id="beer-pong" type="checkbox"/>
            <label class="toggle-item" for="beer-pong"></label>
            <div class="cup">
              <div class="lid"></div>
            </div>
          </div>
          <div class="name">Beer Pong</div>
        </div>
      </div>
    </>
  )
}

export default TestGuide4;






