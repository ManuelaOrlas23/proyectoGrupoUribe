import { createBrowserRouter,BrowserRouter as Router, Routes, Route, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/layouts/pages/Home";
import AmericanEagles from "./components/layouts/pages/AmericanEagles";
import Chevignon from "./components/layouts/pages/Chevignon";
import Esprit from "./components/layouts/pages/Esprit";
import GstarRaw from "./components/layouts/pages/GstarRaw";
import NavBar from "./components/NavBar";
import Login from "./components/layouts/auth/Login";
import Registro from "./components/layouts/auth/Registro";

let router = createBrowserRouter([
  {
    path: "/Login",
    element: <Login />,
  },
  {
    path: "/Registro",
    element: <Registro />,
  },
]);

function App() {
  return (
    <div className="bg-sky-300">
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Americaneagle" element={<AmericanEagles />} />
        <Route path="Chevignon" element={<Chevignon />} />
        <Route path="Esprit" element={<Esprit />} />
        <Route path="Gstarraw" element={<GstarRaw />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
      </Routes>
    </Router>
    <RouterProvider router={router} />
  </div>
  );
}

export default App;
