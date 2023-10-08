import { gql, useQuery } from "@apollo/client";
import type { MouseEvent } from "react";

const FETCH_BOARDS = gql`
  query {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovePage(): JSX.Element {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data?.fetchBoards);

  const onClickDiv = (event: MouseEvent<HTMLDivElement>) => {
    console.log(event);
    alert(event.currentTarget.id + `님이 작성하신 글입니다.`);
  };
  return (
    <>
      {data?.fetchBoards.map((el: any) => (
        <div key={el._id} onClick={onClickDiv} id={el.writer}>
          <span>
            <input type="checkbox" />
          </span>
          <span style={{ margin: "10px" }}>{el.number}</span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </>
  );
}
