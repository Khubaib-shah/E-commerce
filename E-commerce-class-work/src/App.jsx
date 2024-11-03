import Header from "./Component/PrivatePages/Navbar";
import { bouncy } from "ldrs";

bouncy.register();

import "./App.css";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Products from "./Component/PrivatePages/Products";
import ProductsDetails from "./Component/PrivatePages/ProductsDetails";
import NotFound from "./Component/PrivatePages/NotFound";
import Signup from "./Component/Auth/Signup";
import Login from "./Component/Auth/Login";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Profile from "./Component/PrivatePages/Profile";
import { useEffect, useState } from "react";
import { auth, db } from "./Component/Auth/firebase";
import { doc, getDoc } from "firebase/firestore";
import Loader from "./Component/PrivatePages/Loader";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        // Fetch user profile from Firestore
        const userDoc = await getDoc(doc(db, "users", authUser.uid));
        if (userDoc.exists()) {
          setUser({ ...authUser, ...userDoc.data() });
        }
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe(); 
  }, []);

  if (loading) {
    return <Loader/>
  }

  return (
    <BrowserRouter>
      <Header profile={user?.pictureURL} />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route
          path="/login"
          element={user ? <Navigate to="/" /> : <Login />}
        />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
