import { useMutation, gql } from "@apollo/client";

const MYGRAPHQL = gql`
  mutation {
    createBoard(writer: "철수", title: "안녕", contents: "내용") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const [나의함수] = useMutation(MYGRAPHQL);

  const onClickSubmit = async () => {
    const result = await 나의함수();
    console.log(result);
  };

  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  );
}
