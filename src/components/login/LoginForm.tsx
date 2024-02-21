import { useForm, SubmitHandler } from "react-hook-form";
import InputFieldLogin from "./InputFieldLogin";
import { loginUser } from "../../services/userService";
import ButtonComponent from "../common/ButtonComponent";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

interface IFormValues {
  email: string;
  password: string;
}

const LoginForm = () => {
  const { register, handleSubmit } = useForm<IFormValues>();
  const onSubmit: SubmitHandler<IFormValues> = (data) => handleLogin(data);
  const [isLoading, setIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (data: IFormValues) => {
    setIsLoading(true);
    try {
      const response = await loginUser({ user: data });
      console.log(response);
      localStorage.setItem("token", response.token);
      navigate("/home");
    } catch (error) {
      console.error(error);
      setLoginError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex w-[321px] flex-col mt-7 self-center">
      <img
        loading="lazy"
        src="src/assets/smilies.svg"
        className="aspect-[1.71] object-contain object-center w-[133px] overflow-hidden self-center max-w-full"
        alt="Image 2"
      />
      <div className="text-black text-xl font-bold tracking-[3px] self-center whitespace-nowrap mt-6">
        <span className="text-black">TARGET</span>{" "}
        <span className="text-black">MVD</span>{" "}
      </div>
      <div className="text-neutral-800 text-lg font-semibold leading-8 self-center whitespace-nowrap mt-7">
        Find people near you & Connect
      </div>
      <div className="text-black text-sm leading-7 self-stretch mt-3">
        Create a target wherever on the map, specify your interest: Travel,
        Dating, Music, etc and start connecting with others who share your
        interest.
      </div>
      <form className="self-center flex w-[188px] shrink-0 flex-col mt-1.5">
        <InputFieldLogin
          label="email"
          type="email"
          register={register}
          required
        />
        <InputFieldLogin
          label="password"
          type="password"
          register={register}
          required
        />
        <ButtonComponent disabled={isLoading} onClick={handleSubmit(onSubmit)}>
          SIGN IN
        </ButtonComponent>
      </form>
      <a
        className="text-xs text-center text-red-700 font-semibold mt-5"
        hidden={!loginError}
      >
        There was an error logging in, please check your data or try again
        later.
      </a>
      <div className="text-black text-center text-xs font-semibold self-center whitespace-nowrap mt-5">
        Forgot your password?
      </div>
      <div className="text-black text-center text-xs font-bold tracking-[2.4px] self-center whitespace-nowrap mt-14 max-md:mt-10">
        CONNECT WITH FACEBOOK
      </div>
      <hr className="h-0.5 border-none bg-black mt-6 w-2/3 self-center" />
      <Link
        to="/signup"
        className="text-black text-center text-xs font-semibold tracking-widest self-center mt-5"
      >
        SIGN UP
      </Link>
    </div>
  );
};

export default LoginForm;
