import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Example from "./pages/Example";
import Clients from "./pages/Clients";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Navbar />
        <div className="p-6">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/example" element={<Example />} />
            <Route path="/clients" element={<Clients />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
