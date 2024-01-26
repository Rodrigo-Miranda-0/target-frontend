import LeftMainPanel from "./LeftMainPanel";
import RightMainPanel from "./RightMainPanel";
import { ReactElement } from "react";

const MainLayout = (props: { children: ReactElement }) => {
  return (
    <div className="flex">
      <LeftMainPanel>{props.children}</LeftMainPanel>
      <RightMainPanel />
    </div>
  );
};

export default MainLayout;
