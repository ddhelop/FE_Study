import type { UseFormRegisterReturn } from "react-hook-form";

interface IInputRegister {
  type?: "text" | "password";
  register: UseFormRegisterReturn;
}

export default function Input01(props: IInputRegister): JSX.Element {
  return <input type={props.type} {...props.register} />;
}
