import s from "./Category.module.scss";
import sc from "../Footer.module.scss";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

export const Category = () => {
  const { genderList, categories } = useSelector((state) => state.navigation);

  return (
    <div className={s.category}>
      <h2 className={cn(sc.title, s.categoryTitle)}>КАТАЛОГ</h2>
      <ul className={s.categoryList}>
        {genderList.map((gender) => (
          <li className={s.categorySublist} key={gender}>
            <h3 className={s.categorySubtitle}>
              <NavLink className={sc.link} to={`/catalog/${gender}`}>
                {categories[gender].title}
              </NavLink>
            </h3>
            <ul className={s.categorySublist}>
              {categories[gender].list.map((category) => (
                <li key={category.slug}>
                  <NavLink
                    className={sc.link}
                    to={`/catalog/${gender}/${category.slug}`}
                  >
                    {category.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

// export const Category = ({ list }) => {
//   const location = useLocation();
//   const gender = location.pathname.split("/")[1] || "women";

//   return (
//     <div className={s.category}>
//       <h2 className={cn(sc.title, s.categoryTitle)}>КАТАЛОГ</h2>
//       <ul className={s.categoryList}>
//         {list.map((e) => (
//           <li className={s.categorySublist} key={e.link}>
//             <h3 className={s.categorySubtitle}>
//               <NavLink className={sc.link} to={e.link}>
//                 {e.title}
//               </NavLink>
//             </h3>
//             <ul className={s.categorySublist}>
//               {e.categories.map((el) => (
//                 <li key={el.link}>
//                   <NavLink className={sc.link} to={`${e.link}/${el.link}`}>
//                     {el.title}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
