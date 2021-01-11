import React from "react";

const Pagination = ({ onPaginationClick, pageNumber, totalPages }) => {
  return (
    <div>
      <div className="btn-group" onClick={onPaginationClick}>
        {pageNumber > 1 && (
          <button className="btn btn-primary" id="previous">
            Previous
          </button>
        )}
        {pageNumber < totalPages && (
          <button className="btn btn-primary" id="next">
            Next
          </button>
        )}
      </div>
      <span className="btn">
        page {pageNumber} of {totalPages}
      </span>
    </div>
  );
};

export default Pagination;
