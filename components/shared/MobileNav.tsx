import Image from "next/image";
import NavItems from "./NavItems";

export default function MobileNav() {
  return (
    <nav className="md:hidden">
      <div className="drawer drawer-end">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          {/* Page content here */}
          <label htmlFor="my-drawer" className="drawer-button">
            <Image
              src="/assets/icons/menu.svg"
              alt="menu"
              width={24}
              height={24}
              className="cursor-pointer"
            />
          </label>
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          {/* <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content"> */}
          <ul className=" w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <div className="flex flex-row justify-between wrapper">
              <Image
                src="/assets/images/logo.svg"
                alt="logo"
                width={128}
                height={38}
              />
              <label htmlFor="my-drawer" className="drawer-button">
                <Image
                  src="/assets/icons/menu.svg"
                  alt="menu"
                  width={24}
                  height={24}
                  className="cursor-pointer"
                />
              </label>
            </div>
            <div className="wrapper">
              <NavItems />
            </div>
          </ul>
        </div>
      </div>
    </nav>
  );
}
