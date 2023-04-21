"use client";
import Image from "next/image";
import { logo } from "@/public/assets/images/index";
import {
  IoAppsSharp,
  IoApps,
  IoSearchOutline,
  IoCartOutline,
} from "react-icons/io5";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import NavbarBottom from "./NavbarBottom";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="w-full bg-blue text-white sticky top-0 z-50">
      {/* INNER CONTAINER */}
      <div className="border-b-[1px] border-b-white">
        <div className="mx-auto max-w-7xl h-20 px-4 flex items-center justify-between gap-2">
          {/* LOGO */}
          <div className="navBarHover">
            <Link href="/">
              <Image className="w-44" src={logo} alt="logo" />
            </Link>
          </div>

          {/* DEPARTMENT */}
          <div className="navBarHover">
            <IoAppsSharp />
            <p className="text-base font-semibold">Departments</p>
          </div>

          {/* SERVICES */}
          <div className="navBarHover">
            <IoApps />
            <p className="text-base font-semibold">Services</p>
          </div>

          {/* SEARCH BOX */}
          <div className="flex flex-1 h-10 relative">
            <input
              className="h-full w-full rounded-full px-4 text-black text-base outline-none border-[1px] border-transparent focus-visible:border-black duration-300 transition"
              type="text"
              placeholder="Search everything at Shoppers"
            />
            <span className="absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 bg-yellow text-black text-xl">
              <IoSearchOutline className="font-semibold" />
            </span>
          </div>

          {/* MY ITEMS */}
          <div className="navBarHover">
            <AiOutlineHeart />
            <div>
              <p className="text-xs">Recorder</p>
              <h2 className="text-base font-semibold -mt-1">My Items</h2>
            </div>
          </div>

          {/* ACCOUNT */}
          <div className="navBarHover">
            <AiOutlineUser className="text-lg" />
            <div>
              <p className="text-xs">Sign In</p>
              <h2 className="text-base font-semibold -mt-1">Account</h2>
            </div>
          </div>

          {/* CART */}
          <div
            onClick={() => router.push("/cart")}
            className="flex flex-col justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent hover:bg-hoverBg duration-300 relative transition cursor-pointer"
          >
            <IoCartOutline className="text-2xl" />
            <p className="text-sm -mt-2">$0.00</p>
            <span className="absolute w-4 h-4 bg-yellow text-black top-0 right-4 rounded-full flex items-center justify-center text-xs">
              0
            </span>
          </div>
        </div>
      </div>

      <NavbarBottom />
    </div>
  );
};

export default Navbar;
