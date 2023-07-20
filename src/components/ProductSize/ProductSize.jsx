import s from "./ProductSize.module.scss";

export const ProductSize = ({ sizeList, selectedSize, handleSelectedSize }) => {
  //console.log(sizeList);
  return (
    <div className={s.size}>
      <p className={s.title}>Размер</p>
      <div className={s.list}>
        {sizeList?.map((e, i) => {
          // {sizeList?.map((e, i) тоже самое, что и sizeList ? sizeList.map, то есть проверка на наличие массива. Если он есть, то перебираем
          return (
            <label key={i} className={s.item}>
              <input
                className={s.input}
                type="radio"
                name="size"
                value={e}
                checked={selectedSize ? selectedSize === e : 0}
                onChange={handleSelectedSize}
              />
              <span className={s.check}>{e}</span>
            </label>
          );
        })}
      </div>
    </div>
  );
};
