import { useNavigate } from "react-router-dom";
import { logoutUser } from "../services/userService";
import HamburguerMenuSite from "../components/common/HamburgerMenuSite";

function DashboardPage() {
  const navigate = useNavigate();

  const onbuttonLogout = () => {
    logoutUser();
    navigate("/login");
  };

  return (
    <div>
      <HamburguerMenuSite />
      <button onClick={onbuttonLogout}> LOGOUT </button>
    </div>
  );
}

export default DashboardPage;
