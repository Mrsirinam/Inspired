import { NavLink } from "react-router-dom";
import { Container } from "../Layout/Container/Container";
import s from "./Banner.module.scss";
import { API_URL } from "../../const";

export const Banner = ({ data }) =>
  data && (
    <section
      className={s.banner}
      style={{
        backgroundImage: `url(${API_URL}${data.bg.desktop})`,
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
  );
