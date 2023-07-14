import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutMe from "./pages/AboutMe";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Home from "./pages/Home";

function AppRouter() {
    return (
        <Router>
            <Routes>
                <Route path="AboutMe" element={<AboutMe />} />
                <Route path="Home" element={<Home />} />
                <Route path="Contacto" element={<Contact />} />
                <Route path="Proyectos" element={<Projects />} />
            </Routes>
        </Router>
    );
}

export default AppRouter;