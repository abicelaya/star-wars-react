import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ListShips from "./pages/ListShips/ListShips";

import Header from "./components/Header/Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<div>Home</div>} />
        <Route path="/starships" element={<ListShips />} />
      </Routes>
    </Router>
  );
}

export default App;
