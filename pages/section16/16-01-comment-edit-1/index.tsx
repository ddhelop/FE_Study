import { gql, useQuery } from "@apollo/client";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../src/commons/types/generated/types";
import type { MouseEvent } from "react";
import { useState } from "react";

const FETCH_BOARDS = gql`
  query fetchBoards($page: Int) {
    fetchBoards(page: $page) {
      _id
      writer
      title
      contents
    }
  }
`;

export default function StaticRoutingMovePage(): JSX.Element {
  const [myIndex, setMyIndex] = useState();

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS,
  );

  const onClickEdit = (event: MouseEvent<HTMLButtonElement>): void => {
    setMyIndex(Number(event.currentTarget.id));
  };

  return (
    <>
      {data?.fetchBoards.map((el, index) =>
        index !== myIndex ? (
          <div key={el._id}>
            <span style={{ margin: "10px" }}>{el.title}</span>
            <span style={{ margin: "10px" }}>{el.writer}</span>
            <button id={String(index)} onClick={onClickEdit}>
              수정하기
            </button>
          </div>
        ) : (
          <input type="text" key={el._id} />
        ),
      )}
    </>
  );
}
