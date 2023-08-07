import { useSelector } from "react-redux";
import s from "./Goods.module.scss";
import { Container } from "../Layout/Container/Container";
import { Product } from "../Product/Product";
import { Pagination } from "../Pagination/Pagination";

export const Goods = ({ title }) => {
  const { goodsList, totalCount } = useSelector((state) => state.goods);

  return (
    <section className={s.goods}>
      <Container>
        <h2 className={s.title}>
          {title ?? "Новинки"}
          {totalCount && totalCount > 0 ? <sup>&nbsp;({totalCount})</sup> : ""}
        </h2>
        <ul className={s.list}>
          {goodsList.map((item) => (
            <li key={item.id}>
              <Product {...item} />
            </li>
          ))}
        </ul>
        <Pagination />
      </Container>
    </section>
  );
};
