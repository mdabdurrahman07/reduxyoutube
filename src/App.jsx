import { Route, BrowserRouter as Router, Routes } from "react-router";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Navbar from "./components/navbar/Navbar";
import Video from "./pages/Video.jsx";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/videos/:videoID" element={<Video/>}></Route>
      </Routes>

      <Footer />
    </Router>
  );
};

export default App;
