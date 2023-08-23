import React from "react";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Bookings from "./pages/Bookings";
import Booking from "./pages/Booking";
import CheckIn from "./pages/CheckIn";
import Rooms from "./pages/Rooms";
import Settings from "./pages/Settings";
import Users from "./pages/Users";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
import Layout from "./ui/Layout";
import ProtectedRoutes from "./ui/ProtectedRoutes";
import "./index.css";

// sets up the cache behind the scenes
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Routes>
          <Route element={<ProtectedRoutes><Layout /></ProtectedRoutes>}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="account" element={<Account />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="bookings/:bookingId" element={<Booking />} />
            <Route path="checkin/:bookingId" element={<CheckIn />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="settings" element={<Settings />} />
            <Route path="users" element={<Users />} />
          </Route>
          <Route path="login" element={<Login />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>

      {/* react hot toast for alerts and successed */}
      <Toaster position="top-center" gutter={12} containerStyle={{ margin: "8px" }} toastOptions={{ success: {
          duration: 3000, }, error: { duration: 5000, }, style: { fontSize: "16px", maxWidth: "500px",
          padding: "16px 24px", backgroundColor: "white", color: "black", },}}/>
    </QueryClientProvider>
  );
}

export default App;
