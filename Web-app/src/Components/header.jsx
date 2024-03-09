import { Link } from "react-router-dom";
import menu from "/assets/menu.png";
import logo from "/assets/logo5.png";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header className="bg-[#ffffff] px-8"style={{ boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.5)' }}>
        <div className=" flex-between mx-auto py-2 max-w-[1140px] ">
          <div>
            <img src={logo} width={50} alt="" />
          </div>
          {/* desktop nav */}
          <nav className="hidden lg:flex ">
            <div>
              <div className="flex gap-8 ">
                <a href="#"className="hover:underline">Features</a>
                <a href="#"className="hover:underline">How it Works</a>
                <a href="#" className="hover:underline">Agenda</a>
                <a href="#" className="hover:underline">Meet the Team</a>
                <a href="#" className="hover:underline">Donations</a>
                <a href="#" className="hover:underline">Contact Us</a>
              </div>
            </div>
          </nav>

          <Link
            to="/login"
            className="hidden lg:block rounded-lg border-[#656565] border-[1px] py-[15px] px-5 transition-all duration-300 hover:bg-pink-500 hover:text-white hover:shadow-lg"
          >
            Login/Register
          </Link>

          {/* harmburger menu */}
          <div className=" lg:hidden ">
            {!isOpen ? (
              <img
                src={menu}
                width={32}
                onClick={() => setIsOpen(!isOpen)}
                alt=""
              />
            ) : (
              <div
                className="text-5xl text-pry-col"
                onClick={() => setIsOpen(!isOpen)}
              >
                x
              </div>
            )}
          </div>

          {/* mobile nav */}
          <div
            className={`${
              !isOpen ? "hidden" : "block w-[80vw] md:w-[50vw] transition-all"
            } 
              lg:hidden drop-shadow-mobile-nav
           border-[#E1E6EF] border-y-[0.298611px]  
           border-solid pb-10 pt-12 fixed bottom-0 overflow-auto 
           top-[70px] right-0 bg-white z-10`}
          >
            <div className="px-4 pt-2 pb-3">
              <div className="flex flex-col items-start gap-8 ">
                <Link className="text-pry-blue-600 hover:underline  " to="/">
                  Home
                </Link>
                <Link to="#" className="hover:underline">Features</Link>
                <Link to="#"className="hover:underline">How it Works</Link>
                <Link to="#"className="hover:underline">Agenda</Link>
                <Link to="#"className="hover:underline">Meet The Team</Link>
                <Link to="#"className="hover:underline">Donations</Link>
                <Link to="#"className="hover:underline">Contact Us</Link>
                <Link
                
                  to="/login"
                  className=" rounded-lg border-[#080808] 
                  border-[1px] py-4 px-8 inline transition-all duration-300 hover:bg-purple-500 hover:text-white hover:shadow-lg"
                >
                  Login/Register
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
