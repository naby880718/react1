import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPopName } from "redux/globalSlice";
import Button from "./Button";

const ColorGuide  = ({dispatch}) => {
  const handleCopyClipBoard = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };
  return (
    <>
      {/* <button className="close" onClick={ () => dispatch(setPopName())}>X</button> */}
      <ul className="color_guide">
        <li className="color_box">
          <div className="color"><Button color="bg-main" className="" onClick={() => handleCopyClipBoard('#0090C6')} /></div>
          <ul>
            <li>main</li>
            <li>#0090C6</li>
          </ul>
        </li>
        <li className="color_box">
          <div className="color"><Button color="bg-main_dark" onClick={() => handleCopyClipBoard('#0076A2')} /></div>
          <ul>
            <li>main_dark</li>
            <li>#0076A2</li>
          </ul>
        </li>
        <li className="color_box">
          <div className="color"><Button color="bg-main_light" onClick={() => handleCopyClipBoard('#1FACE1')} /></div>
          <ul>
            <li>main_light</li>
            <li>#1FACE1</li>
          </ul>
        </li>
        <li className="color_box">
          <div className="color"><Button color="bg-main_disabled" onClick={() => handleCopyClipBoard('#0090C6')} /></div>
          <ul>
            <li>main_disabled</li>
            <li>#0090C6</li>
          </ul>
        </li>
        <li className="color_box">
          <div className="color"><Button color="bg-red_dark" onClick={() => handleCopyClipBoard('#FF5151')} /></div>
          <ul>
            <li>warning</li>
            <li>#FF5151</li>
          </ul>
        </li>
        <li className="color_box">
          <div className="color"><Button color="bg-red_dark" onClick={() => handleCopyClipBoard('#F1354F')} /></div>
          <ul>
            <li>warning_dark</li>
            <li>#F1354F</li>
          </ul>
        </li>
        <li className="color_box">
          <div className="color"><Button color="bg-red_light" onClick={() => handleCopyClipBoard('#FF7070')} /></div>
          <ul>
            <li>warning_light</li>
            <li>#FF7070</li>
          </ul>
        </li>
        <li className="color_box">
          <div className="color"><Button color="bg-red_disabled" onClick={() => handleCopyClipBoard('#FFBCBC')} /></div>
          <ul>
            <li>warning_disabled</li>
            <li>#FFBCBC</li>
          </ul>
        </li>
        <li className="color_box">
          <div className="color"><Button color="bg-green" onClick={() => handleCopyClipBoard('#0DAB66')} /></div>
          <ul>
            <li>success</li>
            <li>#0DAB66</li>
          </ul>
        </li>
      </ul>
      <ul className="color_guide">
        <li className="color_box">
          <div className="color"><Button color="bg-white" onClick={() => handleCopyClipBoard('#FFFFFF')} /></div>
          <ul>
            <li>white</li>
            <li>#FFFFFF</li>
          </ul>
        </li>
        <li className="color_box">
          <div className="color"><Button color="bg-black" onClick={() => handleCopyClipBoard('#000000')} /></div>
          <ul>
            <li>black</li>
            <li>#000000</li>
          </ul>
        </li>
        <li className="color_box">
          <div className="color"><Button color="bg-gray01" onClick={() => handleCopyClipBoard('#F6F6F6')} /></div>
          <ul>
            <li>gray01</li>
            <li>#F6F6F6</li>
          </ul>
        </li>
        <li className="color_box">
          <div className="color"><Button color="bg-gray02" onClick={() => handleCopyClipBoard('#EBEBEB')} /></div>
          <ul>
            <li>gray02</li>
            <li>#EBEBEB</li>
          </ul>
        </li>
        <li className="color_box">
          <div className="color"><Button color="bg-gray03" onClick={() => handleCopyClipBoard('#DEDEDE')} /></div>
          <ul>
            <li>gray03</li>
            <li>#DEDEDE</li>
          </ul>
        </li>
        <li className="color_box">
          <div className="color"><Button color="bg-gray04" onClick={() => handleCopyClipBoard('#C1C1C1')} /></div>
          <ul>
            <li>gray04</li>
            <li>#C1C1C1</li>
          </ul>
        </li>
        <li className="color_box">
          <div className="color"><Button color="bg-gray05" onClick={() => handleCopyClipBoard('#9E9E9E')} /></div>
          <ul>
            <li>gray05</li>
            <li>#9E9E9E</li>
          </ul>
        </li>
        <li className="color_box">
          <div className="color"><Button color="bg-gray06" onClick={() => handleCopyClipBoard('#878787')} /></div>
          <ul>
            <li>gray06</li>
            <li>#878787</li>
          </ul>
        </li>
        <li className="color_box">
          <div className="color"><Button color="bg-gray07" onClick={() => handleCopyClipBoard('#747474')} /></div>
          <ul>
            <li>gray07</li>
            <li>#747474</li>
          </ul>
        </li>
        <li className="color_box">
          <div className="color"><Button color="bg-gray08" onClick={() => handleCopyClipBoard('#646464')} /></div>
          <ul>
            <li>gray08</li>
            <li>#646464</li>
          </ul>
        </li>
        <li className="color_box">
          <div className="color"><Button color="bg-gray09" onClick={() => handleCopyClipBoard('#403F3F')} /></div>
          <ul>
            <li>gray09</li>
            <li>#403F3F</li>
          </ul>
        </li>
      </ul>
    </>
  )
}

export default ColorGuide;






