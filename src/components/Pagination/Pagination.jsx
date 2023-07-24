import { useDispatch, useSelector } from "react-redux";
import { NavLink, useLocation } from "react-router-dom";
import s from "./Pagintaion.module.scss";
import cn from "classnames";
import { setPage } from "../../features/goodsSlice";

export const Pagination = () => {
  const pathname = useLocation().pathname;
  const { page, pages } = useSelector((state) => state.goods);
  const dispatch = useDispatch();

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  };

  const handlePrevPage = () => {
    if (page > 1) {
      handlePageChange(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < pages) {
      handlePageChange(+page + 1);
    }
  };

  const renderPaginationItems = () => {
    const paginationItems = [];

    let startPage = Math.max(1, page - 1);
    let endPage = Math.min(startPage + 2, pages);

    for (let i = startPage; i <= endPage; i++) {
      paginationItems.push(
        <li key={i} className={s.item}>
          <NavLink
            to={`${pathname}?page=${i}`}
            className={cn(s.link, i === +page ?? s.linkActive)}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </NavLink>
        </li>
      );
    }
    return paginationItems;
  };

  return (
    <div className={s.pagination}>
      <button className={s.arrow} onClick={handlePrevPage} disabled={page <= 2}>
        &lt;
      </button>
      <ul className={s.list}>{renderPaginationItems()}</ul>
      <button
        className={s.arrow}
        onClick={handleNextPage}
        disabled={page >= pages - 1 || pages <= 3}
      >
        &gt;
      </button>
    </div>
  );
};
