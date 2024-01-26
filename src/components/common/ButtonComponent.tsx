import { MouseEventHandler } from "react";

interface ButtonComponentProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  disabled: boolean;
}
const ButtonComponent = (props: ButtonComponentProps) => {
  return (
    <button
      className={`${
        props.className ? props.className : ""
      } text-white text-center text-xs font-semibold bg-black self-center w-[185px] max-w-full justify-center items-center mt-6 px-16 py-4 max-md:px-5 disabled:opacity-30`}
      onClick={props.onClick}
      disabled={props.disabled}
    >
      {props.children}
    </button>
  );
};

export default ButtonComponent;
