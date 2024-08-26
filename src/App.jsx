import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig"; // Asegúrate de que la ruta es correcta
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import ListShips from "./pages/ListShips/ListShips";
import Header from "./components/Header/Header";
import ShipDetail from "./pages/ShipDetail/ShipDetail";
import { ShipProvider } from "./context/ShipContext";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header user={user} />
        <main className="flex-grow">
          <ShipProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/register" element={user ? <Navigate to="/" /> : <Register />} />
              <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
              <Route path="/starships" element={user ? <ListShips /> : <Navigate to="/login" />} />
              <Route path="/starships/:id" element={user ? <ShipDetail /> : <Navigate to="/login" />} />
            </Routes>
          </ShipProvider>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
