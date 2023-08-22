import "./App.css";

import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { ProductProvider } from "./context/productcontext";
import { CartProvider } from "./context/cartcontext";
import ErrorPage from "./pages/errorpage";
import Rootlayout from "./rootlayout";
import Home from "./pages/home";
import ProductList from "./pages/productlist";
import Cart from "./pages/cart";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route errorElement={<ErrorPage />}>
      <Route element={<ProductProvider />}>
        <Route element={<CartProvider />}>
          <Route element={<Rootlayout />}>
            <Route path="/" element={<Home />}/>
            <Route path='/products' element={<ProductList/>} />
            <Route path='/cart' element={<Cart />} /> 
          </Route>
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
