import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";
import { Select } from "./select";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

export const Header = () => {
  return (
    <header className="flex w-full justify-center">
      <div className="flex border border-gray-50 rounded-full w-auto justify-between items-center px-[10vw] shadow-xl shadow-gray-100 gap-4 text-nowrap max-xl:hidden">
        <Image
          className=""
          src="/FOSO_Logo_Final.svg"
          alt="FOSO logo"
          width={180}
          height={38}
          priority
        />
        <div className="flex gap-4">
          <div>Về Chúng Tôi</div>
          <div className="flex items-center gap-2">
            Giải pháp
            <IoIosArrowDown />
          </div>
          <div className="flex items-center gap-2 font-medium">
            <span className="relative after:content-['•'] after:absolute after:top-[50%] after:left-1/2 after:-translate-x-1/2 after:text-lg after:text-emerald-400 after:font-bold">
              Tài nguyên
            </span>
            <IoIosArrowDown />
          </div>
          <div>Liên hệ</div>
        </div>
        <div className="flex gap-2">
          <Select />
          <button className="flex items-center bg-emerald-400 rounded-full p-2 gap-2">
            Trở Thành Khách Hàng
            <BsArrowUpRightCircleFill className="w-6 h-6" />
          </button>
        </div>
      </div>
      <div className="w-full justify-start ml-8 xl:hidden">
        <div>
          <button
            type="button"
            className="-m-2.5 inline-flex rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="size-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
};
