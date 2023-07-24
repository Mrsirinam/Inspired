import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { setPage } from "../features/goodsSlice.js";

export const usePageFromSearchParams = (dispatch) => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const pageURL = searchParams.get("page");

  useEffect(() => {
    dispatch(setPage(pageURL));
  }, [pageURL, dispatch]);

  return pageURL;
};
