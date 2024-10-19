import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function Appbar() {
  const navigate=useNavigate();
  const location = useLocation();
  const [isDropDownMenu,setDropDownMenu]=useState(false)

  // add shadow to top bar while scrolling
  const [isScrolled, setIsScrolled]=useState(false);

  useEffect(()=>{
    const handleScroll=()=>{
      if(window.scrollY > 70)setIsScrolled(true);
      else setIsScrolled(false);
    }

    window.addEventListener("scroll",handleScroll);

    return ()=>{
      window.removeEventListener("scroll", handleScroll);
    }
  },[])

  // check if user in home page only(blogs.tsx) if yes highlight home icon
  const isHomePage=(location.pathname==="/blogs");

  // toggledropdownMenu
  const toggleDropDownMenu=()=>{
    setDropDownMenu(!isDropDownMenu);
  }

  const handleLogout=()=>{
    localStorage.removeItem("token");
    navigate("/home")
  }

  return (
      <div className={`fixed top-0 left-0 right-0 bg-white px-4 flex items-center justify-between border-b py-1 ${isScrolled? "shadow-xl":""}`}>

        {/* Left */}
        <div className="flex justify-center items-center">
          <svg width="60" height="60"
              viewBox="0 -55 256 256" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" preserveAspectRatio="xMidYMid">
              <g>
              <path
                  d="M72.2009141,1.42108547e-14 C112.076502,1.42108547e-14 144.399375,32.5485469 144.399375,72.6964154 C144.399375,112.844284 112.074049,145.390378 72.2009141,145.390378 C32.327779,145.390378 0,112.844284 0,72.6964154 C0,32.5485469 32.325326,1.42108547e-14 72.2009141,1.42108547e-14 Z M187.500628,4.25836743 C207.438422,4.25836743 223.601085,34.8960455 223.601085,72.6964154 L223.603538,72.6964154 C223.603538,110.486973 207.440875,141.134463 187.503081,141.134463 C167.565287,141.134463 151.402624,110.486973 151.402624,72.6964154 C151.402624,34.9058574 167.562834,4.25836743 187.500628,4.25836743 Z M243.303393,11.3867175 C250.314,11.3867175 256,38.835526 256,72.6964154 C256,106.547493 250.316453,134.006113 243.303393,134.006113 C236.290333,134.006113 230.609239,106.554852 230.609239,72.6964154 C230.609239,38.837979 236.292786,11.3867175 243.303393,11.3867175 Z"
                  fill="#000000"
              ></path>
              </g>
          </svg>

          <div className="px-5 text-2xl font-bold">Blogosphere</div>

          <button onClick={()=>{
            navigate("/blogs")
          }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className={`relative transition-all duration-300 ease-in-out ${
            isHomePage
              ? "text-gray-500 size-8"
              : "text-black hover:text-blue-600 hover:scale-105 size-8"
          }`} >
              <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </button>

        </div>

        {/* Right */}
        <div className="flex justify-between items-center gap-x-5 mr-3">
          <Link to={"/publish"}>
            <button className="bg-green-600 rounded-full text-white py-1.5 px-3">
              <div className="flex gap-x-1 pr-1 justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 text-white">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

                <div className="font-semibold">
                  New Post
                </div>
              </div>
            </button>
          </Link>

          {/* user icon */}
          <div className="relative">
            <button onClick={toggleDropDownMenu} className="bg-gray-800 rounded-full w-9 h-9 text-center text-white text-lg flex justify-center items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
              </svg>
            </button>
          </div>

          {/* Dropdown Menu */}
          {isDropDownMenu?<div className="absolute right-1 top-14 p-2 text-center w-24 bg-white shadow-lg rounded-md z-10 border border-gray-200 bg-gray-900">
            <ul>
              <li onClick={handleLogout} className="text-white">Logout</li>
            </ul>
          </div>:null}
        </div>

      </div>
  );
}
