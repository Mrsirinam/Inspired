import { useRouteError } from "react-router-dom";
import s from "./ErrorPage.module.scss";

export const ErrorPage = () => {
  const error = useRouteError();
  return (
    <div>
      <h2>Ошибка 404</h2>
      <p>{error?.message ?? "Неизвестная ошибка"}</p>
    </div>
  );
};
