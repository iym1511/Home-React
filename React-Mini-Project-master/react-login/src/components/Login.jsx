import { useEffect } from "react";
import { useState } from "react";

// 더미데이터 / 이거대로 입력하면 성공출력
const User = {
    email: 'test@example.com',
    pw: 'test8361@'
}

const Login = () => {
    // input창에서 값 받을때 사용
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");

    // 이메일,패스워드 조건이 충족하는지 확인용
    const [emailValid, setEmailValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);

    // useEffect로 한자한자입력할때마다 확인해서 
    // 이메일,패스워드 두개의 조건이 충족하면
    // 버튼을 활성화 시켜주는데 사용
    const [notAllow, setNotAllow] = useState(true);


    // 이메일 조건충족 확인
    const handleEmail = (e) => {
        setName(e.target.value);
        // 정규식인데 로그인할떄 특문같이 정해진 조건발동을 수행시켜주는거같다
        const regex =
          /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
        if (regex.test(e.target.value)) {
          setEmailValid(true);
        } else {
          setEmailValid(false);
        }
      };

      // 이메일 조건충족 확인
      const handlePw = (e) => {
        setPw(e.target.value);
        const regex =
          /^(?=.*[a-zA-z])(?=.*[0-9])(?=.*[$`~!@$!%*#^?&\\(\\)\-_=+])(?!.*[^a-zA-z0-9$`~!@$!%*#^?&\\(\\)\-_=+]).{8,20}$/;
        if (regex.test(e.target.value)) {
          setPwValid(true);
        } else {
          setPwValid(false);
        }
      };

      // 클릭이벤트 출력할떄 이함수 
      const onClickConfirmButton =() => {
        if(email === User.email && pw === User.pw){
            alert('로그인 성공!')
        }else{
            alert('등록되지않은 회원입니다.')
        }
      }


    
    useEffect(()=>{
        // 둘다 모두 true면 버튼활성화를 풀어줌
        if(emailValid && pwValid){
            setNotAllow(false);
            return;
        }else{
            setNotAllow(true);
        }



    },[emailValid, pwValid])

    return (  
        <div className="page" onSubmit={{loginUser}}>
            <div className="titleWrap">
                이메일과 비밀번호를
                <br />
                입력해주세요
            </div>

            <div className="contentWrap">
                <div className="inputTitle" >이메일 주소</div>
                <div className="inputWrap">
                    <input className="input" 
                    type="text"
                    placeholder="test@example.com" 
                    value={email}
                    onChange={handleEmail}
                    />
                </div>
                <div className="errorMessageWrap">
                    {/* 입력안했을땐 안나오고 이메일의 길이가 0보다 클때 오류문구 출력 */}
                    {   
                        !emailValid && email.length > 0 && (    // 조건이안맞고 이메일이0보다 높을때
                            <div>올바른 이메일을 입력해주세요.</div>
                        )
                    }                   
                </div>


                <div className="inputTitle" style={{marginTop:"26px"}}>비밀번호</div>
                <div className="inputWrap">
                    <input className="input" 
                    type="password"
                    placeholder="영문, 숫자, 특수문자 포함 8자 이상 입력해주세요"
                    value={pw}
                    onChange={handlePw}
                    />
                </div>
                <div className="errorMessageWrap">
                    {
                        !pwValid && pw.length > 0 && ( // 조건이안맞고 패스워드가0보다 높을때
                            <div>영문, 숫자, 특수문자 포함 8자 이상 입력해주세요</div>
                        )
                    }                   
                </div>
            </div>
            <div>
                {/* disabled 버튼활성화 체크*/}
                <button onClick={onClickConfirmButton} disabled={notAllow} className="bottomButton">로그인</button>
            </div>

        </div>
    );
}
 
export default Login;