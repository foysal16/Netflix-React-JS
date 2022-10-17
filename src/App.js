import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import { AuthContextProvider } from "./context/AuthContext";
import Account from "./Pages/Account";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import SingUp from "./Pages/SingUp";
import Footer from "./component/Footer";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/singUp" element={<SingUp />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </>
  );
}

export default App;
