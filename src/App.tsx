import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Users from "./pages/UsersPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
    </>
  );
};

export default App;