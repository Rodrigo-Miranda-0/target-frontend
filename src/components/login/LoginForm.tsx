import { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onButtonClick = (event: { preventDefault: () => void }) => {
    event.preventDefault();

    setEmailError("");
    setPasswordError("");

    if (!email) {
      setEmailError("Please fill in your email");
    }

    if (!password) {
      setPasswordError("Please fill in your password");
    }

    if (email && password) {
      console.log("Sign in");
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
      <label
        htmlFor="email"
        className="text-black text-center text-xs font-semibold tracking-widest self-center mt-10 max-md:mt-10"
      >
        EMAIL
      </label>
      <div className="self-center flex w-[188px] shrink-0 flex-col mt-2 border-[0.5px] border-solid border-black">
        <input
          value={email}
          placeholder="Enter your email"
          onChange={(ev) => setEmail(ev.target.value)}
        ></input>
      </div>
      <label
        htmlFor="password"
        className="text-black text-center text-xs font-semibold tracking-widest self-center mt-7"
      >
        PASSWORD
      </label>
      <div className="self-center flex w-[188px] shrink-0 flex-col mt-1.5 border-[0.5px] border-solid border-black">
        <input
          value={password}
          placeholder="Enter your password"
          onChange={(ev) => setPassword(ev.target.value)}
        ></input>
      </div>
      <label className="text-red-500 text-center text-xs font-semibold tracking-widest self-center mt-2">
        {emailError || passwordError}
      </label>
      <button
        className="text-white text-center text-xs font-semibold tracking-widest bg-black self-center w-[185px] max-w-full justify-center items-center mt-6 px-16 py-4 max-md:px-5"
        aria-label="Sign In"
        onClick={onButtonClick}
      >
        SIGN IN
      </button>
      <div className="text-black text-center text-xs font-semibold self-center whitespace-nowrap mt-5">
        Forgot your password?
      </div>
      <div className="text-black text-center text-xs font-bold tracking-[2.4px] self-center whitespace-nowrap mt-14 max-md:mt-10">
        CONNECT WITH FACEBOOK
      </div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4642bece739ce0e20d59b234d00c820cfdc2e204e299f2a152f4ac0c60fb2e01?apiKey=25151f55545440838c8ceb1b1cff39a3&"
        className="aspect-[121] object-contain object-center w-[121px] stroke-[0.5px] stroke-black overflow-hidden self-center max-w-full mt-3.5"
        alt="Image 3"
      />
      <div className="text-black text-center text-xs font-semibold tracking-widest self-center mt-5">
        SIGN UP
      </div>
    </div>
  );
};

export default LoginForm;
