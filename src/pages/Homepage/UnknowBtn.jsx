
import { useEffect, useState } from "react";
import { popType } from "common/define";
import { useDispatch, useSelector } from "react-redux";
import { setPopName } from "redux/globalSlice";
import ColorGuide from "./Guide/ColorGuide";
import ButtonGuide from "./Guide/ButtonGuide"

import MainPage_01 from "./MainPage_01";

const UnknowBtn  = () => {

  const dispatch = useDispatch();
  const { popName } = useSelector(state => state.global);

  return (
    <>
      <div className="UnknowBtn">
        <div className="guide_tab">
          <ul className="layout_properties">
            <li><button onClick={ () => { dispatch(setPopName(popType.POPUP_TEST_1)); }}>색상 가이드</button></li>
            <li><button onClick={ () => { dispatch(setPopName(popType.POPUP_TEST_2)); }}>버튼 가이드</button></li>
            <li><button onClick={ () => { dispatch(setPopName(popType.POPUP_TEST_3)); }}>테스트팝업2</button></li>
            <li><button onClick={ () => { dispatch(setPopName(popType.POPUP_TEST_2)); }}>테스트팝업2</button></li>
            <li><button onClick={ () => { dispatch(setPopName(popType.POPUP_TEST_2)); }}>테스트팝업2</button></li>
            <li><button onClick={ () => { dispatch(setPopName(popType.POPUP_TEST_2)); }}>테스트팝업2</button></li>
          </ul>
        </div>
      </div>
      { popName === popType.POPUP_TEST_1 && (<ColorGuide/>)}
      { popName === popType.POPUP_TEST_2 && (<ButtonGuide/>)}


        {/* popName이 매칭되는 팝업이 표시 */}
        { popName === popType.POPUP_TEST_3 && (
      <div style={{ border: 'solid 1px green', padding: '20px' }}>
        <button style={{ border: 'solid 1px black' }} onClick={ () => dispatch(setPopName())}>닫기</button>
        <div>테스트팝업2입니다.</div>
        <div><button style={{ border: 'solid 1px black' }} onClick={ () => { dispatch(setPopName(popType.POPUP_TEST_1)); }}>테스트팝업1열기</button></div>
      </div>
    )}
    </>
  )
}

export default UnknowBtn;