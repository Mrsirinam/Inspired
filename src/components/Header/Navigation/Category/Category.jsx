import { NavLink, useLocation, useParams } from "react-router-dom";
import s from "./Category.module.scss";
import cn from "classnames";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export const Category = () => {
  const { activeGender: gender, categoryList } = useSelector(
    (state) => state.navigation
  );
  return (
    <>
      {categoryList?.map((e, i) => (
        <span key={i}>
          {e[0] === gender && (
            <div className={s.category}>
              {e[1].list?.map((el, i) => (
                <NavLink
                  key={i}
                  className={({ isActive }) =>
                    cn(s.link, isActive && s.linkActive)
                  }
                  to={`catalog/${e[0]}/${el.slug}`}
                >
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

// import { NavLink } from "react-router-dom";
// import s from "./Category.module.scss";
// import { useSelector } from "react-redux";
// import cn from "classnames";
// // import { createNextState } from "@reduxjs/toolkit";

// export const Category = ({ list }) => {
//   const { gender } = useSelector((state) => state.navigation.activeGender);
//   const categoriesList = list.find((item) => item.link === gender);
//   console.log(categoriesList, gender);

//   return (
//     <ul className={s.category}>
//       {categoriesList.categories.map((item) => (
//         <li key={item.link} className={s.item}>
//           <NavLink
//             className={({ isActive }) => cn(s.link, isActive && s.linkActive)}
//             to={`${gender}/${item.link}`}
//           >
//             {item.title}
//           </NavLink>
//         </li>
//       ))}
//     </ul>
//   );
// };

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
