import { registerUser } from "services/userService";
import ButtonComponent from "../common/ButtonComponent";
import { FormEvent, useState } from "react";
import InputField from "../common/InputField";
import { Link, useNavigate } from "react-router-dom";

function SignUpForm() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [registrationError, setRegistrationError] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);
  const navigate = useNavigate();

  const handleUserData = (
    e: FormEvent<HTMLInputElement | HTMLSelectElement>,
    field: string
  ) => {
    setUserData({ ...userData, [field]: e.currentTarget.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      Object.values(userData).some((value) => value === "") ||
      userData.confirmPassword != userData.password
    ) {
      setError(true);
      return;
    } else {
      setError(false);
      setIsLoading(true);

      const formData = {
        user: {
          first_name: userData.firstName,
          last_name: userData.lastName,
          username: userData.userName,
          email: userData.email,
          password: userData.password,
          password_confirmation: userData.confirmPassword,
          gender: userData.gender,
        },
      };

      try {
        await registerUser(formData);
        setRegistrationSuccess(true);
        navigate("/confirmation");
      } catch (error) {
        console.error(error);
        setRegistrationError(true);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <form>
      <div className="flex w-[11.2rem] max-w-full flex-col mt-20 self-end max-md:mt-10 mb-8">
        <div className="text-black text-3xl font-bold tracking-[3px] self-center">
          SIGN UP
        </div>
        <InputField
          label="FIRST NAME"
          htmlLabel="firstName"
          type="text"
          onChange={(e) => handleUserData(e, "firstName")}
        />
        <InputField
          label="LAST NAME"
          htmlLabel="lastName"
          type="text"
          onChange={(e) => handleUserData(e, "lastName")}
        />
        <InputField
          label="USERNAME"
          htmlLabel="userName"
          type="text"
          autocomplete="username"
          onChange={(e) => handleUserData(e, "userName")}
        />
        <InputField
          label="EMAIL"
          htmlLabel="email"
          type="email"
          onChange={(e) => handleUserData(e, "email")}
        />
        <InputField
          label="PASSWORD"
          htmlLabel="password"
          type="password"
          autocomplete="new-password"
          onChange={(e) => handleUserData(e, "password")}
        />
        <InputField
          label="CONFIRM PASSWORD"
          htmlLabel="confirmPassword"
          type="password"
          autocomplete="new-password"
          onChange={(e) => handleUserData(e, "confirmPassword")}
        />
        <div className="text-black text-center text-xs font-semibold tracking-widest self-center mt-5">
          <label htmlFor="gender"> GENDER </label>
          <select
            id="gender"
            className="self-stretch flex h-[2.3rem] flex-col mt-1.5 border-[0.5px] border-solid border-black w-[10.9rem] shrink-0 text-sm p-2"
            aria-label="Gender"
            onChange={(e) => handleUserData(e, "gender")}
          >
            <option value="">Select your option</option>
            <option value="male"> Male </option>
            <option value="female"> Female </option>
            <option value="other"> Other </option>
          </select>
        </div>
        <ButtonComponent disabled={isLoading} onClick={handleSubmit}>
          SIGN UP
        </ButtonComponent>
        <p
          className="text-xs text-center text-red-700 font-semibold mt-5"
          hidden={!error}
        >
          Check the inputed data
        </p>
        <p
          className="text-xs text-center text-red-700 font-semibold mt-5"
          hidden={!registrationError}
        >
          There was an error registering your account, please try again later.
        </p>
        <p
          className="text-xs text-center text-green-700 font-semibold mt-5"
          hidden={!registrationSuccess}
        >
          REGISTRATION SUCCESS!
        </p>
        <hr className="h-0.5 border-none bg-black mt-6 w-2/3 self-center" />
        <Link to="/login" className="self-center text-xs, mt-3 font-semibold">
          SIGN IN
        </Link>
      </div>
    </form>
  );
}

export default SignUpForm;
