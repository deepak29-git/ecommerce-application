import "./App.css";
import { Products } from "./Pages/Product/Products";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home/Home";
import { WishList } from "./Pages/WishList/WishList";
import { Login } from "./Pages/Login/Login";
import { Signup } from "./Pages/Signup/Signup";
import { Cart } from "./Pages/Cart/Cart";
import { NotFound } from "./Pages/NotFound/NotFound";
import { ProductDetails } from "./Pages/ProductDetails/ProductDetails";
import { OrderSummary } from "./Pages/OrderSummary/OrderSummary";
import { Address } from "./components/Address/Address";
import { SingleCategory } from "./Pages/SingleCategory/SingleCategory";
import { Header } from "./components/Header/Header";
import { RequiresAuth } from "./components/RequiresAuth/RequiresAuth";
import { useAuth } from "./Context/auth-context";

function App() {
  const { auth } = useAuth();
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetails />} />

        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <WishList />
            </RequiresAuth>
          }
        />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/order_summary"
          element={
            <RequiresAuth>
              <OrderSummary />
            </RequiresAuth>
          }
        />
        <Route
          path="/address"
          element={
            <RequiresAuth>
              <Address />
            </RequiresAuth>
          }
        />

        <Route path="/category/:categoryName" element={<SingleCategory />} />
        {!auth && <Route path="/login" element={<Login />} />}
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
