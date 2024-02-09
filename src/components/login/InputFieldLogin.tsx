import { Path, UseFormRegister } from "react-hook-form";

interface IFormValues {
  email: string;
  password: string;
}

interface InputFieldProps {
  label: Path<IFormValues>;
  type: string;
  autocomplete?: string;
  register: UseFormRegister<IFormValues>;
  required: boolean;
}

const InputFieldLogin = ({
  label,
  type,
  autocomplete,
  register,
  required,
}: InputFieldProps) => {
  return (
    <div className="text-black text-center text-xs font-semibold tracking-widest self-center mt-5">
      <label className="uppercase"> {label} </label>
      <input
        {...register(label, { required })}
        id={label}
        type={type}
        className="self-stretch flex shrink-0 h-[37px] flex-col mt-2 border-[0.5px] border-solid border-zinc-950 p-3"
        autoComplete={autocomplete}
      />
    </div>
  );
};

export default InputFieldLogin;
