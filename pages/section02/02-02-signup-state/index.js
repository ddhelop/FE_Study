import { useState } from "react";

export default function SignUpStatePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function onChangeEmail(event) {
    setEmail(event.target.value);
  }

  function onChangePassword(event) {
    setPassword(event.target.value);
  }

  function onClickSignUp() {
    // 1. 검증하기

    //2. 백엔드 컴퓨터에 보내주기(API)
    if (email.includes("@") === false) {
      alert("이메일이 올바르지 않습니다!! @가 없음");
      setError("이메일 형식이 올바르지 않습니다.");
    } else {
      //3. 성공알람 보여주기
      alert("회원가입을 축하합니다.");
    }
  }

  return (
    <div>
      이메일:
      <input type="text" onChange={onChangeEmail} />
      <div id="myerror">{error}</div>
      비밀번호:
      <input type="password" onChange={onChangePassword} />
      <button onClick={onClickSignUp}>회원가입</button>
    </div>
  );
}
