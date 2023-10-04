import { gql, useQuery } from "@apollo/client";
import { useRouter } from "next/router";

const FETCH_BOARD = gql`
  query fetchBoard($number: Int) {
    fetchBoard(number: $number) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovePage() {
  const router = useRouter();
  console.log(router);
  const { data } = useQuery(FETCH_BOARD, {
    variables: {
      number: Number(router.query.number),
    },
  });
  console.log(data);

  const onClickMove = () => {
    router.push(
      `/section10/10-02-typescript-boards/${router.query.number}/edit`
    );
  };

  return (
    <>
      <div>작성자 : {data?.fetchBoard?.writer}</div>
      <div>제목 : {data?.fetchBoard?.title}</div>
      <div>내용 : {data?.fetchBoard?.contents}</div>
      <div>{router.query.number}번 페이지 이동이 완료되었습니다.</div>
      <button onClick={onClickMove}>수정하러가기</button>
    </>
  );
}
