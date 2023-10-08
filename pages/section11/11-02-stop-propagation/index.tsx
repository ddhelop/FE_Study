import { gql, useQuery } from "@apollo/client";
import { MouseEvent } from "react";
import CheckBox from "./checkbox";

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

export default function StaticRoutingMovePage() {
  const { data } = useQuery(FETCH_BOARDS);
  console.log(data?.fetchBoards);

  const qqq1 = (event: MouseEvent<HTMLDivElement>) => {
    alert("1번 클릭");
  };

  const qqq4 = (event: MouseEvent<HTMLDivElement>) => {
    event.stopPropagation();
    alert("4번 클릭");
  };

  return (
    <>
      {data?.fetchBoards.map((el: any) => (
        <div onClick={qqq1} id={el.writer}>
          <CheckBox />
          <span onClick={qqq4} style={{ margin: "10px" }}>
            {el.number}
          </span>
          <span style={{ margin: "10px" }}>{el.title}</span>
          <span style={{ margin: "10px" }}>{el.writer}</span>
        </div>
      ))}
    </>
  );
}
