import { useDispatch, useSelector } from "react-redux";
import { Goods } from "../Goods/Goods";
import { useEffect } from "react";
import { fetchCategory } from "../../features/goodsSlice";
import { usePageFromSearchParams } from "../../hooks/usePageFromSearchParams";

export const FavoritePage = () => {
  const dispatch = useDispatch();

  //достаем избранное из state
  const favorites = useSelector((state) => state.favorites);
  const page = usePageFromSearchParams(dispatch);

  useEffect(() => {
    if (favorites) {
      const param = { list: favorites };
      if (page) {
        param.page = page;
      }
      dispatch(fetchCategory(param));
    }
  }, [favorites, page, dispatch]);

  return <Goods title="Избранное" />;
};
