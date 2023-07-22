import { ReactComponent as LikeSVG } from "../../assets/heart.svg";
import s from "./BtnLike.module.scss";

export const BtnLike = ({ id }) => {
  return (
    <button className={s.like} aria-label="Добавить в избранное" type="button">
      <LikeSVG />
    </button>
  );
};
