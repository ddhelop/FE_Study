import { useMutation, gql } from "@apollo/client";
import { useRouter } from "next/router";

const MYGRAPHQL = gql`
  mutation createBoard($writer: String, $title: String, $contents: String) {
    createBoard(writer: $writer, title: $title, contents: $contents) {
      _id
      number
      message
    }
  }
`;

export default function GraphqlMutationPage() {
  const router = useRouter();

  const [나의함수] = useMutation(MYGRAPHQL);

  const onClickSubmit = async () => {
    try {
      const result = await 나의함수({
        variables: {
          // variables = $
          writer: "훈이",
          title: "안녕하세요",
          contents: "반갑습니다.",
        },
      });
      console.log(result);
      router.push(
        "/section05/05-05-dynamic-board-mutation-moved/" +
          result.data.createBoard.number
      );
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <>
      <button onClick={onClickSubmit}>GRAPHQL-API 요청하기</button>
    </>
  );
}
