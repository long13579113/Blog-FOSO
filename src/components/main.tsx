"use client";
import { useState } from "react";
import HandleProduction from "./handleProduction";
import Blog from "./blog";

export default function Main() {
  const [tab, setTab] = useState("blog");
  return (
    <main className="flex flex-col w-full gap-[32px] row-start-2 items-center mt-10">
      {tab === "blog" ? (
        <Blog setTab={setTab} />
      ) : (
        <HandleProduction setTab={setTab} />
      )}
    </main>
  );
}
