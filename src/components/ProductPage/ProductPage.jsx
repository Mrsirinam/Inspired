import { useEffect, useState } from "react";
import s from "./ProductPage.module.scss";
import cn from "classnames";
import { Container } from "../Layout/Container/Container";
import { fetchProduct } from "../../features/productSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../const";
import { ColorList } from "../ColorList/ColorList.jsx";
import { ProductSize } from "../ProductSize/ProductSize";
import { ReactComponent as Like } from "../../assets/heart.svg";
import { Count } from "../Count/Count";

export const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector((state) => state.product);

  const [count, setCount] = useState(1);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedSize, setSelectedsize] = useState("");

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
  };
  const handleDecrement = () => {
    if (count > 1) {
      setCount((prev) => --prev);
    }
  };

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };
  const handleSelectedSize = (e) => {
    setSelectedsize(e.target.value);
  };

  useEffect(() => {
    dispatch(fetchProduct(id)); //создаем запрос к серверу
  }, [id, dispatch]);

  return (
    <section className={s.card}>
      <Container className={s.container}>
        <img
          src={`${API_URL}/${product.pic}`}
          alt={`${product.title} ${product.description}`}
        />
        <form className={s.content}>
          <h2 className={s.title}>{product.title}</h2>
          <p className={s.price}>руб {product.price}</p>
          <div className={s.vendorCode}>
            <span className={s.subtitle}>Артикул</span>
            <span className={s.id}>{product.id}</span>
          </div>

          <div className={s.color}>
            <p className={cn(s.subtitle, s.colorTitle)}>Цвет</p>
            <ColorList
              colors={product.colors}
              selectedColor={selectedColor}
              handleColorChange={handleColorChange}
            />
          </div>

          <ProductSize
            sizeList={product.size}
            selectedSize={selectedSize}
            handleSelectedSize={handleSelectedSize}
          />
          <div className={s.description}>
            <p className={cn(s.subtitle, s.descriptionTitle)}>Описание</p>
            <p className={s.descriptionText}>{product.description}</p>
          </div>

          <div className={s.control}>
            <Count
              className={s.count}
              count={count}
              handleIncrement={handleIncrement}
              handleDecrement={handleDecrement}
            />
            <button className={s.addCart} type="submit">
              В корзину
            </button>
            <button
              className={s.favorite}
              aria-label="Добавить в избранное"
              type="button"
            >
              <Like />
            </button>
          </div>
        </form>
      </Container>
    </section>
  );
};
