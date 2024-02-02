import { ChangeEvent } from "react";

interface InputFieldProps {
  label: string;
  htmlLabel: string;
  type: string;
  autocomplete?: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const InputField = ({
  label,
  htmlLabel,
  type,
  autocomplete,
  onChange,
}: InputFieldProps) => {
  return (
    <div className="text-black text-center text-xs font-semibold tracking-widest self-center mt-5">
      <label htmlFor={htmlLabel}> {label} </label>
      <input
        id={htmlLabel}
        type={type}
        className="self-stretch flex shrink-0 h-[37px] flex-col mt-2 border-[0.5px] border-solid border-zinc-950 p-3"
        aria-label="Name"
        onChange={onChange}
        autoComplete={autocomplete}
      />
    </div>
  );
};

export default InputField;
