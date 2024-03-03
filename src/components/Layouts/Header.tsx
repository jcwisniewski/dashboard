import Input from "../common/Input";
import SearchIcon from "../icons/SearchIcon";
import Avatar from "../common/Avatar";
import BellIcon from "../icons/BellIcon";
export default function Header() {
  const data = {
    name: "Julio Cesar",
    role: "Administrator",
    avatar: "/avatar.png",
    notifications: true,
  };
  return (
    <div className="flex flex-row text-white w-screen h-10 bg-blue-header justify-evenly items-center content-baseline">
      <div>Sistema de cadastros</div>
      <div className="flex flex-row items-center gap-4">
        <SearchIcon h="20px" w="20px" />
        <Input />
      </div>
      <div className="flex gap-4 items-center ">
        <BellIcon h="20px" w="20px" hasNotification={data.notifications} />
        <Avatar avatar={data.avatar} name={data.name} role={data.role} />
      </div>
    </div>
  );
}
