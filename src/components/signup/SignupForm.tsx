import { registerUser } from "../../services/userService";
import ButtonComponent from "../common/ButtonComponent";
import { FormEvent, useState } from "react";

function SignUpForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirm] = useState("");
  const [gender, setGender] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [registrationError, setRegistrationError] = useState(false);
  const [registrationSuccess, setRegistrationSuccess] = useState(false);

  const handleFirstNameChange = (e: FormEvent<HTMLInputElement>) => {
    setFirstName(e.currentTarget.value);
  };

  const handleLastNameChange = (e: FormEvent<HTMLInputElement>) => {
    setLastName(e.currentTarget.value);
  };

  const handleUsernameChange = (e: FormEvent<HTMLInputElement>) => {
    setUsername(e.currentTarget.value);
  };

  const handleEmailChange = (e: FormEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };

  const handlePasswordChange = (e: FormEvent<HTMLInputElement>) => {
    setPassword(e.currentTarget.value);
  };

  const handleConfirmPasswordChange = (e: FormEvent<HTMLInputElement>) => {
    setConfirm(e.currentTarget.value);
  };

  const handleGenderChange = (e: FormEvent<HTMLSelectElement>) => {
    setGender(e.currentTarget.value);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (
      firstName === "" ||
      lastName === "" ||
      username === "" ||
      email === "" ||
      password === "" ||
      gender === "" ||
      confirmPassword != password
    ) {
      setError(true);
      return;
    } else {
      setError(false);
      setIsLoading(true);

      const userData = {
        user: {
          first_name: firstName,
          last_name: lastName,
          username,
          email,
          password,
          password_confirmation: confirmPassword,
          gender,
        },
      };

      try {
        const response = await registerUser(userData);
        console.log(response);
        setRegistrationSuccess(true);
        // Redirect to confirmation sent page
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
      <div className="flex w-[180px] max-w-full flex-col mt-20 self-end max-md:mt-10 mb-8">
        <div className="text-black text-3xl font-bold tracking-[3px] self-center">
          SIGN UP
        </div>
        <div className="text-black text-center text-xs font-semibold tracking-widest self-center mt-5">
          <label htmlFor="firstName"> FIRST NAME </label>
          <input
            id="firstName"
            type="text"
            className="self-stretch flex shrink-0 h-[37px] flex-col mt-2 border-[0.5px] border-solid border-zinc-950 p-3"
            aria-label="Name"
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="text-black text-center text-xs font-semibold tracking-widest self-center mt-5">
          <label htmlFor="lastName"> LAST NAME </label>
          <input
            id="lastName"
            type="text"
            className="self-stretch flex shrink-0 h-[37px] flex-col mt-2 border-[0.5px] border-solid border-zinc-950 p-3"
            aria-label="Name"
            onChange={handleLastNameChange}
          />
        </div>
        <div className="text-black text-center text-xs font-semibold tracking-widest self-center mt-5">
          <label htmlFor="username"> USERNAME </label>
          <input
            id="username"
            type="text"
            className="self-stretch flex shrink-0 h-[37px] flex-col mt-2 border-[0.5px] border-solid border-zinc-950 p-3"
            aria-label="Name"
            onChange={handleUsernameChange}
            autoComplete="new-username"
          />
        </div>
        <div className="text-black text-center text-xs font-semibold tracking-widest self-center mt-5">
          <label htmlFor="email"> EMAIL </label>
          <input
            id="email"
            type="email"
            className="self-stretch flex shrink-0 h-[37px] flex-col mt-2 border-[0.5px] border-solid border-zinc-950 p-3"
            aria-label="Email"
            onChange={handleEmailChange}
            autoComplete="new-email"
          />
        </div>
        <div className="text-black text-center text-xs font-semibold tracking-widest self-center mt-5">
          <label htmlFor="password"> PASSWORD </label>
          <input
            id="password"
            type="password"
            className="self-stretch flex shrink-0 h-[37px] flex-col mt-2 border-[0.5px] border-solid border-zinc-950 p-3"
            aria-label="Password"
            onChange={handlePasswordChange}
            autoComplete="new-password"
          />
        </div>
        <div className="text-black text-center text-xs font-semibold tracking-widest self-center mt-5">
          <label htmlFor="confirmPassword"> CONFIRM PASSWORD </label>
          <input
            id="confirmPassword"
            type="password"
            className="self-stretch flex shrink-0 h-[37px] flex-col mt-2 border-[0.5px] border-solid border-zinc-950 p-3"
            aria-label="Confirm Password"
            onChange={handleConfirmPasswordChange}
            autoComplete="new-password"
          />
        </div>
        <div className="text-black text-center text-xs font-semibold tracking-widest self-center mt-5">
          <label htmlFor="gender"> GENDER </label>
          <select
            id="gender"
            className="self-stretch flex h-[37px] flex-col mt-1.5 border-[0.5px] border-solid border-black w-[175px] shrink-0 text-sm p-2"
            aria-label="Gender"
            onChange={handleGenderChange}
          >
            <option value="" disabled selected>
              Select your option
            </option>
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
        <p className="self-center text-xs, mt-3 font-semibold">SIGN IN</p>
      </div>
    </form>
  );
}

export default SignUpForm;
