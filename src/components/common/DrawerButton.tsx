import GoogleIcon from "../icons/GoogleIcon";

type DrawerButtonType = {
  name?: string;
  icon?: React.ReactNode;
  onClick?: any;
  isCurrent: boolean;
};

export default function DrawerButton({
  name,
  icon,
  onClick,
  isCurrent,
}: DrawerButtonType) {
  return (
    <>
      <div
        className={` flex flex-row items-center gap-3 p-8 ${
          isCurrent ? "bg-blue-50 rounded-md" : "bg-blue-10"
        }`}
      >
        <span>{icon}</span>
        <button onClick={onClick}>{name}</button>
      </div>
    </>
  );
}
