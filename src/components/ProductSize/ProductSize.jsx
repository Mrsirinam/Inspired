import s from "./ProductSize.module.scss";

export const ProductSize = ({ size, selectedSize, handleSizeChange }) => (
  <div className={s.size}>
    <p className={s.title}>Размер</p>
    <div className={s.list}>
      {size?.map((item) => (
        <label className={s.item} key={item}>
          <input
            className={s.input}
            type="radio"
            name="size"
            value={item}
            checked={selectedSize === item}
            onChange={handleSizeChange}
          />
          <span className={s.check}>{item}</span>
        </label>
      ))}
    </div>
  </div>
);
