import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./Components/AnimatedRoutes";
import ScrollToTop from "./Components/ScrollToTop";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import CursorSpotlight from "./Components/CursorSpotlight";

function App() {
  return (
    <Router>
      <CursorSpotlight>
        <ScrollToTop />
        <Navbar />
        <AnimatedRoutes />
        <Footer />
      </CursorSpotlight>
    </Router>
  );
}

export default App;