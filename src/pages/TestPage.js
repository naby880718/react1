import { popType } from "common/define";
import { useDispatch, useSelector } from "react-redux";
import { setPopName } from "redux/globalSlice";

const TestPage = () => {
  // redux의 값을 변경할때 사용할 dispatch
  const dispatch = useDispatch();
  // redux의 global slice에서 popName state를 참조
  const { popName } = useSelector(state => state.global);

  return (
    <>
    <div>
      <ul>
        <li><button style={{ border: 'solid 1px black' }} onClick={ () => { dispatch(setPopName(popType.POPUP_TEST_1)); }}>테스트팝업1</button></li>
        <li><button style={{ border: 'solid 1px black' }} onClick={ () => { dispatch(setPopName(popType.POPUP_TEST_2)); }}>테스트팝업2</button></li>
      </ul>
    </div>

    {/* popName이 매칭되는 팝업이 표시 */}
    { popName === popType.POPUP_TEST_1 && (
      <div style={{ border: 'solid 1px red', padding: '20px' }}>
        <button style={{ border: 'solid 1px black' }} onClick={ () => dispatch(setPopName())}>닫기</button>
        <div>
          테스트팝업1입니다.
        </div>
      </div>
    )}

    {/* popName이 매칭되는 팝업이 표시 */}
    { popName === popType.POPUP_TEST_2 && (
      <div style={{ border: 'solid 1px green', padding: '20px' }}>
        <button style={{ border: 'solid 1px black' }} onClick={ () => dispatch(setPopName())}>닫기</button>
        <div>테스트팝업2입니다.</div>
        <div><button style={{ border: 'solid 1px black' }} onClick={ () => { dispatch(setPopName(popType.POPUP_TEST_1)); }}>테스트팝업1열기</button></div>
      </div>
    )}
    </>
  )
}

export default TestPage;