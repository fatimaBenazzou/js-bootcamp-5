import { memo } from "react";

/**
 * Pagination component using DaisyUI pagination styles
 */
const Pagination = ({ pagination, setPage, isLoading }) => {
  // Don't render if no pagination data
  if (!pagination) return;

  const {
    currentPage,
    totalPages,
    totalItems,
    itemsPerPage,
    hasNextPage,
    hasPrevPage,
  } = pagination;

  // Calculate range of items being shown
  const startItem = totalItems > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0;
  const endItem = Math.min(currentPage * itemsPerPage, totalItems);

  return (
    <div className="flex flex-col items-center gap-2 mt-4">
      {/* Info text */}
      <p className="text-sm text-base-content/70">
        {totalItems > 0
          ? `Showing ${startItem}-${endItem} of ${totalItems} todos`
          : "No todos yet"}
      </p>

      {/* Pagination controls */}
      <div className="join">
        <button
          className="join-item btn btn-sm"
          onClick={() => setPage(currentPage - 1)}
          disabled={!hasPrevPage || isLoading}
        >
          «
        </button>
        <button className="join-item btn btn-sm pointer-events-none">
          {isLoading ? (
            <span className="loading loading-spinner loading-xs"></span>
          ) : (
            `Page ${currentPage} of ${totalPages}`
          )}
        </button>
        <button
          className="join-item btn btn-sm"
          onClick={() => setPage(currentPage + 1)}
          disabled={!hasNextPage || isLoading}
        >
          »
        </button>
      </div>
    </div>
  );
};

export default memo(Pagination);
