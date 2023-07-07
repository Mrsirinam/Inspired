import { NavLink, useLocation } from "react-router-dom";
import s from "./Category.module.scss";

export const Category = ({ list }) => {
  const locate = useLocation().pathname.slice(1).split("/", 1).join();
  return (
    <>
      {list.map((e, i) => (
        <span key={i}>
          {e.link === locate && (
            <div className={s.category}>
              {e.categories.map((el, i) => (
                <NavLink key={i} className={s.link} to={`${e.link}/${el.link}`}>
                  {el.title}
                </NavLink>
              ))}
            </div>
          )}
        </span>
      ))}
    </>
  );
};
