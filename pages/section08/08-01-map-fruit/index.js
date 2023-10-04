//컴포넌트 위에 만든 이우: 컴포넌트가 리렌더링돼도 다시 안만들어짐.-효육적
const FRUITS = {};

export default function MapFruitsPage() {
  //1. 가장 기본 예제
  const aaa = [
    <div>1 레드향</div>,
    <div>2 샤인머스켓</div>,
    <div>3 산청딸기</div>,
  ];

  //2. 실무 백엔드 데이터 예제
  const bbb = FRUITS.map((el) => (
    <div>
      {el.number} {el.title}
    </div>
  ));

  return (
    <div>
      <div>{aaa}</div>
      ============================
      <div>{bbb}</div>
      ============================
      <div>
        {/*3. 실무 효율적인 렌더링 예제*/}
        {FRUITS.map((el) => (
          <div>
            {el.number} {el.title}{" "}
          </div>
        ))}
      </div>
    </div>
  );
}
