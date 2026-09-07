import Link from "next/link";
import { navItems } from "../constants";

const NavBar = () => {
  return (
    <div className="w-full flex-center fixed z-50 top-0 left-0 md:px-10 px-5">
      <div className="container md:pt-4 pt-3 md:pb-10 pb-5 flex items-center justify-between">
        <img
          // src="/images/logo.png"
          src="/images/ankit-logo.png"
          alt="logo"
          className="md:size-20 size-10 object-cover object-center"
        />
        <div className="md:flex items-center gap-7 hidden">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="relative after:absolute after:bg-gray-200 after:bottom-0 after:left-0 after:h-[2px]
               after:w-full after:origin-bottom-right after:scale-x-0 hover:after:origin-bottom-left
                hover:after:scale-x-100 after:transition-transform after:ease-in-out after:duration-300"
            >
              <Link className="gradient-title text-lg lg:text-2xl tracking-widest font-semibold" href={item.href}>
                {item.name}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavBar;