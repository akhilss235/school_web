import React from "react";

function ResultsSummary({ currentPage, pageSize, totalResults }) {
  const start = (currentPage - 1) * pageSize + 1;
  const end = Math.min(currentPage * pageSize, totalResults);

  return (
    <div>
      Results: {start}-{end} of {totalResults}
    </div>
  );
}

export default ResultsSummary;
