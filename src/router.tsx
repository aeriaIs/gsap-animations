import {} from "react";
import { Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<div>Test routing</div>} />
    </Routes>
  );
};

export default AppRouter;
