import logo from "./logo.svg";
import "./App.css";
import LoginForm from "./components/LoginForm";
import { Outlet, Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import LoginFormSucess from "./components/LoginFormSucess";
import Home from './Home';

function App() {
  return (
    <div className="page">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/login" element={<LoginForm />}></Route>
          <Route path="/success" element={<LoginFormSucess />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
