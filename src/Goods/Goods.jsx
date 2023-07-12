import { useSelector } from "react-redux";
import s from "./Goods.module.scss";
import { Container } from "../components/Layout/Container/Container";
import { Product } from "../components/Product/Product";

export const Goods = ({ categoryData }) => {
  const { goodsList } = useSelector((state) => state.goods);

  const title = categoryData?.title ?? "Новинки";

  //обращаемся к категориям, проверяем наличие категории (например в детском ее нет), находим активный гендер, проверяем также наличие и ищем item у которого item.slug равен нашей категории, когда найдем, то обратимся к его заголовку title. Если не найдем, то возвращаем Новинки

  return (
    <section className={s.goods}>
      <Container>
        <h2 className={s.title}>{title} </h2>
        <ul className={s.list}>
          {goodsList.map((item) => (
            <li key={item.id}>
              <Product {...item} />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
};
