import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Root } from "./routes/Root";
import { MainPage } from "./components/MainPage/MainPage";
import { ErrorPage } from "./components/ErrorPage/ErrorPage";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchNavigation } from "./features/navigationSlice";
import { fetchColors } from "./features/colorSlice";
import { ProductPage } from "./components/ProductPage/ProductPage";
import { FavoritePage } from "./components/FavoritePage/FavoritePage";
import { CartPage } from "./components/CartPage/CartPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to="/catalog/women" />} />
      <Route path="/favorite" element={<FavoritePage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/product/:id/" element={<ProductPage />} />
      <Route path="/catalog/:gender/:category?" element={<MainPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<Root />}>
//       <Route index element={<Navigate to="/women" />} />
//       <Route path="catalog/:gender/:category?" element={<MainPage />} />
//       <Route path="*" element={<ErrorPage />} />
//     </Route>
//   )
// );

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNavigation());
    dispatch(fetchColors());
  }, [dispatch]);
  return <RouterProvider router={router}></RouterProvider>;
};
