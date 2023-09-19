import { createSlice } from "@reduxjs/toolkit";

// 초기상태값
const initialState = {
  
  popName: null,
}

// Slice 생성
const globalSlice = createSlice({
  name: "global",
  initialState: initialState,
  reducers: {
    initGlobalState() {
      return {...initialState};
    },
    changeGlobalState(state, { payload: { key, value }}) {
      state[key] = value;
    },

    // 팝업 설정
    setPopName(state, action) {
      // 같은 이름이 다시 불러지면 창 닫음
      state.popName = state.popName !== action.payload ? action.payload : null;
    }
  }
});

// 액션
export const {
  initGlobalState, changeGlobalState,
  setPopName

} = globalSlice.actions;

export default globalSlice.reducer;