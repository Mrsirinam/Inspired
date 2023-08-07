import { Container } from "../../Layout/Container/Container";
import s from "./Top.module.scss";
import cn from "classnames";
//cn - это classNames, s - это style
import logo from "/src/assets/logo.svg";
import { NavLink } from "react-router-dom";
import { ReactComponent as LikeSVG } from "../../../assets/heart.svg";
import { ReactComponent as SearchSVG } from "../../../assets/search.svg";
import { ReactComponent as CartSVG } from "../../../assets/cart.svg";
import { useSelector } from "react-redux";

export const Top = () => {
  const { countItems } = useSelector((state) => state.cart);
  return (
    <div className={s.top}>
      <Container className={cn(Container, s.container)}>
        <a className={cn(s.link, s.phone)} href="tel:+79034034031">
          +7 (903) 490 26 20
        </a>
        <NavLink className={s.logo} to="/">
          <img src={logo} alt="Логотип Inspired" />
        </NavLink>
        <div className={s.navigation}>
          <ul className={s.navList}>
            <li className={s.navitem}>
              <button className={s.link}>
                <SearchSVG />
              </button>
            </li>
            <li className={s.navitem}>
              <NavLink to="/cart" className={s.link}>
                <CartSVG />
                <span className={s.linkCount}>{countItems}</span>
              </NavLink>
            </li>
            <li className={s.navitem}>
              <NavLink to="/favorite" className={cn(s.link, s.like)}>
                <LikeSVG />
              </NavLink>
            </li>
          </ul>
        </div>
      </Container>
    </div>
  );
};
