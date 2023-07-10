import { NavLink, useLocation } from "react-router-dom";
import s from "./Gender.module.scss";
import cn from "classnames";
import { useSelector } from "react-redux";

export const Gender = () => {
  const { activeGender, genderList, categories } = useSelector(
    (state) => state.navigation
  );

  return (
    <ul className={s.gender}>
      {genderList.map((gender) => (
        <li className={s.item} key={gender}>
          <NavLink
            className={({ isActive }) =>
              cn(s.link, (isActive || gender === activeGender) && s.linkActive)
            }
            to={gender}
          >
            {categories[gender].title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
