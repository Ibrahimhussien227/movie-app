import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import { SearchIcon } from "lucide-react";

import { useDebounce } from "@/hooks/useDebounce";

const SearchBar = () => {
  const [query, setQuery] = useSearchParams();
  const initialSearch = query.get("search") || "";

  const [search, setSearch] = useState(initialSearch);

  const debouncedSearch = useDebounce(search, 1000);

  useEffect(() => {
    if (debouncedSearch !== initialSearch) {
      setQuery(debouncedSearch ? { search: debouncedSearch } : {});
    }
  }, [debouncedSearch, query, setQuery, initialSearch]);

  return (
    <div className="text-sm mt-10 flex flex-row items-center justify-center">
      <div className="relative">
        <input
          type="text"
          className="py-2 pl-5 pr-9 rounded-full outline-none w-[300px] md:w-[340px] shadow-md transition-all duration-300 focus:shadow-sm font-medium bg-[#302d3a] focus:bg-[#474550] text-white"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
          placeholder="movies"
        />
        <SearchIcon className="absolute right-4 top-1/2 -translate-y-1/2 text-[#ff0000] pointer-events-none z-1 size-5" />
      </div>
    </div>
  );
};

export default SearchBar;
