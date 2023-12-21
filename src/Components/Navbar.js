import { useState } from "react";

function Navbar() {
  const links = [
    { name: "Home", link: "/" },
    { name: "About", link: "/" },
    { name: "Training", link: "/" },
    { name: "Gallery", link: "/" },
    { name: "Contact us", link: "/" },
  ];

  let [open, setOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r flex items-center flex-col md:flex-row to from-black to to-amber-300 flex flex-col md:flex-row">
      {/* logo  */}
      <div
        id="logo"
        className="p-2 md:w-[80%] rounded md:text-left text-center"
      >
        <span className="italic text-amber-400 rounded-full py-1 text-4xl text-center font-bold tracking-tighter shadow-lg px-6 shadow-amber-500">
          Shark Fitness
        </span>
      </div>

      <div
        onClick={() => setOpen(!open)}
        className="text-4xl absolute right-5 top-3 cursor-pointer md:hidden"
      >
        <ion-icon name={open ? "close" : "menu"}></ion-icon>
      </div>

      <ul
        className={`md:ms-auto md:justify- absolute me-auto md:m-unset md:bg-none md:static flex flex-col md:flex-row w-full mt-[-23px] md:mt-0 bg-gradient-to-r from-black to to-amber-300 text-white p-5 md:p-0 transition-all duration-500 md:mr-5 ease-in md:justify-end ${
          open ? "top-20" : "top-[-490px]"
        }`}
      >
        {links.map((link) => (
          <li
            key={link.name}
            className="py-2 my-2 text-xl md:text-xl md:mx-1 border-b md:border-none lg:mx-3 "
            style={{ fontFamily: "font-family: 'Noto Sans', sans-serif;" }}
          >
            <a
              className="px-4 md:px-2 md:text-black lg:text-xl font-bold text-base rounded hover:shadow-xl hover:shadow-amber-100"
              href={link.link}
            >
              {link.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
