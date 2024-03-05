"use client";
import { ReactElement } from "react";
import DrawerButton from "../common/DrawerButton";
import UserIcon from "../icons/UserIcon";
import CustomerIcon from "../icons/CustomerIcon";
import ProductIcon from "../icons/ProductIcon";
import CartOrderIcon from "../icons/CartOrder";
import CartBuyIcon from "../icons/CartBuy";
import MoneyIcon from "../icons/MoneyIcon";
import { redirect, usePathname } from "next/navigation";
import Link from "next/link";
import HomeIcon from "../icons/HomeIcon";

type MenuTypes = {
  name: string;
  icon: ReactElement;
  pathName: string;
  current: boolean;
}[];

export default function Drawer() {
  const path = usePathname();
  const menus: MenuTypes = [
    {
      name: "Dashboard",
      icon: <HomeIcon w="30px" h="30px" color="#FFFFFF" />,
      pathName: "/homepage",
      current: true,
    },
    {
      name: "Perfil",
      icon: (
        <UserIcon w="30px" h="30px" color="#FFFFFF" strokeColor="#FFFFFF" />
      ),
      pathName: "/profile",
      current: false,
    },
    {
      name: "Clientes",
      icon: <CustomerIcon w="30px" h="30px" color="#FFFFFF" />,
      pathName: "/customers",
      current: false,
    },
    {
      name: "Produtos",
      icon: <ProductIcon w="30px" h="30px" color="#FFFFFF" />,
      pathName: "/products",
      current: false,
    },
    {
      name: "Vendas",
      icon: (
        <CartOrderIcon
          w="30px"
          h="30px"
          color="#FFFFFF"
          colorStroke="#FFFFFF"
        />
      ),
      pathName: "/orders",
      current: false,
    },
    {
      name: "Compras",
      icon: (
        <CartBuyIcon w="30px" h="30px" color="#FFFFFF" colorStroke="#FFFFFF" />
      ),
      pathName: "/shopping",
      current: false,
    },
    {
      name: "Financeiro",
      icon: <MoneyIcon w="30px" h="30px" />,
      pathName: "/financial",
      current: false,
    },
  ];

  menus.forEach((item) => {
    if (path?.startsWith(item.pathName)) {
      item.current = true;
    } else {
      item.current = false;
    }
  });
  return (
    <>
      <div
        className="flex flex-col rounded-sm p-4 text-white-normal w-[40%] sm:w-[30%] md:w-[30%] lg:w-[20%] bg-blue-10 overflow-y-auto"
        style={{ height: `calc(100vh - 2.5rem)` }}
      >
        <div>
          {menus &&
            menus.map((menu: any, index: any) => (
              <Link key={index} href={menu.pathName}>
                <DrawerButton
                  name={menu.name}
                  icon={menu.icon}
                  isCurrent={menu.current}
                />
              </Link>
            ))}
        </div>
      </div>
    </>
  );
}
