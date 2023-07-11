import { Outlet } from "react-router-dom";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Layout/Main/Main";

export const Root = () => {
  return (
    <>
      <Header />
      <Main>
        <Outlet />
      </Main>
      <Footer />
    </>
  );
};

// const list = [
//   {
//     link: "women",
//     title: "Женщины",
//     categories: [
//       { link: "bras", title: "Бюстгалтеры" },
//       { link: "panties/", title: "Трусы" },
//       { link: "socks/", title: "Носки" },
//       { link: "bathrobes/", title: "Халаты" },
//       { link: "thermal/", title: "Термобелье" },
//       { link: "pijamas/", title: "Пижамы" },
//     ],
//   },
//   {
//     link: "men",
//     title: "Мужчины",
//     categories: [
//       { link: "panties/", title: "Трусы" },
//       { link: "socks/", title: "Носки" },
//       { link: "bathrobes/", title: "Халаты" },
//       { link: "thermal/", title: "Термобелье" },
//     ],
//   },
// ];
