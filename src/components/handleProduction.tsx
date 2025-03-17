"use client";
import Image from "next/image";
import Avatar from "../../public/avatar.svg";
import fiveSProcess from "../../public/5s_process.png";
import whyNeed5SProcess from "../../public/whyneed5sprocess.png";
import fiveSProcessInclude from "../../public/5s_process_include.png";
import stepByStep from "../../public/stepbystep.png";
import quotes from "../../public/quotes.svg";
import fiveSSuccess from "../../public/5s_success.png";
import { AiOutlineCalendar } from "react-icons/ai";
import { LuClock3 } from "react-icons/lu";
import ReactCard from "./reactCard";
import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import ContentMenu from "./contentMenu";
import Devices from "../../public/devices.svg";
import freeTrialMRP from "../../public/free_trial_mrp.svg";
import markGroup from "../../public/Mask_group.svg";
import Group2 from "../../public/Group2.svg";
import Zalo from "../../public/zalo.svg";
import Facebook from "../../public/facebook.svg";
import X from "../../public/x.svg";
import Instagram from "../../public/instagram.svg";
import Social from "../../public/social.svg";
import { FiArrowUpRight } from "react-icons/fi";
import { BlogCard } from "./blogCard";
import blogImage from "../../public/blog_image.svg";

export default function HandleProduction({
  setTab,
}: {
  setTab: (value: string) => void;
}) {
  const [isCloseMenu, setIsCloseMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("section-1");

  return (
    <div className="relative flex w-full justify-center">
      <div className="w-[80%]">
        <div className="text-gray-500 text-sm py-8 cursor-pointer">
          Trang chủ {">"} Tài nguyên {">"}{" "}
          <span onClick={() => setTab("blog")}>Blog</span> {">"}{" "}
          <span className="font-semibold">Quản Lý Sản Xuất</span>
        </div>
        <div className="fixed left-[2vw] flex flex-col w-16 items-center">
          <div className="font-semibold">Chia sẻ</div>
          <Image src={Zalo} alt="zalo" className="w-full h-full p-2" />
          <Image src={Facebook} alt="facebook" className="w-full h-full p-2" />
          <Image src={X} alt="x" className="w-full h-full p-2" />
          <Image
            src={Instagram}
            alt="instagram"
            className="w-full h-full p-2"
          />
          <Image src={Social} alt="social" className="w-full h-full p-2" />
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="flex flex-col col-span-2 gap-4">
            <div className="px-2 py-1 rounded-lg text-blue-900 bg-blue-50 w-fit text-sm">
              Quản Lý Sản Xuất
            </div>
            <div className="text-3xl font-bold">
              Quy Trình 5S Là Gì? Cách Ứng Dụng Hiệu Quả Nên Biết
            </div>
            <div className="flex justify-between">
              <div className="flex items-center gap-4">
                <Image
                  src={Avatar}
                  alt="avatar"
                  className="w-auto h-auto rounded-full"
                />
                <div>
                  <div className="text-gray-500">Tác giả</div>
                  <div className="font-semibold">FOSO Creator</div>
                </div>
              </div>
              <div className="flex gap-2 items-center text-gray-500">
                <AiOutlineCalendar />
                <div> Cập nhật vào: 17/11/2022</div>
                <div>|</div>
                <LuClock3 />
                <div>10 phút đọc</div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Image
                src={fiveSProcess}
                alt="5S process"
                className="w-full h-full"
              />
              <div className="text-gray-400">Quy trình 5S là gì</div>
            </div>
            <div className="relative flex w-full justify-center">
              <div className="w-[85%] text-center">
                Chắc hẳn bạn đã từng nghe qua khái niệm về quy trình 5S là gì?
                Xây dựng 5S cần yếu tố gì? Bài viết dưới đây của FOSO sẽ trả lời
                cho bạn thông tin chi tiết về mô hình này cũng như yếu tố tạo
                nên thành công của quy trình bạn nhé.
              </div>
              <Image
                src={quotes}
                alt="quotes"
                className="absolute top-0 left-0"
              />
            </div>
            <div className="text-xl font-bold text-emerald-500" id="section-1">
              1. Quy trình 5S là gì?
            </div>
            <div>
              Quy trình 5S được biết đến là mô hình quản trị tinh gọn trong sản
              xuất. Nguồn gốc của quy trình 5S là đến từ xứ sở hoa anh đào Nhật
              Bản.
            </div>
            <div>
              Quy trình 5S hiện nay đang được rất nhiều nước trên thế giới vận
              dụng bởi tính hiệu quả mà 5S mang lại. Quy trình này bao gồm 5 chữ
              S đầu trong tiếng Nhật:
            </div>
            <div className="text-emerald-500">
              <li>
                Seiri <span className="text-black">{"(Ngăn nắp)"}</span>
              </li>
              <li>
                Seiso <span className="text-black">{"(Sạch sẽ)"}</span>
              </li>
              <li>
                Seiton <span className="text-black">{"(Trật tự)"}</span>
              </li>
              <li>
                Shisuke <span className="text-black">{"(Kỷ luật)"}</span>
              </li>
              <li>
                Seiketsu{" "}
                <span className="text-black">{"(Tiêu chuẩn hoá)"}</span>
              </li>
            </div>
            <div className="text-xl font-bold text-emerald-500" id="section-2">
              2. Lợi ích quy trình 5S đem lại
            </div>
            <div>
              Quy trình 5S được kết hợp từ 5 chữ S và mỗi chữ S thể hiện cho mỗi
              bước của quy trình với mục đích cải tiến môi trường làm việc của
              doanh nghiệp.
            </div>
            <div>
              Khi doanh nghiệp áp dụng quy trình vào trong tổ chức, doanh nghiệp
              sẽ tạo nên một môi trường được sắp xếp theo nguyên tắc logic. Nơi
              làm việc sẽ trở nên sạch sẽ hơn, các công cụ, đồ dùng sẽ được đặt
              theo vị trí quy định và dễ dàng tìm kiếm khi cần thiết.
            </div>
            <div>
              Và khi doanh nghiệp áp dụng như vậy cũng hình thành tạo ra thói
              quen tốt cho mỗi nhân viên. Và từ đó, cũng góp phần vào tạo nên
              một văn hóa doanh nghiệp tích cực.
            </div>
            <div className="flex flex-col w-full items-center gap-2">
              <Image
                src={whyNeed5SProcess}
                alt="image 2"
                className="w-full h-full"
              />
              <div className="text-gray-400">
                Tại sao doanh nghiệp cần quy trình 5S?
              </div>
            </div>
            <div className="text-xl font-bold text-emerald-500" id="section-3">
              3.Tại sao doanh nghiệp nên áp dụng quy trình 5S?
            </div>
            <div>
              Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp
              trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh
              rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do
              vì sao bạn nên lựa chọn quy trình:
            </div>
            <div className="font-semibold text-emerald-500" id="section-3.1">
              3.1 Cải thiện rõ nét môi trường làm việc
            </div>
            <div>
              Môi trường làm việc tại doanh nghiệp sẽ trở nên sạch sẽ hơn, gọn
              gàng hơn và có tổ chức hơn. Điều này tạo ra một không gian làm
              việc hiệu quả cho từng cá nhân trong doanh nghiệp.
            </div>
            <div className="font-semibold text-emerald-500" id="section-3.2">
              3.2 Tiết kiệm thời gian đáng kể
            </div>
            <div>
              Khi doanh nghiệp áp dụng quy trình này, doanh nghiệp giảm được
              thời gian đáng kể khi không còn mất nhiều thời gian tìm kiếm đồ
              dùng, máy móc cần sử dụng trong quá trình làm việc. Khi mọi thứ
              đều có trật tự, mọi sự tìm kiếm đều trở nên dễ dàng.
            </div>
            <div className="font-semibold text-emerald-500" id="section-3.3">
              3.3 Tăng năng suất làm việc
            </div>
            <div>
              Nhờ vào quy tắc 5S, bằng cách loại bỏ những thứ không cần thiết,
              tăng cường sắp xếp và vệ sinh, nhân viên có thể dễ dàng tìm kiếm
              và sử dụng các dụng cụ, thiết bị và tài liệu, giúp tiết kiệm thời
              gian và tăng năng suất làm việc.
            </div>
            <div className="font-semibold text-emerald-500" id="section-3.4">
              3.4 Tiết kiệm chi phí
            </div>
            <div>
              Bằng cách tối ưu hóa không gian làm việc, giảm thiểu lãng phí và
              sử dụng tài nguyên hiệu quả hơn, doanh nghiệp có thể giảm thiểu
              chi phí vận hành đáng kể cho doanh nghiệp của mình.
            </div>
            <div className="font-semibold text-emerald-500" id="section-3.5">
              3.5 Tăng chất lượng sản phẩm
            </div>
            <div>
              5S giúp giữ cho môi trường làm việc luôn sạch sẽ và gọn gàng. Từ
              đó, giúp tăng cường chất lượng sản phẩm và giảm thiểu lỗi sản xuất
              không mong muốn.
            </div>
            <div className="flex flex-col w-full items-center gap-2">
              <Image
                src={fiveSProcessInclude}
                alt="image 3"
                className="w-full h-full"
              />
              <div className="text-gray-400">Quy trình 5S gồm các bước</div>
            </div>
            <div className="text-xl font-bold text-emerald-500" id="section-4">
              4. Quy trình 5S gồm các bước
            </div>
            <div>
              5S là một phương pháp quản lý tổ chức, sắp xếp và tăng cường hiệu
              quả làm việc trong một tổ chức hoặc doanh nghiệp. 5S bao gồm năm
              bước cơ bản sau:
            </div>
            <div className="font-semibold text-emerald-500" id="section-4.1">
              4.1 Seiri (Ngăn nắp)
            </div>
            <div>
              Bước đầu tiên trong quy trình là Seiri, mang nghĩa là ngăn nắp,
              nhằm tổ chức và loại bỏ những thứ dư thừa, không cần thiết để tạo
              ra một không gian làm việc sạch sẽ, gọn gàng và tiết kiệm thời
              gian.
            </div>
            <div className="font-semibold text-emerald-500" id="section-4.2">
              4.2 Seiton (Sắp xếp)
            </div>
            <div>
              Chữ S thứ 2 là Seiton, có nghĩa là sắp xếp các dụng cụ, thiết bị,
              tài liệu trong doanh nghiệp một cách gọn gàng để giúp tìm kiếm và
              sử dụng chúng một cách dễ dàng.
            </div>
            <div className="font-semibold text-emerald-500" id="section-4.3">
              4.3 Seiso (Vệ sinh)
            </div>
            <div>
              Bước tiếp theo trong quy tắc 5S đó là Seiso, trong đó cá nhân
              trong doanh nghiệp sẽ giữ cho môi trường làm việc luôn sạch sẽ. Và
              việc vệ sinh thường xuyên như vậy sẽ giúp giảm thiểu sự lây nhiễm
              bệnh tật và tăng cường sức khỏe cho mỗi nhân viên.
            </div>
            <div className="font-semibold text-emerald-500" id="section-4.4">
              4.4 Seiketsu (Tiêu chuẩn hóa)
            </div>
            <div>
              Bước kế tiếp đó là Seiketsu, có nghĩa là Tiêu chuẩn hóa. Bước này
              giúp đặt ra các tiêu chuẩn về sự sạch sẽ, gọn gàng và cách thức sử
              dụng các dụng cụ, thiết bị, tài liệu.
            </div>
            <div className="font-semibold text-emerald-500" id="section-4.5">
              4.5 Shitsuke (Kỷ luật)
            </div>
            <div>
              Đây được xem là bước cuối cùng trong quy trình. Và bước này đóng
              vai trò quan trọng trong duy trì tính hiệu quả của quy tắc 5S
              trong dài hạn. Bước này đòi hỏi việc tạo ra một hệ thống kỷ luật
              và giám sát chặt chẽ để đảm bảo mọi người trong tổ chức duy trì và
              tuân thủ theo quy trình.
            </div>
            <div className="flex flex-col w-full items-center gap-2">
              <Image src={stepByStep} alt="image 4" className="w-full h-full" />
              <div className="text-gray-400">
                Các bước thực hiện quy trình 5s
              </div>
            </div>
            <div className="text-xl font-bold text-emerald-500" id="section-5">
              5. Quy trình được thực hiện như sau:
            </div>
            <div>
              Có thể nói quy trình được áp dụng rộng rãi tại các doanh nghiệp
              trên toàn thế giới, bao gồm cả Việt Nam. Điều này càng chứng minh
              rõ nét tính hiệu quả của quy trình đem lại. Sau đây là các lý do
              vì sao bạn nên lựa chọn quy trình:
            </div>
            <div className="font-semibold text-emerald-500" id="section-5.1">
              5.1 Giai đoạn chuẩn bị
            </div>
            <div>
              Trong giai đoạn chuẩn bị, doanh nghiệp cần bố trí nhân lực đứng ra
              điều hành và quản lý quá trình thực hiện quy trình 5S. Việc phân
              bổ cụ thể như vậy sẽ giúp quá trình áp dụng quy tắc 5S sẽ hiệu quả
              hơn.
            </div>
            <div className="font-semibold text-emerald-500" id="section-5.2">
              5.2 Triển khai rộng rãi
            </div>
            <div>
              Đầu tiên doanh nghiệp cần chuẩn bị tài liệu, kiến thức về quy
              trình 5S cho tất cả mọi người trong doanh nghiệp nắm rõ kiến thức
              cũng như cách áp dụng như thế nào vào doanh nghiệp của bạn.
            </div>
            <div className="font-semibold text-emerald-500" id="section-5.3">
              5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp
            </div>
            <div>
              Đây là bước có thể khiến mọi người không hào hứng trong các bước
              của quy trình. Doanh nghiệp nên tuyên truyền tích cực và tạo không
              khí hào hứng cho từng cá nhân.
            </div>
            <div className="font-semibold text-emerald-500" id="section-5.4">
              5.4 Sàng lọc, sắp xếp và đánh giá
            </div>
            <div>
              Đây là bước tiếp theo sau khi đã hoàn thành bước vệ sinh toàn bộ
              doanh nghiệp. Doanh nghiệp cần đưa ra tiêu chuẩn rõ ràng để việc
              thực hiện sàng lọc và sắp xếp trở nên khoa học hơn, hiệu quả hơn
              và dễ dàng tìm kiếm sau này.
            </div>
            <div className="font-semibold text-emerald-500" id="section-5.5">
              5.5 Đánh giá
            </div>
            <div>
              Sau khi đã hoàn tất các bước, doanh nghiệp nên tổng kết lại quá
              trình cải tiến và xem xét cần cải tiến phương diện nào hay không
              trong quá trình thực hiện quy trình 5S.
            </div>
            <div className="text-xl font-bold text-emerald-500" id="section-6">
              6. Quy trình 5S có giống với Kaizen?
            </div>
            <div>
              Vậy câu hỏi đặt ra ở đây là quy trình 5S có giống với Kaizen hay
              không? Quy trình 5S với Kaizen là 2 khái niệm khác nhau nhưng giữa
              chúng có mối quan hệ chặt chẽ với nhau.
            </div>
            <div className="border-l-4 border-emerald-500 py-2 pl-6 pr-10 text-lg italic">
              Về Kaizen, thì đây được xem là một triết lý cải tiến liên tục
              trong doanh nghiệp. Phương pháp này nhằm tạo ra sự thay đổi tích
              cực, mang tính liên tục và bền vững.
            </div>
            <div className="border-l-4 border-emerald-500 py-2 pl-6 pr-10 text-lg italic">
              Còn đối với quy tắc 5S, đây là một phương pháp quản lý và cải tiến
              trong sản xuất. 5S tập trung vào việc sắp xếp, sạch sẽ, sắp đặt,
              tiêu chuẩn hóa và kỷ luật trong môi trường làm việc. 
            </div>
            <div>
              Tuy nhiên, quy trình 5S được xem là một phần của Kaizen. Và quy
              tắc này đóng vai trò quan trọng trong việc tạo ra môi trường làm
              việc sạch sẽ, an toàn. Quy tắc 5S thường được sử dụng làm bước đầu
              tiên trong quá trình cải tiến liên tục của phương pháp Kaizen để
              tạo ra một nền tảng vững chắc cho các hoạt động cải tiến tiếp
              theo.
            </div>
            <div className="text-xl font-bold text-emerald-500" id="section-7">
              7. Đối tượng nào nên áp dụng 5S?
            </div>
            <div>
              Quy trình 5S được xem là phương pháp quản lý được áp dụng rộng rãi
              ở nhiều ngành công nghiệp và các loại doanh nghiệp khác nhau. Tuy
              nhiên, 5S phù hợp đặc biệt cho các doanh nghiệp sản xuất, các cơ
              quan hành chính, các tổ chức phi lợi nhuận và các doanh nghiệp
              nhỏ.
            </div>
            <div>
              Các tổ chức có sự xuất hiện của nhiều nhân viên, hoạt động phức
              tạp, các trang thiết bị và vật dụng phải được quản lý và sử dụng
              hiệu quả.
            </div>
            <div className="flex flex-col w-full items-center gap-2">
              <Image
                src={fiveSSuccess}
                alt="image 5"
                className="w-full h-full"
              />
              <div className="text-gray-400">
                Các yếu tố tạo nên thành công cho quy trình 5S
              </div>
            </div>
            <div className="text-xl font-bold text-emerald-500" id="section-8">
              8. Các yếu tố tạo nên thành công cho quy trình 5S
            </div>
            <div>
              Và những nhân tố quyết định đến quá trình thành công của quy trình
              nhằm cải tiến môi trường làm việc của doanh nghiệp đó là từ phía:
            </div>
            <div className="text-[15px] m-2">
              <li>
                Lãnh đạo cởi mở và ủng hộ áp dụng quy trình vào doanh nghiệp.
                Bởi đây yếu tố quan trọng nhất để quyết định doanh nghiệp có áp
                dụng quy tắc này hay không.
              </li>
              <li>
                Chương trình, kế hoạch thực hiện quy trình: Sau khi phía lãnh
                đạo đồng ý, doanh nghiệp cần bộ phận đưa lên ý tưởng, kế hoạch
                thực hiện triển khai 5S.
              </li>
              <li>
                Sự tự nguyện tham gia của toàn thể nhân viên: Doanh nghiệp cần
                huy động và khuyến khích nhân viên tự nguyện thực hiện vì lợi
                ích chung của tổ chức, của doanh nghiệp.
              </li>
            </div>
            <div>
              Đồng thời, trên đây là các yếu tố tạo nên sự thành công nhưng cũng
              là các lưu ý cho mỗi doanh nghiệp cần nắm bắt trước khi bắt tay
              vào triển khai quy trình 5S vào doanh nghiệp của mình. Và với
              những thông tin bổ ích như trên, FOSO mong rằng phần nào giúp được
              doanh nghiệp của bạn phát triển, cải tiến vượt bậc trong tương
              lai.
            </div>
            <ReactCard />
          </div>

          <div className="flex flex-col col-span-1 w-full gap-4">
            <div className="flex justify-between w-full font-bold text-xl">
              <div>Nội Dung Bài Viết</div>
              {isCloseMenu ? (
                <IoIosArrowDown
                  className="text-emerald-500 cursor-pointer"
                  onClick={() => setIsCloseMenu(false)}
                />
              ) : (
                <IoIosArrowUp
                  className="text-emerald-500 cursor-pointer"
                  onClick={() => setIsCloseMenu(true)}
                />
              )}
            </div>
            {!isCloseMenu && (
              <ContentMenu
                activeSection={activeSection}
                setActiveSection={setActiveSection}
              />
            )}
            <div className="relative grid grid-cols-2 gap-12 bg-linear-to-t from-blue-800 to-blue-600 rounded-4xl overflow-hidden py-8 px-4 text-white w-[80%]">
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
            <div className="flex flex-col gap-6 bg-linear-to-t from-blue-800 to-blue-600 rounded-4xl overflow-hidden py-8 text-white w-[80%]">
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
        </div>
        <div>
          <div className="flex gap-6 mt-6 w-full">
            {[...Array(3)].map((_, index) => (
              <BlogCard
                image={blogImage}
                title="Tại sao BOM quan trọng trong quản lý sản xuất?"
                key={index}
                setTab={setTab}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
