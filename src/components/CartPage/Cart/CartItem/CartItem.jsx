import { useDispatch, useSelector } from "react-redux";
import s from "./CartItem.module.scss";
import { API_URL } from "../../../../const.js";
import cn from "classnames";
import { Count } from "../../../Count/Count.jsx";
import { addToCart, removeFromCart } from "../../../../features/cartSlice.js";

export const CartItem = ({ id, color, size, count, goodsList }) => {
  const dispatch = useDispatch();
  const { colorList } = useSelector((state) => state.color);
  const item = goodsList.find((item) => item.id === id);

  const handleCountChange = (count) => {
    dispatch(addToCart({ id, color, size, count }));
  };

  const handleRemoveItem = () => {
    dispatch(removeFromCart({ id, color, size }));
  };

  console.log(API_URL);
  return (
    <article className={s.item}>
      <img
        className={s.image}
        src={`${API_URL}/${item?.pic}`}
        alt={item?.title}
      />

      <div className={s.content}>
        <h3 className={s.title}>{item?.title}</h3>
        <p className={s.price}>руб {item?.price}</p>
        <div className={s.vendorCode}>
          <span className={s.subtitle}>Артикул</span>
          <span>{id}</span>
        </div>
      </div>
      <div className={s.prop}>
        <div className={s.color}>
          <p className={cn(s.subtitle, s.colorTitle)}>Цвет</p>
          <div
            className={s.colorItem}
            style={{
              "--data-color": colorList?.find((item) => item.title === color)
                ?.code,
            }}
          ></div>
        </div>

        <div className={s.size}>
          <p className={cn(s.subtitle, s.sizeTitle)}>Размер</p>
          <div className={s.sizeItem}>{size}</div>
        </div>
      </div>
      <button
        className={s.del}
        aria-label="Удалить товар из корзины"
        onClick={handleRemoveItem}
      ></button>
      <Count
        className={s.count}
        count={count}
        handleDecrement={() => {
          handleCountChange(count - 1);
        }}
        handleIncrement={() => {
          handleCountChange(count + 1);
        }}
      />
    </article>
  );
};
