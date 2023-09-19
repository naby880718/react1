import { Fragment, useEffect, useState } from "react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPopName } from "redux/globalSlice";
import Button from "./Button";

const TestGuide5  = ({dispatch}) => {
  // const [modal, setmodal] = useState(0);
  // const [ModalOn, setModalOn] = useState(false); 

  // const onOpenModal = () => {
  //     setModalOn(!ModalOn);
  // }
  
  // const [ModalArr, setModalArr]= useState([
    const [menuId, setMenuId] = useState(0);  
    const [selectedMenuId, setSelectedMenuId] = useState(0);
    const [menuArr, setMenuArr] = useState([
    { id: 10, parentId: 0, modal: 0, isOpen: false },
    { id: 20, parentId: 0, modal: 0, isOpen: false },
    { id: 30, parentId: 0, modal: 0, isOpen: false },
    { id: 40, parentId: 0, modal: 0, isOpen: false },
    { id: 50, parentId: 0, modal: 0, isOpen: false },
    { id: 60, parentId: 0, modal: 0, isOpen: false },
    { id: 70, parentId: 0, modal: 0, isOpen: false },
  ])
  const handleMenuClick = (item) => {
    // 선택한 메뉴를 오픈. 
    // setMenuArr([...menuArr.map(m => m.id === item.id ? {...m, isOpen: !m.isOpen} : m)]);
    // 1개의 메뉴만 오픈하고 다른걸 닫으려면 아래
    setMenuArr([...menuArr.map(m => m.id === item.id ? {...m, isOpen: !m.isOpen} : {...m, isOpen: false} )]);
    // setMenuId(item.id);
    // if(!menuArr.some(s => s.parentId === item.id)) {
    //   setSelectedMenuId(item.id);
    // }
  }
      // const Modal = () => {
      //         return (
      //           <div className="modal-container">
      //           <div className="modal-background">
      //             <div className="modal">
      //               <h2>I'm a Modal</h2>
      //               <p>Hear me roar.</p>
      //               <svg className="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
      //                 <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3" />
      //               </svg>
      //             </div>
      //           </div>
      //         </div>
      //         );
      //     };

  return (
    <>
      <div className="modal_con">
        <div className="content">
          <h1>Modal Animations</h1>
          <div className="buttons">
          { menuArr.filter(item => item.parentId === 0).map(item => (
            
            <Fragment key={item.id} >
              <div className={`button ${menuId === item.id ? 'Tab-On' : ''}`} onClick={e => { handleMenuClick(item);  }}>{item.name}</div>
            </Fragment>
          ))}
            {/* <div id="10" className="button one" onClick={onOpenModal} >Unfolding</div>
            <div id="20" className="button two" onClick={ () => { setModalOn(!ModalOn); }}>Revealing</div>
            <div id="30" className="button three" onClick={ () => { setModalOn(!ModalOn); }}>Uncovering</div>
            <div id="40" className="button four" onClick={ () => { setModalOn(!ModalOn); }}>Blow Up</div><br/>
            <div id="50" className="button five" onClick={ () => { setModalOn(!ModalOn); }}>Meep Meep</div>
            <div id="60" className="button six" onClick={ () => { setModalOn(!ModalOn); }}>Sketch</div>
            <div id="70" className="button seven" onClick={ () => { setModalOn(!ModalOn); }}>Bond</div> */}

{/* <div class="buttons">
    <div id="one" class="button">Unfolding</div>
    <div id="two" class="button">Revealing</div>
    <div id="three" class="button">Uncovering</div>
    <div id="four" class="button">Blow Up</div><br>
    <div id="five" class="button">Meep Meep</div>
    <div id="six" class="button">Sketch</div>
    <div id="seven" class="button">Bond</div>
  </div> */}





          </div>
        </div>
        <div className="layout_con" >
          {menuArr.find(m => m.id === selectedMenuId)?.content}
        </div>
        {/* {ModalOn? 
          <div className="modal-container">
          <div className="modal-background">
            <div className="modal one">
              <h2>I'm a Modal</h2>
              <p>Hear me roar.</p>
              <svg className="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
                <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3" />
              </svg>
            </div>
          </div>
        </div>
        : ''} */}
        {/* { modal &&
          <div className="modal-container">
            <div className="modal-background">
              <div className="modal">
                <h2>I'm a Modal</h2>
                <p>Hear me roar.</p>
                <svg className="modal-svg" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" preserveAspectRatio="none">
                  <rect x="0" y="0" fill="none" width="226" height="162" rx="3" ry="3" />
                </svg>
              </div>
            </div>
          </div>
        } */}
      </div>
    </>
  )
}

export default TestGuide5;






