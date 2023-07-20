import s from "./ProductSize.module.scss";

export const ProductSize = ({ sizeList, selectedSize, handleSelectedSize }) => {
  //console.log(sizeList);
  return (
    <div className={s.size}>
      <p className={s.title}>Размер</p>
      <div className={s.list}>
        {sizeList?.map((e, i) => {
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
