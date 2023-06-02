import logo from "./logo.svg";
import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./routes/HomePage";
import Authenticate from "./routes/Authenticate";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<Authenticate />} />
      </Routes>
    </Router>
  );
}

export default App;
