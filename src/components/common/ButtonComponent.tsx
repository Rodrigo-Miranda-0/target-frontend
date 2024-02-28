import { MouseEventHandler } from "react";

interface ButtonComponentProps {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  disabled: boolean;
}
const ButtonComponent = ({
  className = "",
  onClick,
  children,
  disabled,
}: ButtonComponentProps) => {
  return (
    <button
      className={`text-white text-center text-xs font-semibold bg-black self-center w-[11.5rem] max-w-full justify-center items-center mt-6 px-16 py-4 max-md:px-5 disabled:opacity-30 ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default ButtonComponent;
