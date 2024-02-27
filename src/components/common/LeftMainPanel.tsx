import { ReactElement } from "react";
import HamburguerMenuLanding from "./HamburgerMenuLanding";

const LeftMainPanel = (props: { children: ReactElement }) => {
  return (
    <div className="flex flex-col w-[55%] bg-white pl-6 max-md:pl-5">
      <HamburguerMenuLanding />
      <div className="gap-5 flex flex-col items-center max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[45%] max-md:w-full"></div>
        <div>{props.children}</div>
      </div>
    </div>
  );
};

export default LeftMainPanel;
