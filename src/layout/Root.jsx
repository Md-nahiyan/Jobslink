import { Outlet } from "react-router";
import Footer from "../layout/Footer";
import Header from "../layout/Header";

export default function Root() {
  return (
    <div className="">
      <div className="relative h-full w-full bg-neutral-900">
        <div className="absolute inset-0 bg-fuchsia-400 bg-[size:20px_20px] opacity-20 blur-[100px]"></div>
      </div>
      <main className="min-h-[100vh]">
        <Header />
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
