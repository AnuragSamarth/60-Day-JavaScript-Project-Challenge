import { FaBarsStaggered } from "react-icons/fa6";

function Header() {
  return (
    <div className=" w-full flex justify-between mx-4">
      <div className="w-14 flex items-center justify-center gap-2">
        <img
          className=" w-full h-full"
          src="./public/logo.png"
          alt="logo"
        />
        <button className=" bg-gradient-to-r from-orange-400 to-red-400 text-xs text-white px-2.5 py-1.5 rounded-2xl">Hiring</button>
      </div>
      <ul className="hidden lg:flex justify-between items-center font-lato text-gray-400 gap-4">
        <li><a href="#">Plans</a></li>
        <li><a href="#">Find Domain</a></li>
        <li><a href="#">Why Hoster</a></li>
      </ul>
      <div className="hidden lg:flex justify-center items-center font-lato gap-6">
        <a href="#" className=" text-gray-400">sign In</a>
        <button className="rounded-md px-4 py-3 bg-blue-400 hover:bg-blue-600">Join Waitlist</button>
      </div>
      <div className=" lg:hidden">
        <FaBarsStaggered />
      </div>
    </div>
  );
}
export default Header;
