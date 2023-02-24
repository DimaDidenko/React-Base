import React from "react";
import { getPagesArray } from "../../../utils/pages";

const Pagination = ({ totalPages, page, changePage }) => {
  let pagesArrey = getPagesArray(totalPages);
  return (
    <div className="page__wrapper">
      {pagesArrey.map((p) => (
        <span
          onClick={() => changePage(p)}
          key={p}
          className={page === p ? "page page__current" : "page"}
        >
          {p}
        </span>
      ))}
    </div>
  );
};

export default Pagination;
