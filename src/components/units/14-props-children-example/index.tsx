interface IExampleProps {
  school: string;
  children: JSX.Element;
}

export default function Example(props: IExampleProps): JSX.Element {
  return (
    <div>
      <div>++++++++++빨간색 파란색 초록색++++++++++</div>
      <div>
        <div>안녕하세요 영희입니다.</div>
        <div>{props.school}</div>
        <div>{props.children}</div>
        <div>안녕하세요 맹구입니다.</div>
      </div>
      <div>++++++++++빨간색 파란색 초록색++++++++++</div>
    </div>
  );
}
