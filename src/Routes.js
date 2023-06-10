import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Doctors from "./Doctors";
import Appointment from "./Appointment";
import Login from "./Login";
import Register from "./Register";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="Services" element={<Services />} />
        <Route path="Doctors" element={<Doctors />} />
        <Route path="Appointment" element={<Appointment />} />
        <Route path="Login" element={<Login />} />
        <Route path="Register" element={<Register />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
