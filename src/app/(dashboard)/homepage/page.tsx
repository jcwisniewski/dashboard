import Drawer from "@/components/Layouts/Drawer";
import Header from "@/components/Layouts/Header";
import Summary from "@/components/dashboard/Summary";
import Welcome from "@/components/dashboard/Welcome";

export default function Homepage() {
  const data = { user: "Julaio" };
  return (
    <>
      <Header />
      <div className=" flex bg-white ">
        <Drawer />
        <div className="flex flex-1 flex-col p-10 overflow-auto">
          <Welcome user={data.user} />
          <Summary />
        </div>
      </div>
    </>
  );
}
