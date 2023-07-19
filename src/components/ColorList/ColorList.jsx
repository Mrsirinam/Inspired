import { Color } from "./Color/Color";
import { useSelector } from "react-redux";
import s from "./ColorList.module.scss";
import { ColorLabel } from "./ColorLabel/ColorLabel";

export const ColorList = ({ colors, selectedColor, handleColorChange }) => {
  const { colorList } = useSelector((state) => state.color);

  return handleColorChange ? (
    <div className={s.colorList}>
      {colors?.map((id, i) => {
        const color = colorList.find((color) => color.id === id);
        return (
          <ColorLabel
            key={id}
            color={color}
            check={!i}
            selectedColor={selectedColor}
            handleColorChange={handleColorChange}
          />
        );
      })}
    </div>
  ) : (
    <ul className={s.colorList}>
      {colors.map((id, i) => {
        const color = colorList.find((color) => color.id === id); //узнаем цвет в списке colorList. Обращаемся к id color и сравниваем с id, который пришел по товару
        return <Color key={id} color={color?.code} check={!i} />; // check={!i} ,check будет равен true только у первого элемента
      })}
    </ul>
  );
};
