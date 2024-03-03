import Image from "next/image";

export default function Avatar({ avatar, name, role }: any) {
  return (
    <div className="flex  rounded-full ">
      <Image
        alt="avatar"
        src={avatar}
        width={"40"}
        height={"20"}
        className="rounded-full"
      />
      <div className="flex flex-col ">
        <span className=" ml-4 text-xs">{name}</span>
        <span className=" ml-2 text-xs">{role}</span>
      </div>
    </div>
  );
}
