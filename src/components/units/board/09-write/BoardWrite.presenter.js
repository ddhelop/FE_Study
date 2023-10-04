import { BlueButton, RedInput } from "./BoardWrite.styles";

export default function BoardWriteUI(props) {
  return (
    <>
      이름
      <RedInput type="text" onChange={props.onChangeWriter} />
      <br />
      제목
      <RedInput type="text" onChange={props.onChangeTitle} />
      <br />
      내용
      <RedInput type="text" onChange={props.onChangeContents} />
      <br />
      <BlueButton
        qqq="yellow"
        rrr="15px"
        zzz={props.mycolor}
        onClick={props.isEdit ? props.onClickUpdate : props.onClickSubmit}
      >
        {props.isEdit ? "수정" : "등록"}하기
      </BlueButton>
    </>
  );
}
