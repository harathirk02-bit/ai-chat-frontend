import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ResumeUpload from "./pages/ResumeUpload";
import Roadmap from "./pages/Roadmap";
import Chatbot from "./pages/Chatbot";

function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/upload" element={<ResumeUpload />} />

        <Route path="/roadmap" element={<Roadmap />} />

        <Route path="/chatbot" element={<Chatbot />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;