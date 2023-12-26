import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export default function FunctionalCounterPage(): JSX.Element {
  const [count, setCount] = useState(0);
  const router = useRouter();

  // componentDidMount와 동일
  useEffect(() => {
    console.log("그려지고 나서 실행");
  }, []);

  // componentDidMount + componentDidUpdate와 동일
  useEffect(() => {
    console.log("변경되고나서 실행");
  });

  // componentWillUnmount와 동일
  useEffect(() => {
    return () => {
      console.log("사라지기전에 실행");
    };
  }, []);

  // 1. useEffect 하나로 합치기
  useEffect(() => {
    console.log("그려지고 나서 실행");

    return () => {
      console.log("사라지기전에 실행");
    };
  });

  // 2. useEffect 잘못된 사용법 (1. 추가 렌더링(setState할 시), 무한루프)
  // useEffect(() => {
  //   setWrite()
  //   setCount(prev => prev +1)
  // }, [count])

  const onClickMove = (): void => {
    void router.push("/");
  };

  const onClickCountUp = (): void => {
    console.log(count);
    setCount(1);
  };

  return (
    <>
      <div>{count}</div>
      <button onClick={onClickCountUp}>카운트 올리기</button>
      <button onClick={onClickMove}>나가기</button>
    </>
  );
}
