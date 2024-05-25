import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Layout
import LayoutItemListContainer from "./layout/LayoutItemListContainer";

import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Cart from "./components/Cart";
import CheckOutForm from "./components/CheckOutForm";
//page error
import Error404 from "./pages/Error404";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LayoutItemListContainer />}>
          <Route index element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<CheckOutForm />} />
        </Route>

        <Route path="products/category/:id" element={<ItemListContainer />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
