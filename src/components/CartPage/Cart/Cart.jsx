import { Container } from "../../Layout/Container/Container";
import s from "./Cart.module.scss";
import { CartItem } from "./CartItem/CartItem";

export const Cart = ({ cartItems, goodsList }) => {
  const totalPrice = cartItems.reduce((sum, item) => {
    const product = goodsList.find((product) => product.id === item.id); //ищем продукт, сравниваем id продукта с id item.
    if (product) {
      return sum + product.price * item.count;
    } else {
      return sum;
    }
  }, 0);
  //перебираем товары, задаем sum=0 (первая итерация)
  return (
    <section className={s.cart}>
      <Container>
        <h2 className={s.title}>Корзина</h2>
        {goodsList.length ? (
          <ul className={s.list}>
            {cartItems.map((item) => (
              <li
                key={`${item.id}-${item.color}-${item.size}`}
                className={s.item}
              >
                <CartItem {...item} goodsList={goodsList} />
              </li>
            ))}
          </ul>
        ) : (
          <h3 className={s.empty}>В корзине пусто</h3>
        )}
        <div className={s.total}>
          <p>Итого:</p>
          <p>руб {totalPrice}</p>
        </div>
      </Container>
    </section>
  );
};
