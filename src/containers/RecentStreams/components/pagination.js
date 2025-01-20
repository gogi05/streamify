import React from "react";
import { OutlineButton } from "../../../components/Button";

const Pagination = ({ currentPage, totalPages, onPageChange, hasMoreData }) => {
  return (
    <div className="flex justify-between items-center mt-12">
      <OutlineButton
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        &#8592; Previous
      </OutlineButton>
      <span className="text-sm">
        Page {currentPage} of {totalPages}
      </span>
      <OutlineButton
        onClick={() => onPageChange(currentPage + 1)}
        disabled={!hasMoreData}
      >
        Next &#8594;
      </OutlineButton>
    </div>
  );
};

export default Pagination;
