import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_BOARD } from "./BoardWrite.queries";

export default function BoardWrite() {
  const [나의함수] = useMutation(CREATE_BOARD);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [mycolor, setMyColor] = useState(false);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    alert(result.data.createBoard.message);
  };

  const onChangeWriter = (event) => {
    setWriter(event.target.value);
    if (event.target.value && title && contents) {
      setMyColor(true);
    } else {
      setMyColor(false);
    }
  };

  const onChangeTitle = (event) => {
    setTitle(event.target.value);
    if (writer && event.target.value && contents) {
      setMyColor(true);
    } else {
      setMyColor(false);
    }
  };

  const onChangeContents = (event) => {
    setContents(event.target.value);
    if (writer && title && event.target.value) {
      setMyColor(true);
    } else {
      setMyColor(false);
    }
  };

  return (
    <BoardWriteUI
      aaa={onClickSubmit}
      bbb={onChangeWriter}
      ccc={onChangeTitle}
      ddd={onChangeContents}
      mycolor={mycolor}
    />
  );
}
