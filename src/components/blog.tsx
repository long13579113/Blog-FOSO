import Image from "next/image";
import writeIcon from "../../public/write_icon.svg";
import noteIcon from "../../public/note_icon.svg";
import Group1 from "../../public/Group1.svg";
import Group2 from "../../public/Group2.svg";
import blogImage from "../../public/blog_image.svg";
import Devices from "../../public/devices.svg";
import freeTrialMRP from "../../public/free_trial_mrp.svg";
import markGroup from "../../public/Mask_group.svg";
import { FiArrowUpRight } from "react-icons/fi";
import { BlogCard } from "./blogCard";
import Pagination from "./pagination";

const list = [
  {
    name: "Tất cả",
    amount: 108,
  },
  {
    name: "Thiết Kế Website",
    amount: 36,
  },
  {
    name: "Thiết Kế App Mobile",
    amount: 13,
  },
  {
    name: "Quản Lý Sản Xuất",
    amount: 25,
  },
  {
    name: "Quản Lý Bán Hàng",
    amount: 22,
  },
  {
    name: "Báo Chí Nói Về FOSO",
    amount: 7,
  },
  {
    name: "Tin Tức FOSO",
    amount: 5,
  },
];

export default function Blog({ setTab }: { setTab: (value: string) => void }) {
  return (
    <div className="relative flex flex-col w-full items-center gap-4 overflow-hidden">
      <div className="absolute top-[5%] -left-32 w-96 h-96 rounded-full bg-gradient-to-r from-green-300 to-transparent opacity-70 blur-lg"></div>
      <div className="absolute bottom-[5%] -right-40 w-96 h-96 rounded-full bg-gradient-to-l from-green-300 to-transparent opacity-70 blur-lg"></div>
      <div className="text-gray-500 text-sm">
        Trang chủ {">"} Tài nguyên {">"}{" "}
        <span className="font-semibold">Blog</span>
      </div>
      <div className="absolute top-0 flex justify-between w-[95%] z-0">
        <Image src={noteIcon} alt="note icon" width={200} height={200} />
        <Image src={writeIcon} alt="write icon" width={150} height={150} />
      </div>
      <div className="flex flex-col items-center text-6xl z-10 text-center">
        <div>
          Blog{" "}
          <span className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-500 from-20% via-emerald-300 via-40% to-emerald-500 to-90%">
            FOSO
          </span>{" "}
          -
        </div>
        <div>
          Cập Nhật Tin Tức <span>Mới Nhất</span>
        </div>
      </div>
      <div className="text-gray-600">
        Cùng FOSO khám phá kiến thức, xu hướng công nghệ và sản xuất ngay!
      </div>
      <div className="w-[80%] grid grid-cols-4 gap-4 z-10">
        <div className="col-span-3">
          <div className="my-4 font-bold text-3xl">Tất Cả Bài Viết</div>
          <div className="grid grid-cols-2 gap-4 bg-linear-to-r from-blue-800 to-blue-600 rounded-4xl overflow-hidden px-7 pt-7 text-white">
            <div className="flex flex-col p-2 gap-4">
              <div className="text-3xl font-semibold">
                Gia nhập cộng đồng FMRP - Kết nối, chia sẻ, cùng phát triển!
              </div>
              <button className="flex gap-8 border-2 border-white rounded-full py-2 px-4 w-fit items-center">
                Tham gia ngay
                <span>
                  <FiArrowUpRight />
                </span>
              </button>
            </div>
            <Image src={Group1} alt="group" className="w-full h-full" />
          </div>
          <div className="grid grid-cols-2 gap-6 mt-6">
            {[...Array(6)].map((_, index) => (
              <BlogCard
                image={blogImage}
                title="Tại sao BOM quan trọng trong quản lý sản xuất?"
                key={index}
                setTab={setTab}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="text-xl font-bold mt-4">Tìm Kiếm</div>

          <form className="w-full mx-auto">
            <div className="relative w-full">
              <input
                type="search"
                id="default-search"
                className="block w-full p-4 text-sm text-gray-900 rounded-lg shadow-lg shadow-gray-200 border border-gray-50"
                placeholder="Tìm kiếm bài viết"
                required
              />
              <button
                type="submit"
                className="flex flex-col absolute end-2.5 bottom-[7px] bg-emerald-500 font-medium rounded-lg text-sm px-4 py-2 w-10 h-10"
              >
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-white"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
              </button>
            </div>
          </form>

          <div className="text-xl font-bold mt-2">Danh Mục</div>
          {list.map((e, index) => (
            <div className="flex justify-between text-gray-600" key={index}>
              <div>{e.name}</div>
              <div>{e.amount}</div>
            </div>
          ))}
          <div className="relative grid grid-cols-2 gap-12 bg-linear-to-t from-blue-800 to-blue-600 rounded-4xl overflow-hidden py-8 px-4 text-white">
            <div className="col-span-2">
              <Image src={Devices} alt="devices" className="w-full h-full" />
            </div>
            <Image
              src={markGroup}
              alt="mark group logo"
              className="absolute w-[40%] h-[40%] top-[40%] left-2"
            />
            <Image
              src={freeTrialMRP}
              alt="free trial MRP"
              className="col-span-2 w-full h-full"
            />
            <div className="flex col-span-2 justify-center py-4">
              <button className="flex gap-8 border-2 border-white rounded-full py-2 px-4 w-full items-center justify-between cursor-pointer">
                Tham gia ngay
                <span>
                  <FiArrowUpRight />
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-6 bg-linear-to-t from-blue-800 to-blue-600 rounded-4xl overflow-hidden py-8 text-white">
            <div>
              <Image src={Group2} alt="Group" className="w-full h-full" />
            </div>
            <div className="text-lg font-semibold mx-4">
              Gia nhập cộng đồng FMRP - Kết nối, chia sẻ, cùng phát triển!
            </div>
            <div className="flex col-span-2 justify-center py-4 mx-4">
              <button className="flex gap-8 border-2 border-white rounded-full py-2 px-4 w-full items-center justify-between cursor-pointer">
                Tham gia ngay
                <span>
                  <FiArrowUpRight />
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
