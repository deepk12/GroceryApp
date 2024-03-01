import { BrowserRouter,Route,Routes } from "react-router-dom";
import App from "./App";
import About from './About';
import Services from "./Sevices";
import Contact from "./Contact";

const Rout = () => {
    console.log("rout");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/service" element={<Services />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Rout;
