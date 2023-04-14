import AuthUserLayout from "./layouts/AuthUserLayout";
import GuestLayout from "./layouts/GuestLayout";
import Dashboard from "./views/Dashboard";
import Index from "./views/Index";

import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<GuestLayout />}>
          <Route path="" element={<Index />}  />
      </Route>
      <Route path="/" element={<AuthUserLayout />}>
          <Route path="dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
