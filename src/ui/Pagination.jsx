import { HiChevronLeft, HiChevronRight } from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";
import { PAGE_SIZE } from "../utilities/constants";

// WAALK THROUGH THIS
// function that populates pagination when the threshold of entries is hit
function Pagination({ count }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = !searchParams.get("page")
    ? 1
    : Number(searchParams.get("page"));
  const pageCount = Math.ceil(count / PAGE_SIZE);

  function nextPage() {
    const next = currentPage === pageCount ? currentPage : currentPage + 1;

    searchParams.set("page", next);
    setSearchParams(searchParams);
  }

  function previousPage() {
    const previous = currentPage === 1 ? currentPage : currentPage - 1;

    searchParams.set("page", previous);
    setSearchParams(searchParams);
  }

  if (pageCount <= 1) return null;

  return (
    <div className="flex w-full items-center justify-between bg-gray-700 border-t-2 border-slate-400">
      <p className="ml-[0.8rem] text-white">
        Showing <span>{(currentPage - 1) * PAGE_SIZE + 1}</span>-
        <span>
          {currentPage === pageCount ? count : currentPage * PAGE_SIZE}
        </span>{" "}
        of <span>{count}</span> results
      </p>
      <div className="flex items-center text-xl text-white justify-center gap-[0.4rem] px-[0.6rem] py-[1.2rem]">
        <button
          onClick={previousPage}
          disabled={currentPage === 1}
          title="Previous page"
        >
          <HiChevronLeft />
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === pageCount}
          title="Next page"
        >
          <HiChevronRight />
        </button>
      </div>
    </div>
  );
}

export default Pagination;
