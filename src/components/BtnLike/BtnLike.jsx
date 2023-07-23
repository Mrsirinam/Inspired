import { useDispatch, useSelector } from "react-redux";
import { ReactComponent as LikeSVG } from "../../assets/heart.svg";
import s from "./BtnLike.module.scss";
import {
  removeFromFavorites,
  addToFavorites,
} from "../../features/favoritesSlice";
import cn from "classnames";

export const BtnLike = ({ id }) => {
  const dispatch = useDispatch();

  const isFavorite = useSelector((state) => state.favorites.includes(id));

  const handleToggleFavorite = () => {
    if (isFavorite) {
      dispatch(removeFromFavorites({ id }));
    } else {
      dispatch(addToFavorites({ id }));
    }
  };

  return (
    <button
      className={isFavorite ? cn(s.like, s.active) : s.like}
      aria-label="Добавить в избранное"
      type="button"
      onClick={handleToggleFavorite}
    >
      <LikeSVG />
    </button>
  );
};
