import { useEffect, useState } from "react";
import s from "./ProductPage.module.scss";
import cn from "classnames";
import { Container } from "../Layout/Container/Container";
import { fetchProduct } from "../../features/productSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../const";
import { ColorList } from "../ColorList/ColorList.jsx";

export const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector((state) => state.product);
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedZize, setSelectedSize] = useState("");

  const handleColorChange = (e) => {
    setSelectedColor(e.target.value);
  };
  const handleSizeChange = (e) => {
    setSelectedSize(e.target.value);
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

          <ProductSize size={product.size} />
        </form>
      </Container>
    </section>
  );
};
