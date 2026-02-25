import Layout from "./components/Layout";
import Home from "./pages/Home";
import Watchlist from "./pages/Watchlist";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Route>
      </Routes>
    </Router>
  );
}