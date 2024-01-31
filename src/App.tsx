import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { SIGNUP } from "./constants/api.ts";

import SignupPage from "./pages/SignupPage";

function App() {
  const routes = [
    { path: "/", element: <Navigate to={SIGNUP} /> },
    { path: SIGNUP, element: <SignupPage /> },
  ];

  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, element }) => (
          <Route key={path} path={path} element={element} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
