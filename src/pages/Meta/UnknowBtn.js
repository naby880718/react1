
import { useEffect, useState } from "react";

const UnKnowBtn = ({ popName, setPopName }) => {

    return (
        <>
        <div className="UnKnowBtn">
            <div className="Btns">
                <div style={{flex:'none', width: '100%', border: '1px solid #ddd'}}></div>
                <button onClick={ e => { setPopName('MainPage_01'); }}>0602 관리자배너업로드</button>
            </div>
        </div>
        </>
    )
}
export default UnKnowBtn;
