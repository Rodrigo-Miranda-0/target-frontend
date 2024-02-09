import { BrowserRouter, Routes, Route } from "react-router-dom";

import { routes } from "./routes/router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map(({ path, component }) => (
          <Route key={path} path={path} Component={component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
