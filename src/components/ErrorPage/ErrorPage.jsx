import { useRouteError, useLocation, useNavigate } from "react-router-dom";
import s from "./ErrorPage.module.scss";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchNavigation } from "../../features/navigationSlice.js";
import { fetchColors } from "../../features/colorSlice.js";
import { useRef } from "react";

export const ErrorPage = () => {
  const routeError = useRouteError();
  const { status } = useSelector((state) => state.statusServer);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const timerIdRef = useRef(null);

  useEffect(() => {
    if (status && location.pathname === "/404") {
      navigate("/");
    }
  }, [status, location, navigate]);

  useEffect(() => {
    if (!status && location.pathname === "/404") {
      clearInterval(timerIdRef.current);

      timerIdRef.current = setInterval(() => {
        dispatch(fetchNavigation());
        dispatch(fetchColors());
      }, 3000);
    }

    return () => {
      clearInterval(timerIdRef.current);
    };
  }, [dispatch, status, location]);

  return (
    <div className={s.error}>
      <h2 className={s.title}>Произошла ошибка, попробуйте зайти позже</h2>
      <p className={s.message}>{routeError?.message ?? "Неизвестная ошибка"}</p>
    </div>
  );
};
