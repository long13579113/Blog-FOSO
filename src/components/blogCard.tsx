import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import { AiOutlineCalendar } from "react-icons/ai";
import { IoArrowForward } from "react-icons/io5";
import { LuClock3 } from "react-icons/lu";

type BlogCardProps = {
  image: string | StaticImport;
  title: string;
  setTab: (value: string) => void;
};
export const BlogCard = ({ image, title, setTab }: BlogCardProps) => {
  return (
    <div className="flex flex-col gap-4">
      <Image src={image} alt="blog card image" className="w-full h-full" />
      <div className="px-2 py-1 rounded-lg text-blue-900 bg-blue-50 w-fit text-sm">
        Quản Lý Sản Xuất
      </div>
      <div className="text-xl font-bold">{title}</div>
      <div className="flex gap-2 items-center text-gray-500 text-sm">
        <AiOutlineCalendar />
        <div>17/11/2022</div>
        <div>|</div>
        <LuClock3 />
        <div>10 phút đọc</div>
      </div>
      <div className="flex items-center gap-8 text-gray-500 cursor-pointer">
        <div
          onClick={() => {
            setTab("detail");
            setTimeout(() => window.scrollTo(0, 0), 100);
          }}
        >
          Khám phá thêm
        </div>
        <IoArrowForward />
      </div>
    </div>
  );
};
