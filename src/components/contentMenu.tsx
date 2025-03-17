type ContentMenuProps = {
  activeSection: string;
  setActiveSection: (value: string) => void;
};
export default function ContentMenu({
  activeSection,
  setActiveSection,
}: ContentMenuProps) {
  return (
    <div className="flex flex-col text-sm w-full items-start">
      <button
        className={`px-3 py-2 rounded-lg transition-colors text-start cursor-pointer ${
          activeSection === "section-1" && "text-emerald-500 font-semibold"
        }`}
        onClick={() => {
          document
            .getElementById(`section-1`)
            ?.scrollIntoView({ behavior: "smooth" });
          setActiveSection("section-1");
        }}
      >
        1. Quy trình 5S là gì?
      </button>
      <button
        className={`px-3 py-2 rounded-lg transition-colors text-start cursor-pointer ${
          activeSection === "section-2" && "text-emerald-500 font-semibold"
        }`}
        onClick={() => {
          document
            .getElementById(`section-2`)
            ?.scrollIntoView({ behavior: "smooth" });
          setActiveSection("section-2");
        }}
      >
        2. Lợi ích quy trình 5S đem lại
      </button>
      <button
        className={`px-3 py-2 rounded-lg transition-colors text-start cursor-pointer ${
          activeSection === "section-3" && "text-emerald-500 font-semibold"
        }`}
        onClick={() => {
          document
            .getElementById(`section-3`)
            ?.scrollIntoView({ behavior: "smooth" });
          setActiveSection("section-3");
        }}
      >
        3. Tại sao doanh nghiệp nên áp dụng quy trình 5S?
      </button>
      <button
        className={`ml-4 px-3 py-2 rounded-lg transition-colors text-start cursor-pointer ${
          activeSection === "section-3.1" && "text-emerald-500 font-semibold"
        }`}
        onClick={() => {
          document
            .getElementById(`section-3.1`)
            ?.scrollIntoView({ behavior: "smooth" });
          setActiveSection("section-3.1");
        }}
      >
        3.1 Cải thiện rõ nét môi trường làm việc
      </button>
      <button
        className={`ml-4 px-3 py-2 rounded-lg transition-colors text-start cursor-pointer ${
          activeSection === "section-3.2" && "text-emerald-500 font-semibold"
        }`}
        onClick={() => {
          document
            .getElementById(`section-3.2`)
            ?.scrollIntoView({ behavior: "smooth" });
          setActiveSection("section-3.2");
        }}
      >
        3.2 Tiết kiệm thời gian đáng kể
      </button>
      <button
        className={`ml-4 px-3 py-2 rounded-lg transition-colors text-start cursor-pointer ${
          activeSection === "section-3.3" && "text-emerald-500 font-semibold"
        }`}
        onClick={() => {
          document
            .getElementById(`section-3.3`)
            ?.scrollIntoView({ behavior: "smooth" });
          setActiveSection("section-3.3");
        }}
      >
        3.3 Tăng năng suất làm việc
      </button>
      <button
        className={`ml-4 px-3 py-2 rounded-lg transition-colors text-start cursor-pointer ${
          activeSection === "section-3.4" && "text-emerald-500 font-semibold"
        }`}
        onClick={() => {
          document
            .getElementById(`section-3.4`)
            ?.scrollIntoView({ behavior: "smooth" });
          setActiveSection("section-3.4");
        }}
      >
        3.4 Tiết kiệm chi phí
      </button>
      <button
        className={`ml-4 px-3 py-2 rounded-lg transition-colors text-start cursor-pointer ${
          activeSection === "section-3.5" && "text-emerald-500 font-semibold"
        }`}
        onClick={() => {
          document
            .getElementById(`section-3.5`)
            ?.scrollIntoView({ behavior: "smooth" });
          setActiveSection("section-3.5");
        }}
      >
        3.5 Tăng chất lượng sản phẩm
      </button>
      <button
        className={`px-3 py-2 rounded-lg transition-colors text-start cursor-pointer ${
          activeSection === "section-4" && "text-emerald-500 font-semibold"
        }`}
        onClick={() => {
          document
            .getElementById(`section-4`)
            ?.scrollIntoView({ behavior: "smooth" });
          setActiveSection("section-4");
        }}
      >
        4. Quy trình 5S gồm các bước:
      </button>
      <button
        className={`ml-4 px-3 py-2 rounded-lg transition-colors text-start cursor-pointer ${
          activeSection === "section-4.1" && "text-emerald-500 font-semibold"
        }`}
        onClick={() => {
          document
            .getElementById(`section-4.1`)
            ?.scrollIntoView({ behavior: "smooth" });
          setActiveSection("section-4.1");
        }}
      >
        4.1 Seiri (Ngăn nắp)
      </button>
      <button
        className={`ml-4 px-3 py-2 rounded-lg transition-colors text-start cursor-pointer ${
          activeSection === "section-4.2" && "text-emerald-500 font-semibold"
        }`}
        onClick={() => {
          document
            .getElementById(`section-4.2`)
            ?.scrollIntoView({ behavior: "smooth" });
          setActiveSection("section-4.2");
        }}
      >
        4.2 Seiton (Sắp xếp)
      </button>
      <button
        className={`ml-4 px-3 py-2 rounded-lg transition-colors text-start cursor-pointer ${
          activeSection === "section-4.3" && "text-emerald-500 font-semibold"
        }`}
        onClick={() => {
          document
            .getElementById(`section-4.3`)
            ?.scrollIntoView({ behavior: "smooth" });
          setActiveSection("section-4.3");
        }}
      >
        4.3 Seiso (Vệ sinh)
      </button>
      <button
        className={`ml-4 px-3 py-2 rounded-lg transition-colors text-start cursor-pointer ${
          activeSection === "section-4.4" && "text-emerald-500 font-semibold"
        }`}
        onClick={() => {
          document
            .getElementById(`section-4.4`)
            ?.scrollIntoView({ behavior: "smooth" });
          setActiveSection("section-4.4");
        }}
      >
        4.4 Seiketsu (Tiêu chuẩn hóa)
      </button>
      <button
        className={`ml-4 px-3 py-2 rounded-lg transition-colors text-start cursor-pointer ${
          activeSection === "section-4.5" && "text-emerald-500 font-semibold"
        }`}
        onClick={() => {
          document
            .getElementById(`section-4.5`)
            ?.scrollIntoView({ behavior: "smooth" });
          setActiveSection("section-4.5");
        }}
      >
        4.5 Shitsuke (Kỷ luật)
      </button>
      <button
        className={`px-3 py-2 rounded-lg transition-colors text-start cursor-pointer ${
          activeSection === "section-5" && "text-emerald-500 font-semibold"
        }`}
        onClick={() => {
          document
            .getElementById(`section-5`)
            ?.scrollIntoView({ behavior: "smooth" });
          setActiveSection("section-5");
        }}
      >
        5. Quy trình được thực hiện như sau:
      </button>
      <button
        className={`ml-4 px-3 py-2 rounded-lg transition-colors text-start cursor-pointer ${
          activeSection === "section-5.1" && "text-emerald-500 font-semibold"
        }`}
        onClick={() => {
          document
            .getElementById(`section-5.1`)
            ?.scrollIntoView({ behavior: "smooth" });
          setActiveSection("section-5.1");
        }}
      >
        5.1 Giai đoạn chuẩn bị
      </button>
      <button
        className={`ml-4 px-3 py-2 rounded-lg transition-colors text-start cursor-pointer ${
          activeSection === "section-5.2" && "text-emerald-500 font-semibold"
        }`}
        onClick={() => {
          document
            .getElementById(`section-5.2`)
            ?.scrollIntoView({ behavior: "smooth" });
          setActiveSection("section-5.2");
        }}
      >
        5.2 Triển khai rộng rãi
      </button>
      <button
        className={`ml-4 px-3 py-2 rounded-lg transition-colors text-start cursor-pointer ${
          activeSection === "section-5.3" && "text-emerald-500 font-semibold"
        }`}
        onClick={() => {
          document
            .getElementById(`section-5.3`)
            ?.scrollIntoView({ behavior: "smooth" });
          setActiveSection("section-5.3");
        }}
      >
        5.3 Thực hiện vệ sinh toàn bộ doanh nghiệp
      </button>
      <button
        className={`ml-4 px-3 py-2 rounded-lg transition-colors text-start cursor-pointer ${
          activeSection === "section-5.4" && "text-emerald-500 font-semibold"
        }`}
        onClick={() => {
          document
            .getElementById(`section-5.4`)
            ?.scrollIntoView({ behavior: "smooth" });
          setActiveSection("section-5.4");
        }}
      >
        5.4 Sàng lọc, sắp xếp và đánh giá
      </button>
      <button
        className={`ml-4 px-3 py-2 rounded-lg transition-colors text-start cursor-pointer ${
          activeSection === "section-5.5" && "text-emerald-500 font-semibold"
        }`}
        onClick={() => {
          document
            .getElementById(`section-5.5`)
            ?.scrollIntoView({ behavior: "smooth" });
          setActiveSection("section-5.5");
        }}
      >
        5.5 Đánh giá
      </button>
      <button
        className={`px-3 py-2 rounded-lg transition-colors text-start cursor-pointer ${
          activeSection === "section-6" && "text-emerald-500 font-semibold"
        }`}
        onClick={() => {
          document
            .getElementById(`section-6`)
            ?.scrollIntoView({ behavior: "smooth" });
          setActiveSection("section-6");
        }}
      >
        6. Quy trình 5S có giống với Kaizen?
      </button>
      <button
        className={`px-3 py-2 rounded-lg transition-colors text-start cursor-pointer ${
          activeSection === "section-7" && "text-emerald-500 font-semibold"
        }`}
        onClick={() => {
          document
            .getElementById(`section-7`)
            ?.scrollIntoView({ behavior: "smooth" });
          setActiveSection("section-7");
        }}
      >
        7. Đối tượng nào nên áp dụng 5S?
      </button>
      <button
        className={`px-3 py-2 rounded-lg transition-colors text-start cursor-pointer ${
          activeSection === "section-8" && "text-emerald-500 font-semibold"
        }`}
        onClick={() => {
          document
            .getElementById(`section-8`)
            ?.scrollIntoView({ behavior: "smooth" });
          setActiveSection("section-8");
        }}
      >
        8. Các yếu tố tạo nên thành công cho quy trình 5S
      </button>
    </div>
  );
}
