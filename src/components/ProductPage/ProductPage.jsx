import { useEffect } from "react";
import s from "./ProductPage.module.scss";
import { Container } from "../Layout/Container/Container";
import { fetchProduct } from "../../features/productSlice";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { API_URL } from "../../const";

export const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector((state) => state.product);

  useEffect(() => {
    dispatch(fetchProduct(id)); //создаем запрос к серверу
  }, [id, dispatch]);

  return (
    <section className={s.card}>
      <Container className={s.container}>
        <img src={`${API_URL}/${product.pic}`} alt="" />
      </Container>
    </section>
  );
};
