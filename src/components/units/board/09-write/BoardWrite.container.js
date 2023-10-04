import BoardWriteUI from "./BoardWrite.presenter";
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { CREATE_BOARD, UPDATE_BOARD } from "./BoardWrite.queries";
import { useRouter } from "next/router";

export default function BoardWrite(props) {
  const [나의함수] = useMutation(CREATE_BOARD);
  const [updateBoard] = useMutation(UPDATE_BOARD);
  const [writer, setWriter] = useState("");
  const [title, setTitle] = useState("");
  const [contents, setContents] = useState("");
  const [mycolor, setMyColor] = useState(false);

  const router = useRouter();

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        writer: writer,
        title: title,
        contents: contents,
      },
    });
    console.log(result);
    router.push(`/section09/09-03-boards/${result.data.createBoard.number}`);
  };

  const onClickUpdate = async () => {
    const result = await updateBoard({
      variables: {
        number: Number(router.query.number),
        writer,
        title,
        contents,
      },
    });
    router.push(`/section09/09-03-boards/${result.data.updateBoard.number}`);
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
      onClickSubmit={onClickSubmit}
      onClickUpdate={onClickUpdate}
      onChangeWriter={onChangeWriter}
      onChangeTitle={onChangeTitle}
      onChangeContents={onChangeContents}
      mycolor={mycolor}
      isEdit={props.isEdit}
    />
  );
}
