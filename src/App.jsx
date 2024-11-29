import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./Component/PrivatePages/Navbar";
import Products from "./Component/PrivatePages/Products";
import ProductsDetails from "./Component/PrivatePages/ProductsDetails";
import NotFound from "./Component/PrivatePages/NotFound";
import Signup from "./Auth/Signup";
import Login from "./Auth/Login";
import Profile from "./Component/PrivatePages/Profile";
import Loader from "./Component/PrivatePages/Loader";
import About from "./Component/PrivatePages/About";

import { auth, db } from "./firebase";
import { doc, getDoc } from "firebase/firestore";
import TeamPage from "./Component/PrivatePages/TeamPage";
import Footer from "./Component/PrivatePages/Footer";

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      console.log("Auth User:", authUser);

      if (authUser) {
        try {
          const userDoc = await getDoc(doc(db, "users", authUser.uid));
          if (userDoc.exists()) {
            console.log("User Data:", userDoc.data());
            setUser({ ...authUser, ...(userDoc?.data() || {}) });
          } else {
            console.log("No user document found in Firestore");
            setUser(null);
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
          setUser(null);
        }
      } else {
        console.log("No user signed in.");
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);
  if (loading) {
    return <Loader />;
  }
  console.log(user);

  return (
    <BrowserRouter>
      {user ? <Header profile={user.pictureURL} /> : <Header />}
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/products/:id" element={<ProductsDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<TeamPage />} />

        <Route
          path="/profile"
          element={user ? <Profile user={user} /> : <Navigate to="/login" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
