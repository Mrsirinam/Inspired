import {
  Navigate,
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import { Footer } from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { Root } from "./routes/Root";
import { MainPage } from "./Components/MainPage/MainPage";
import { ErrorPage } from "./Components/ErrorPage/ErrorPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Navigate to="/woman" />} />
      <Route path="woman" element={<MainPage gender="woman" />} />
      <Route path="man" element={<MainPage gender="man" />} />
      <Route path="woman/:category" element={<MainPage gender="woman" />} />
      <Route path="man/:category" element={<MainPage gender="man" />} />
      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

export const App = () => (
  <RouterProvider router={router}>
    <Header />
    <Footer />
  </RouterProvider>
);
