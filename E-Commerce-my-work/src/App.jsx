import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Auth from "./Auth/Auth";
import Signup from "./Auth/Signup";
import Signin from "./Auth/Signin";
import Products from "./Component/Products";
import ProductDetails from "./Component/ProductDetails";
import About from "./Component/About";
import Header from "./Component/Header";
import Profile from "./Pages/profile";
import Contact from "./Pages/Contact";
import NotFound from "./Pages/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/auth" element={<Auth />}>
          <Route path="signup" element={<Signup />} />
          <Route path="signin" element={<Signin />} />
        </Route>

        <Route path="/" element={<Header />}>
          <Route index element={<Navigate to="/products" />} />
          <Route path="/products" element={<Products />} />
          <Route path="profile" element={<Profile />} />
          <Route path="product/:id" element={<ProductDetails />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
