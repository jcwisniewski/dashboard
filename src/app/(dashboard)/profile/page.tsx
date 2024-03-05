import Drawer from "@/components/Layouts/Drawer";
import Header from "@/components/Layouts/Header";
import Avatar from "@/components/common/Avatar";
import FormLogin from "@/components/login/FormLogin";
import FormInfos from "@/components/profile/FormInfos";

export default function Profile() {
  const data = {
    name: "string",
    last: "string",
    password: "string",
    city: "string",
    stage: "string",
    zip: "string",
  };
  return (
    <>
      <Header />
      <div className=" flex bg-white ">
        <Drawer />
        <div className="flex flex-1 flex-col p-10 overflow-auto gap-2">
          <span>Perfil</span>
          <div>
            <Avatar avatar={"/avatar.png"} name="Julaio" role="Administrador" />
          </div>
          <div>
            <span>Infos</span>
            <FormInfos
              name={data.name}
              last={data.last}
              password={data.password}
              city={data.city}
              stage={data.stage}
              zip={data.zip}
            />
          </div>
        </div>
      </div>
    </>
  );
}
