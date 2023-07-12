import { NavLink } from "react-router-dom";
import s from "./Category.module.scss";
import { useSelector } from "react-redux";
import cn from "classnames";

export const Category = () => {
  const { activeGender, categories } = useSelector((state) => state.navigation);

  return (
    <ul className={s.category}>
      {categories[activeGender]?.list?.map((item) => (
        <li key={item.slug} className={s.item}>
          <NavLink
            className={({ isActive }) => cn(s.link, isActive && s.linkActive)}
            to={`/catalog/${activeGender}/${item.slug}`}
          >
            {item.title}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

// <>
//   {list.map((e, i) => (
//     <span key={i}>
//       {e.link === locate && (
//         <div className={s.category}>
//           {e.categories.map((el, i) => (
//             <NavLink key={i} className={s.link} to={`${e.link}/${el.link}`}>
//               {el.title}
//             </NavLink>
//           ))}
//         </div>
//       )}
//     </span>
//   ))}
// </>
