import { useSearchParams } from "react-router";

/**
 * Simple hook for todo URL params
 */
export function useTodoParams() {
  const [searchParams, setSearchParams] = useSearchParams();

  // Read values
  const filter = searchParams.get("filter") || "all";
  const sortBy = searchParams.get("sortBy") || "createdAt";
  const order = searchParams.get("order") || "desc";
  const search = searchParams.get("search") || "";
  const page = parseInt(searchParams.get("page"), 5) || 1;

  // Build API params
  const apiParams = { sortBy, order, page, limit: 5 };
  if (search.trim()) apiParams.search = search.trim();
  apiParams.status = filter;

  // Setters
  const setFilter = (value) => {
    setSearchParams((p) => {
      value === "all" ? p.delete("filter") : p.set("filter", value);
      return p;
    });
  };

  const setSearch = (value) => {
    setSearchParams((p) => {
      value ? p.set("search", value) : p.delete("search");
      return p;
    });
  };

  const setSort = (preset) => {
    setSearchParams((p) => {
      if (preset === "dateNewest") {
        p.set("sortBy", "createdAt");
        p.set("order", "desc");
      } else if (preset === "dateOldest") {
        p.set("sortBy", "createdAt");
        p.set("order", "asc");
      } else if (preset === "alphabetical") {
        p.set("sortBy", "text");
        p.set("order", "asc");
      }
      return p;
    });
  };

  const setPage = (p) => {
    setSearchParams((params) => {
      p > 1 ? params.set("page", p) : params.delete("page");
      return params;
    });
  };

  return {
    filter,
    search,
    apiParams,
    queryKey: ["todos", apiParams],
    setFilter,
    setSearch,
    setSort,
    page,
    setPage,
  };
}
