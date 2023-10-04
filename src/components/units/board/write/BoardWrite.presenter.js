import { BlueButton, RedInput } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <>
      이름
      <RedInput type="text" onChange={props.bbb} />
      <br />
      제목
      <RedInput type="text" onChange={props.ccc} />
      <br />
      내용
      <RedInput type="text" onChange={props.ddd} />
      <br />
      <BlueButton
        qqq="yellow"
        rrr="15px"
        zzz={props.mycolor}
        onClick={props.aaa}
      >
        GRAPHQL-API(동기) 요청하기
      </BlueButton>
    </>
  );
}
