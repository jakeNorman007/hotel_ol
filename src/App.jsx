import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navigate replace to="dashboard" />} />
          <Route path="dashboard" element={<dashboard />} />
          <Route path="account" element={<account />} />
          <Route path="booking" element={<booking />} />
          <Route path="login" element={<login />} />
          <Route path="rooms" element={<rooms />} />
          <Route path="settings" element={<settings />} />
          <Route path="users" element={<users />} />
          <Route path="*" element={<pageNotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
