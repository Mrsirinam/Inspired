import { Color } from "./Color/Color";
import { useSelector } from "react-redux";
import s from "./ColorList.module.scss";

export const ColorList = ({ colors }) => {
  const { colorList } = useSelector((state) => state.color);

  return (
    <ul className={s.colorList}>
      {colors.map((id, i) => {
        const color = colorList.find((color) => color.id === id); //узнаем цвет в списке colorList. Обращаемся к id color и сравниваем с id, который пришел по товару
        return <Color key={id} color={color?.code} check={!i} />; // check={!i} ,check будет равен true только у первого элемента
      })}
    </ul>
  );
};
