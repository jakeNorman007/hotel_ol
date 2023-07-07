import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Booking from "./pages/Booking";
import Rooms from "./pages/Rooms";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./ui/Layout";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Navigate replace to="Dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="account" element={<Account />} />
            <Route path="booking" element={<Booking />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="settings" element={<Settings />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
