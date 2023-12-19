import { useMutation, gql } from "@apollo/client";
import { ChangeEvent, useState } from "react";

const MYGRAPHQL = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage(): JSX.Element {
  const [inputs, setInputs] = useState({
    writer: "",
    title: "",
    contents: "",
  });

  const [나의함수] = useMutation(MYGRAPHQL);

  const onClickSubmit = async () => {
    const result = await 나의함수({
      variables: {
        ...inputs,
      },
    });
    console.log(result);
  };

  const onChangeInputs = (event: ChangeEvent<HTMLInputElement>): void => {
    setInputs((prev) => ({
      ...prev,

      [event.target.id]: event.target.value,
    }));
  };

  // const onChangeTitle = (event) => {
  //   setInputs({
  //     ...inputs,

  //     title: event.target.value,
  //   });
  // };

  // const onChangeContents = (event) => {
  //   setInputs({
  //     ...inputs,

  //     contents: event.target.value,
  //   });
  // };

  return (
    <>
      작성자 :<input type="text" id="writer" onChange={onChangeInputs} />
      제목 :<input type="text" id="title" onChange={onChangeInputs} />
      내용 :<input type="text" id="contents" onChange={onChangeInputs} />
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  );
}
