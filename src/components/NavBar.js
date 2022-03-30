import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
function NavBar(props) {
    let links = [
        { key: 1, title: "Home", url: "/" },
        { key: 2, title: "Reciters", url: "/reciters" },
        { key: 5, title: "Privacy", url: "/privacy" },
        { key: 6, title: "Contact Us", url: "/contactus" },
    ];

    let [open, setOpen] = useState(false);
    return (
        <div className=" shadow-md w-full fixed z-50">
            <div className="md:flex bg-white px-4 md:px-10 md:justify-between">
                <div className="cursor-pointer flex items-center">
                    <img
                        src="/assets/logo.png"
                        alt="quran"
                        className="h-10 w-auto m-2"
                    />
                    <a
                        href="/"
                        className=" text-3xl mb-2 pl-2 text-slate-900 font-medium"
                    >
                        Quran
                    </a>
                </div>
                <ul
                    className={`${
                        !open ? "hidden" : ""
                    } md:visible md:flex md:items-center md:space-x-4`}
                >
                    {links.map((link) => (
                        <li key={link.key} className=" m-4 md:ml-8">
                            <a
                                href={link.url}
                                className="p-2 rounded-lg text-slate-900 font-medium hover:bg-slate-100 hover:text-yellow-500"
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                    <button className=" m-4 md:ml-8 px-4 py-2 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white">
                        Play Quran
                    </button>
                </ul>
                {open ? (
                    <XIcon
                        className="cursor-pointer w-10 h-10 absolute top-2 right-8 md:hidden hover:bg-slate-100 hover:border-2 hover:border-yellow-500"
                        onClick={() => setOpen(!open)}
                    ></XIcon>
                ) : (
                    <MenuIcon
                        className="cursor-pointer w-10 h-10 absolute top-2 right-8  md:hidden hover:bg-slate-100 hover:border-2 hover:border-yellow-500"
                        onClick={() => setOpen(!open)}
                    ></MenuIcon>
                )}
            </div>
        </div>
    );
}

export default NavBar;
