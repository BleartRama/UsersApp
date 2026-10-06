import { Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import Users from "./pages/UsersPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<Users />} />
        </Routes>
    </div>
  );
};

export default App;