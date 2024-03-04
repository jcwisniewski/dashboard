import Drawer from "@/components/Layouts/Drawer";
import Header from "@/components/Layouts/Header";

export default function Homepage() {
  return (
    <>
      <Header />
      <div className="flex w-full bg-blue-60">
        <Drawer />
        <div className="flex  flex-col p-10 w-full  align-baseline">
          <h1 className="text-[2rem] text-white">Dashboard</h1>
          <span> Welcome, User!</span>
        </div>
      </div>
    </>
  );
}
