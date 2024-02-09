import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Routes } from "../routes/router";

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate(Routes.SIGNUP);
  }, [navigate]);

  return null;
}

export default HomePage;
