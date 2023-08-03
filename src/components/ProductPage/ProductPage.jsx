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
import { Count } from "../Count/Count";
import { Goods } from "../Goods/Goods";
import { fetchCategory } from "../../features/goodsSlice";
import { BtnLike } from "../BtnLike/BtnLike";
import { addToCart } from "../../features/cartSlice.js";

export const ProductPage = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { product } = useSelector((state) => state.product);
  const { gender, category, colors } = product;
  const { colorList } = useSelector((state) => state.color);

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

  useEffect(() => {
    dispatch(
      fetchCategory({ gender, category, count: 4, top: true, exclude: id })
    ); //создаем запрос к серверу по гендеру и категориям. top: true приходит с API и прописаны на сервере; exclude: id исключаем повторяющиеся товары
  }, [gender, category, id, dispatch]);

  useEffect(() => {
    if (colorList?.length && colors?.length) {
      setSelectedColor(colorList.find((color) => color.id === colors[0]).title);
    }
  }, [colorList, colors]);

  //Хук useEffect принимает два аргумента:
  // Первый аргумент - это функция, которая будет выполнена после отрисовки компонента и каждый раз, когда изменяется хотя бы одна из зависимостей, перечисленных во втором аргументе.
  // Второй аргумент - это массив зависимостей. Если хотя бы одна из зависимостей изменяется, функция useEffect будет выполнена снова.
  // Внутри функции useEffect происходит проверка, есть ли элементы в массивах colorList и colors (выражения colorList.length и colors.length принимают значение true). Если оба массива содержат элементы, выполняется следующий шаг.
  // Затем выбирается первый цвет из массива colors (colors[0]) и производится поиск соответствующего объекта цвета в массиве colorList с помощью метода find. Метод find используется для поиска элемента в массиве, который удовлетворяет заданному условию. В данном случае он ищет объект цвета, у которого свойство id соответствует первому элементу массива colors.
  // Если найден объект цвета, то выбран цвет путем извлечения свойства title из найденного объекта цвета, и этот цвет устанавливается с помощью вызова setSelectedColor с соответствующим значением.
  // В итоге, этот хук useEffect используется для автоматического обновления выбранного цвета каждый раз, когда изменяется массив colorList или colors. Он гарантирует, что состояние selectedColor всегда актуально и соответствует цвету, соответствующему первому элементу массива colors.

  return (
    <>
      <section className={s.card}>
        <Container className={s.container}>
          <img
            className={s.image}
            src={`${API_URL}/${product.pic}`}
            alt={`${product.title} ${product.description}`}
          />
          <form
            className={s.content}
            onSubmit={(e) => {
              e.preventDefault();
              dispatch(
                addToCart({
                  id,
                  color: selectedColor,
                  size: selectedSize,
                  count,
                })
              );
            }}
          >
            <h2 className={s.title}>{product.title}</h2>
            <p className={s.price}>руб {product.price}</p>
            <div className={s.vendorCode}>
              <span className={s.subtitle}>Артикул</span>
              <span className={s.id}>{product.id}</span>
            </div>

            <div className={s.color}>
              <p className={cn(s.subtitle, s.colorTitle)}>Цвет</p>
              <ColorList
                colors={colors}
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

              <BtnLike id={id} />
            </div>
          </form>
        </Container>
      </section>
      <Goods title="Вам также может понравиться" />
    </>
  );
};
