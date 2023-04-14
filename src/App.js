import AuthUserLayout from "@/layouts/AuthUserLayout";
import GuestLayout from "@/layouts/GuestLayout";
import Dashboard from "@/pages/Dashboard";
import Index from "@/pages/Index";

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
