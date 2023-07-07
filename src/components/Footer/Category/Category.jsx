import s from "./Category.module.scss";
import sc from "../Footer.module.scss";
import cn from "classnames";
import { NavLink } from "react-router-dom";

export const Category = ({ list }) => (
  <div className={s.category}>
    <h2 className={cn(sc.title, s.categoryTitle)}>КАТАЛОГ</h2>
    <ul className={s.categoryList}>
      {list.map((e) => (
        <li className={s.categorySublist} key={e.link}>
          <h3 className={s.categorySubtitle}>
            <NavLink className={sc.link} to={e.link}>
              {e.title}
            </NavLink>
          </h3>
          <ul className={s.categorySublist}>
            {e.categories.map((el) => (
              <li key={el.link}>
                <NavLink className={sc.link} to={`${e.link}/${el.link}`}>
                  {el.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);
