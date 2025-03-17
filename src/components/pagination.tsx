import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Pagination() {
  return (
    <div className="flex justify-between w-full text-gray-500">
      <button className="flex items-center gap-4">
        <FaArrowLeft />
        Trang trước
      </button>
      <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
        <div className="flex flex-1 justify-between sm:hidden">
          <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Previous
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            Next
          </a>
        </div>
        <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
          <div>
            <nav
              aria-label="Pagination"
              className="isolate inline-flex -space-x-px rounded-md shadow-xs"
            >
              <a
                href="#"
                aria-current="page"
                className="relative z-10 inline-flex items-center bg-emerald-200 px-4 py-2 text-sm font-semibold "
              >
                1
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-500 ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
              >
                2
              </a>
              <a
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-500 ring-1 ring-gray-300 ring-inset hover:bg-gray-50 md:inline-flex"
              >
                3
              </a>
              <span className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-gray-300 ring-inset ">
                ...
              </span>
              <a
                href="#"
                className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-500 ring-1 ring-gray-300 ring-inset hover:bg-gray-50  md:inline-flex"
              >
                8
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-500 ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
              >
                9
              </a>
              <a
                href="#"
                className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-500 ring-1 ring-gray-300 ring-inset hover:bg-gray-50"
              >
                10
              </a>
            </nav>
          </div>
        </div>
      </div>
      <button className="flex items-center gap-4">
        Trang kế tiếp
        <FaArrowRight />
      </button>
    </div>
  );
}
