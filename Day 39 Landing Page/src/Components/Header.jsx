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
      <div>
        <FaBarsStaggered />
      </div>
    </div>
  );
}
export default Header;
