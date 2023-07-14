import { NavLink } from "react-router-dom";
import { Container } from "../Layout/Container/Container";
import s from "./Banner.module.scss";
import { API_URL } from "../../const";
import { useEffect, useState } from "react";
import { useMedia } from "react-use";

export const Banner = ({ data }) => {
  const isMobile = useMedia("(max-width: 540px)");
  const isTablet = useMedia("(max-width: 768px)");
  const isLaptop = useMedia("(max-width: 1024px)");
  const [bgURL, setBgURL] = useState("");

  useEffect(() => {
    if (isMobile) {
      setBgURL(`${API_URL}/${data?.bg.mobile}`);
    } else if (isTablet) {
      setBgURL(`${API_URL}/${data?.bg.tablet}`);
    } else if (isLaptop) {
      setBgURL(`${API_URL}/${data?.bg.laptop}`);
    } else {
      setBgURL(`${API_URL}/${data?.bg.desktop}`);
    }
  }, [isMobile, isTablet, isLaptop, data]);

  return (
    data && (
      <section
        className={s.banner}
        style={{
          backgroundImage: `url(${bgURL})`,
        }}
      >
        <Container>
          <div className={s.content}>
            <h2 className={s.title}>{data.description}</h2>
            <NavLink className={s.link} to={`/product/${data.id}`}>
              Перейти
            </NavLink>
          </div>
        </Container>
      </section>
    )
  );
};
