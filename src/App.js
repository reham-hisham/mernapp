import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/Login";
import Info from './pages/Info'
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/info" element={<Info/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
