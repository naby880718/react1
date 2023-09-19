const MainPage = () => {
  return (
    <>
    <div className="full_wrap">
        <div className="full_container login">
            <div className="cont_header">
                <h1 className="logo"><img src="/resources/img/img_logo.svg" alt="" /></h1>
            </div>
            <div className="cont_body">
                <div className="ipt_box full">
                    <input className="login_ipt" type="text" placeholder="이메일을 입력해 주세요." />
                    <button type="button" className="btn_del"><i className="ico ico_cir_del"></i></button>
                </div>
                {/* error시 input에 error 클래스 추가 */}
                <div className="ipt_box full">
                    <input className="login_ipt error" type="text" placeholder="이메일을 입력해 주세요." />
                    <button type="button" className="btn_del"><i className="ico ico_cir_del"></i></button>
                    <p className="msg error">Support text / 에러문구</p>
                </div>
                <dl className="avatar_box">
                    <dt className="title">사용하실 아바타를 선택하세요.</dt>
                    <dd className="avatar">
                        <div className="inner">
                            <div className="rdo_box img">
                                <input type="radio" id="male" name="avatar" checked/>
                                <label htmlFor="male">남성 기본</label>
                                <div className="img_box">
                                    <img src="/resources/img/img_profile.svg" alt="아바타 기본 이미지" />
                                </div>
                            </div>
                            <div className="rdo_box img">
                                <input type="radio" id="female" name="avatar" />
                                <label htmlFor="female">여성 기본</label>
                                <div className="img_box">
                                    <img src="/resources/img/img_profile.svg" alt="아바타 기본 이미지" />
                                </div>
                            </div>
                        </div>
                        <p>아바타 외형은 마이룸에서 언제든지 변경 가능합니다.</p>
                    </dd>
                </dl>
                <div className="cont_foot">
                    <div className="btn_area">
                        <button className="btn full">입장</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default MainPage;