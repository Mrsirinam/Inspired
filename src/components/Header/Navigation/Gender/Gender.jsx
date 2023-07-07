import { NavLink } from "react-router-dom";
import s from "./Gender.module.scss";
import cn from "classnames";

export const Gender = ({ list }) => (
  <ul className={s.gender}>
    {list.map((e) => (
      <li className={s.item} key={e.link}>
        <NavLink
          className={({ isActive }) => cn(s.link, isActive && s.linkActive)}
          to={e.link}
        >
          {e.title}
        </NavLink>
      </li>
    ))}
  </ul>
);
