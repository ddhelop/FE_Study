import { gql, useQuery } from "@apollo/client";

const FETCH_BOARD = gql`
  query {
    fetchBoard(number: 2423) {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovePage() {
  const { data } = useQuery(FETCH_BOARD);
  console.log(data);

  return (
    <>
      <div>작성자 : {data?.fetchBoard.writer}</div>
      <div>제목 : {data?.fetchBoard.title}</div>
      <div>내용 : {data?.fetchBoard.contents}</div>
      <div>{data?.fetchBoard.number}번 페이지 이동이 완료되었습니다.</div>
    </>
  );
}
