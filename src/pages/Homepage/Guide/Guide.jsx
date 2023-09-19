
import { Fragment, useEffect, useState } from "react";
import { popType } from "common/define";
import { useDispatch, useSelector } from "react-redux";
import { setPopName } from "redux/globalSlice";
import ColorGuide from "./ColorGuide";
import ButtonGuide from "./ButtonGuide"
import TestGuide1 from "./TestGuide1"
import TestGuide2 from "./TestGuide2"
import TestGuide3 from "./TestGuide3"
import TestGuide4 from "./TestGuide4"
import TestGuide5 from "./TestGuide5"
import TestGuide6 from "./TestGuide6"
import TestGuide7 from "./TestGuide7"

import { Link } from "react-router-dom";

// import MainPage_01 from "./MainPage_01";

const Guide  = ({menuNum}) => {

  const dispatch = useDispatch();
  const { popName } = useSelector(state => state.global);

  const [menuArr, setMenuArr] = useState([
    { id: 10, name: '색상', parentId: 0, menuId: 0, isOpen: false, content: <ColorGuide setPopName={setPopName} /> },
    { id: 20, name: '버튼', parentId: 0, menuId: 0, isOpen: false, content: <ButtonGuide setPopName={setPopName} /> },
    { id: 30, name: '테스트1', parentId: 0, menuId: 0, isOpen: false, content: <TestGuide1 setPopName={setPopName} /> },
    { id: 40, name: '테스트2', parentId: 0, menuId: 0, isOpen: false, content: <TestGuide2 setPopName={setPopName} /> },
    { id: 50, name: '테스트3', parentId: 0, menuId: 0, isOpen: false, content: <TestGuide3 setPopName={setPopName} /> },
    { id: 60, name: '테스트4', parentId: 0, menuId: 0, isOpen: false, content: <TestGuide4 setPopName={setPopName} /> },
    { id: 70, name: '테스트5', parentId: 0, menuId: 0, isOpen: false, content: <TestGuide5 setPopName={setPopName} /> },
    { id: 80, name: '테스트6', parentId: 0, menuId: 0, isOpen: false, content: <TestGuide6 setPopName={setPopName} /> },
    { id: 90, name: '테스트7', parentId: 0, menuId: 0, isOpen: false, content: <TestGuide7 setPopName={setPopName} /> },



    // { id: 30,   name: '상담사 관리',        parentId: 0, menuId: 0, isOpen: false, content: < /> },
  ])
  const [menuId, setMenuId] = useState(0);     
  const [selectedMenuId, setSelectedMenuId] = useState(0);
  const handleMenuClick = (item) => {
    // 선택한 메뉴를 오픈. 
    setMenuArr([...menuArr.map(m => m.id === item.id ? {...m, isOpen: !m.isOpen} : m)]);
    // 1개의 메뉴만 오픈하고 다른걸 닫으려면 아래
    // setMenuArr([...menuArr.map(m => m.id === item.id ? {...m, isOpen: !m.isOpen} : {...m, isOpen: false} )]);
    setMenuId(item.id);
    if(!menuArr.some(s => s.parentId === item.id)) {
      setSelectedMenuId(item.id);
    }
  }

  return (
    <>
      <div className="guide_tabs">
        { menuArr.filter(item => item.parentId === 0).map(item => (
          <Fragment key={item.id} >
          <div className={`tab ${menuId === item.id ? 'Tab-On' : ''}`} onClick={e => { handleMenuClick(item); item.content && setSelectedMenuId(item.id); }}>{item.name}</div>
          
          {/* 1차 메뉴가 열려있고 1차 메뉴를 부모로 가진 하위 메뉴가 있으면 오픈 */}
          { (item.isOpen && menuArr.some(s => s.parentId === item.id)) && (
            <div className="SubTab">
            {/* 1차메뉴를 부모로 가진 하위 메뉴 리스트 */}
            { menuArr.filter(s => s.parentId === item.id).map(sub => (
              <div key={sub.id} style={{ cursor: 'pointer' }} className={`${selectedMenuId === sub.id ? 'Tab-On' : ''}`} onClick={e => setSelectedMenuId(sub.id)}>{sub.name}</div>
            ))}
            </div>
          )}
          </Fragment>
        ))}
        </div>
        <div className="layout_con" >
          {menuArr.find(m => m.id === selectedMenuId)?.content}
        </div>
        {/* <div className="guide_tab">
          <ul className="">
            <li><button onClick={ () => { dispatch(setPopName(popType.POPUP_TEST_1)); }}>색상 가이드</button></li>
            <li><button onClick={ () => { dispatch(setPopName(popType.POPUP_TEST_2)); }}>버튼 가이드</button></li>
            <li><button onClick={ () => { dispatch(setPopName(popType.POPUP_TEST_3)); }}>테스트팝업2</button></li>
            <li><button onClick={ () => { dispatch(setPopName(popType.POPUP_TEST_2)); }}>테스트팝업2</button></li>
            <li><button onClick={ () => { dispatch(setPopName(popType.POPUP_TEST_2)); }}>테스트팝업2</button></li>
            <li><button onClick={ () => { dispatch(setPopName(popType.POPUP_TEST_2)); }}>테스트팝업2</button></li>
          </ul>
        </div> */}
      {/* </div> */}
      {/* <div>
      { popName === popType.POPUP_TEST_1 && (<ColorGuide dispatch={dispatch} setPopName={setPopName}/>)}
      { popName === popType.POPUP_TEST_2 && (<ButtonGuide dispatch={dispatch} setPopName={setPopName}/>)}


        { popName === popType.POPUP_TEST_3 && (
      <div style={{ border: 'solid 1px green', padding: '20px' }}>
        <button style={{ border: 'solid 1px black' }} onClick={ () => dispatch(setPopName())}>닫기</button>
        <div>테스트팝업2입니다.</div>
        <div><button style={{ border: 'solid 1px black' }} onClick={ () => { dispatch(setPopName(popType.POPUP_TEST_1)); }}>테스트팝업1열기</button></div>
      </div>
    )}

      </div> */}
    </>
  )
}

Guide.defaultProps = {
  id: 10,
}

export default Guide;