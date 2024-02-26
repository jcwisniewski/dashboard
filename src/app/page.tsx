import Header from "@/components/Layouts/Header";
import FormLogin from "@/components/login/FormLogin";

//
export default function Home() {
  return (
    <div className="w-screen h-screen bg-gradient-to-tr from-purple to-blue  p-20 ">
      <div className="  bg-white mx-auto h-full w-[50%] sm:w-[20% w-[80%] md:w-[50%] lg:w-[35%] text-center items-center content-center justify-center  p-10 rounded-md shadow-2xl">
        <span className="font-bold text-2xl ">Login</span>
        <FormLogin />
      </div>
    </div>
  );
}
