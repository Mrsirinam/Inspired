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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to="/women" />} />
      <Route path="women" element={<MainPage gender="women" />} />
      <Route path="men" element={<MainPage gender="men" />} />
      <Route path="women/:category" element={<MainPage gender="women" />} />
      <Route path="men/:category" element={<MainPage gender="men" />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchNavigation());
  }, [dispatch]);
  return <RouterProvider router={router}></RouterProvider>;
};
