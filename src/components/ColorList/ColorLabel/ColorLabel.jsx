import { useEffect, useRef } from "react";
import s from "./ColorLabel.module.scss";
import cn from "classnames";

export const ColorLabel = ({
  color,
  check,
  selectedColor,
  handleColorChange,
}) => {
  const colorRef = useRef(null);

  useEffect(() => {
    colorRef.current?.style?.setProperty("--data-color", color?.code);
  }, [color]);

  return (
    <label className={s.color} ref={colorRef}>
      <input
        className={s.input}
        type="radio"
        name="color"
        value={color?.title}
        checked={selectedColor ? selectedColor === color?.title : check} //проверяем, выбран ли цвет. Смотрим наличие selectedColor, сравниваем его с {color?.title} Мы заходим на товар, пока не выбрали цвет, автоматически будет выбираться первый цвет товара, если кликнем на нужный цвет, то появится selectedColor, он будет сравниваться с цветом value={color?.title} и его отмечать
        onChange={handleColorChange}
      />
      <span className={s.colorCheck}></span>
    </label>
  );
};

// prettier-ignore-start
// const a = 'a'; const b = 'b';
// prettier-ignore-end
