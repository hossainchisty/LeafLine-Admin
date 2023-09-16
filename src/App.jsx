/* eslint-disable react-hooks/exhaustive-deps */

import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Signin from "./pages/auth/Signin";
import Signup from "./pages/auth/Signup";
import AddBook from "./pages/Admin/AddBook";
import AdminStore from "./pages/Admin/AdminStore";
import AdminDashboard from "./components/AdminDashboard";
import EmailVerification from "./components/Auth/EmailVerification";
import AdminUsers from "./pages/Admin/AdminUsers";

function App() {
  return (
    <div>
      <Header />
      <div className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<AdminDashboard />} />
          <Route path="/admin/add" element={<AddBook />} />
          <Route path="/admin/users" element={<AdminUsers />} />
          <Route path="/admin/books" element={<AdminStore />} />
          {/* Route related to authentication */}
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/verify-email/:token" element={<EmailVerification />} />

          {/* Route related to user profile */}
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
