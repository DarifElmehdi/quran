import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
function NavBar(props) {
    let links = [
        { title: "Home", url: "/" },
        { title: "Reciters", url: "/" },
        { title: "About Us", url: "/" },
        { title: "Privacy", url: "/" },
        { title: "Contact Us", url: "/" },
    ];

    let [open, setOpen] = useState(false);
    return (
        <div className="w-full fixed top-0 left-0">
            <div className="md:flex bg-white py-2 px-8 md:px-16 justify-between">
                <div className="cursor-pointer flex items-center">
                    <img
                        src="/assets/logo.png"
                        alt="quran"
                        className="h-12 w-12 rounded-full"
                    />
                    <a className="invisible md:visible text-2xl  pl-2 text-slate-700 font-medium">
                        Quran
                    </a>
                </div>
                <ul
                    className={`${
                        !open ? "hidden" : ""
                    } md:visible md:flex md:justify-center md:items-center md:space-x-4`}
                >
                    {links.map((link) => (
                        <li className=" m-4 md:ml-8">
                            <a
                                href={link.url}
                                className="rounded-lg text-slate-700 font-medium hover:bg-slate-100 hover:text-slate-900"
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                    <button className="bg-blue-900 hover:bg-blue-500 font-medium text-white p-2 m-2">
                        Listen Now
                    </button>
                </ul>
                {open ? (
                    <XIcon
                        className="cursor-pointer w-12 h-12 absolute top-2 right-8 md:hidden"
                        onClick={() => setOpen(!open)}
                    ></XIcon>
                ) : (
                    <MenuIcon
                        className="cursor-pointer w-12 h-12 absolute top-2 right-8  md:hidden"
                        onClick={() => setOpen(!open)}
                    ></MenuIcon>
                )}
            </div>
        </div>
    );
}

export default NavBar;
