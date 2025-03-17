// import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import Main from "@/components/main";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-4 py-12 font-[family-name:var(--font-geist-sans)]">
      <Header />
      <Main />
      {/* <Footer /> */}
    </div>
  );
}
