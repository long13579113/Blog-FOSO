"use client";
import Image from "next/image";
import thumbsUp from "../../public/thumbs up.svg";
import greenHeart from "../../public/green heart.svg";
import hushedFace from "../../public/hushed face.svg";
import poutingFace from "../../public/pouting face.svg";
import starStruck from "../../public/star-struck.svg";
import yawningFace from "../../public/yawning face.svg";
import { useState } from "react";

export default function ReactCard() {
  const [reactMode, setReactMode] = useState("");
  return (
    <div className="flex flex-col items-center rounded-2xl shadow-sm shadow-gray-300 p-8">
      <div>Bạn thấy bài viết như thế nào?</div>
      <div>4 phản hồi</div>
      <div className="flex gap-4">
        <div
          className={`flex flex-col items-center rounded-sm px-3 text-[15px] cursor-pointer ${
            reactMode === "thumbsup" &&
            "border-2 border-emerald-400 text-emerald-400"
          }`}
          onClick={() =>
            setReactMode((prev) => {
              if (prev !== "thumbsup") {
                return "thumbsup";
              } else return "";
            })
          }
        >
          <Image src={thumbsUp} alt="thumbsUp" className="w-16 h-16" />
          <div className="font-bold">1</div>
          <div>Hữu ích</div>
        </div>
        <div
          className={`flex flex-col items-center rounded-sm px-3 text-[15px] cursor-pointer ${
            reactMode === "greenheart" &&
            "border-2 border-emerald-400 text-emerald-400"
          }`}
          onClick={() =>
            setReactMode((prev) => {
              if (prev !== "greenheart") {
                return "greenheart";
              } else return "";
            })
          }
        >
          <Image src={greenHeart} alt="greenHeart" className="w-16 h-16" />
          <div className="font-bold">2</div>
          <div>Yêu thích</div>
        </div>
        <div
          className={`flex flex-col items-center rounded-sm px-3 text-[15px] cursor-pointer ${
            reactMode === "starstruck" &&
            "border-2 border-emerald-400 text-emerald-400"
          }`}
          onClick={() =>
            setReactMode((prev) => {
              if (prev !== "starstruck") {
                return "starstruck";
              } else return "";
            })
          }
        >
          <Image src={starStruck} alt="starStruck" className="w-16 h-16" />
          <div className="font-bold">0</div>
          <div>Thú vị</div>
        </div>
        <div
          className={`flex flex-col items-center rounded-sm px-3 text-[15px] cursor-pointer ${
            reactMode === "hushedface" &&
            "border-2 border-emerald-400 text-emerald-400"
          }`}
          onClick={() =>
            setReactMode((prev) => {
              if (prev !== "hushedface") {
                return "hushedface";
              } else return "";
            })
          }
        >
          <Image src={hushedFace} alt="hushedFace" className="w-16 h-16" />
          <div className="font-bold">1</div>
          <div>Bất ngờ</div>
        </div>
        <div
          className={`flex flex-col items-center rounded-sm px-3 text-[15px] cursor-pointer ${
            reactMode === "yawningface" &&
            "border-2 border-emerald-400 text-emerald-400"
          }`}
          onClick={() =>
            setReactMode((prev) => {
              if (prev !== "yawningface") {
                return "yawningface";
              } else return "";
            })
          }
        >
          <Image src={yawningFace} alt="yawningFace" className="w-16 h-16" />
          <div className="font-bold">0</div>
          <div>Nhàm chán</div>
        </div>
        <div
          className={`flex flex-col items-center rounded-sm px-3 text-[15px] cursor-pointer ${
            reactMode === "poutingface" &&
            "border-2 border-emerald-400 text-emerald-400"
          }`}
          onClick={() =>
            setReactMode((prev) => {
              if (prev !== "poutingface") {
                return "poutingface";
              } else return "";
            })
          }
        >
          <Image src={poutingFace} alt="poutingFace" className="w-16 h-16" />
          <div className="font-bold">0</div>
          <div>Tức giận</div>
        </div>
      </div>
    </div>
  );
}
