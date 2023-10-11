import { useState } from "react";

export default function CounterLetDocumnetPage(): JSX.Element {
  const [count, setCount] = useState(0);

  function onClickCountUp(): void {
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
    setCount((prev) => prev + 1);
  }

  // function onClickCountDown() {
  //   setCount(count - 1);
  // }

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      {/* <button onClick={onClickCountDown}>카운트 내리기</button> */}
    </>
  );
}
