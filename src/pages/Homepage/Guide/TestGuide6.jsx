import { useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPopName } from "redux/globalSlice";
import Button from "./Button";

const TestGuide6  = ({dispatch}) => {
  return (
    <>
      <div className="toggle_con2">
        <div id="app-cover">
          <div class="row">
            <div class="toggle-button-cover">
              <div class="button-cover">
                <div class="button r" id="button-1">
                  <input type="checkbox" class="checkbox" />
                  <div class="knobs"></div>
                  <div class="layer"></div>
                </div>
              </div>
            </div>
            <div class="toggle-button-cover">
              <div class="button-cover">
                <div class="button r" id="button-2">
                  <input type="checkbox" class="checkbox" />
                  <div class="knobs"></div>
                  <div class="layer"></div>
                </div>
              </div>
            </div>
            <div class="toggle-button-cover">
              <div class="button-cover">
                <div class="button r" id="button-3">
                  <input type="checkbox" class="checkbox" />
                  <div class="knobs"></div>
                  <div class="layer"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="toggle-button-cover">
              <div class="button-cover">
                <div class="button r" id="button-4">
                  <input type="checkbox" class="checkbox" />
                  <div class="knobs"></div>
                  <div class="layer"></div>
                </div>
              </div>
            </div>
            <div class="toggle-button-cover">
              <div class="button-cover">
                <div class="button r" id="button-5">
                  <input type="checkbox" class="checkbox" />
                  <div class="knobs"><span></span></div>
                  <div class="layer"></div>
                </div>
              </div>
            </div>
            <div class="toggle-button-cover">
              <div class="button-cover">
                <div class="button r" id="button-6">
                  <input type="checkbox" class="checkbox" />
                  <div class="knobs"></div>
                  <div class="layer"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="toggle-button-cover">
              <div class="button-cover">
                <div class="button r" id="button-7">
                  <input type="checkbox" class="checkbox" />
                  <div class="knobs">
                    <span></span>
                  </div>
                  <div class="layer"></div>
                </div>
              </div>
            </div>
            <div class="toggle-button-cover">
              <div class="button-cover">
                <div class="button r" id="button-8">
                  <input type="checkbox" class="checkbox" />
                  <div class="knobs">
                    <span></span>
                  </div>
                  <div class="layer"></div>
                </div>
              </div>
            </div>
            <div class="toggle-button-cover">
              <div class="button-cover">
                <div class="button r" id="button-9">
                  <input type="checkbox" class="checkbox" />
                  <div class="knobs">
                    <span></span>
                  </div>
                  <div class="layer"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="toggle-button-cover">
              <div class="button-cover">
                <div class="button b2" id="button-10">
                  <input type="checkbox" class="checkbox" />
                  <div class="knobs">
                    <span>YES</span>
                  </div>
                  <div class="layer"></div>
                </div>
              </div>
            </div>
            <div class="toggle-button-cover">
              <div class="button-cover">
                <div class="button b2" id="button-11">
                  <input type="checkbox" class="checkbox" />
                  <div class="knobs">
                    <span></span>
                  </div>
                  <div class="layer"></div>
                </div>
              </div>
            </div>
            <div class="toggle-button-cover">
              <div class="button-cover">
                <div class="button b2" id="button-12">
                  <input type="checkbox" class="checkbox" />
                  <div class="knobs">
                    <span></span>
                  </div>
                  <div class="layer"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="toggle-button-cover">
              <div class="button-cover">
                <div class="button b2" id="button-13">
                  <input type="checkbox" class="checkbox" />
                  <div class="knobs">
                    <span></span>
                  </div>
                  <div class="layer"></div>
                </div>
              </div>
            </div>
            <div class="toggle-button-cover">
              <div class="button-cover">
                <div class="button b2" id="button-14">
                  <input type="checkbox" class="checkbox" />
                  <div class="knobs">
                    <span></span>
                  </div>
                  <div class="layer"></div>
                </div>
              </div>
            </div>
            <div class="toggle-button-cover">
              <div class="button-cover">
                <div class="button b2" id="button-15">
                  <input type="checkbox" class="checkbox" />
                  <div class="knobs"></div>
                  <div class="layer"></div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="toggle-button-cover">
              <div class="button-cover">
                <div class="button b2" id="button-16">
                  <input type="checkbox" class="checkbox" />
                  <div class="knobs"></div>
                  <div class="layer"></div>
                </div>
              </div>
            </div>
            <div class="toggle-button-cover">
              <div class="button-cover">
                <div class="button b2" id="button-17">
                  <input type="checkbox" class="checkbox" />
                  <div class="knobs">
                    <span></span>
                  </div>
                  <div class="layer"></div>
                </div>
              </div>
            </div>
            <div class="toggle-button-cover">
              <div class="button-cover">
                <div class="button b2" id="button-18">
                  <input type="checkbox" class="checkbox" />
                  <div class="knobs">
                    <span></span>
                  </div>
                  <div class="layer"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TestGuide6;






