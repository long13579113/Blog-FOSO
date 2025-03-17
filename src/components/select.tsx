import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

export const Select = () => {
  return (
    <form className="max-w-sm mx-auto">
        <div className="flex">
            <button
            data-dropdown-toggle="dropdown-states"
            className="gap-2 shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-500 bg-gray-100 border border-gray-300 rounded-full hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700 dark:text-white dark:border-gray-600"
            type="button"
            >
                <Image
                    className="rounded-full"
                    src="/vi-logo.jpg"
                    alt="co vietnam"
                    width={20}
                    height={20}
                />
                VI{" "}
                <IoIosArrowDown />
            </button>
        </div>
    </form>
  );
};
