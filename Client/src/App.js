import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import AdminRegistration from "./pages/AdminRegistration";
import CustomerRegistration from "./pages/CustomerRegistration";
import AdminLogin from "./pages/AdminLogin";
import Welcome from "./pages/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLogin />} />
        <Route path="/customer" element={<CustomerRegistration />} />
        <Route path="/admin" element={<AdminRegistration />} />
        <Route path="/home" element={<Welcome />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
