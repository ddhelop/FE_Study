import { useMutation, gql } from "@apollo/client";
import { wrapAsync } from "../../../src/commons/libraries/asyncFunc";

const MYGRAPHQL = gql`
  mutation {
    createBoard(writer: "철수", title: "안녕", contents: "내용") {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage(): JSX.Element {
  const [나의함수] = useMutation(MYGRAPHQL);

  const onClickSubmit = async (): Promise<void> => {
    const result = await 나의함수();
    console.log(result);
  };

  return (
    <>
      <button onClick={wrapAsync(onClickSubmit)}>GRAPHQL-API 요청하기</button>
    </>
  );
}
