import React, { useState } from "react";
import { MenuIcon, XIcon, PlayIcon } from "@heroicons/react/outline";
import Player from "../Player/Player";
function NavBar(props) {
    let links = [
        { key: 1, title: "Home", url: "/" },
        { key: 2, title: "Reciters", url: "/reciters" },
        { key: 5, title: "Surahs", url: "/quransurahs" },
        { key: 6, title: "Quran", url: "/quran" },
        { key: 7, title: "Contact Us", url: "/" },
    ];

    const [open, setOpen] = useState(false);
    const [nav, setNav] = useState(false);

    const changBackground = () => {
        window.scrollY > 300 ? setNav(true) : setNav(false);
    };
    window.addEventListener("scroll", changBackground);
    return (
        <div
            className={
                nav
                    ? "w-full fixed z-20 text-white bg-slate-500 bg-opacity-80"
                    : "w-full fixed z-20 text-white bg-none"
            }
        >
            <div className="lg:flex px-4 lg:px-10 lg:justify-between">
                <div className="cursor-pointer flex items-center">
                    <img
                        src="/assets/logo.png"
                        alt="quran"
                        className="h-10 w-auto m-2"
                    />
                    <a href="/" className=" text-3xl ">
                        Quran
                    </a>
                </div>
                <ul
                    className={`${
                        !open ? "hidden" : ""
                    } lg:visible lg:flex lg:items-center lg:space-x-4`}
                >
                    {links.map((link) => (
                        <li key={link.key} className=" m-4 lg:ml-8">
                            <a
                                href={link.url}
                                className="px-2 py-1 rounded-full font-medium hover:bg-slate-100 hover:bg-opacity-20 "
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                    <button className=" lg:ml-8 mb-4 lg:mb-0 px-2 py-1 rounded-full bg-cyan-500 hover:bg-cyan-600 text-white">
                        <div className="flex items-center">
                            <PlayIcon className="h-8 w-8 mr-2" />
                            Play Radio
                        </div>
                    </button>
                </ul>
                {open ? (
                    <XIcon
                        className="cursor-pointer w-10 h-10 absolute top-2 right-8 lg:hidden hover:bg-slate-100 hover:bg-opacity-20"
                        onClick={() => setOpen(!open)}
                    ></XIcon>
                ) : (
                    <MenuIcon
                        className="cursor-pointer w-10 h-10 absolute top-2 right-8  lg:hidden hover:bg-slate-100 hover:bg-opacity-20"
                        onClick={() => setOpen(!open)}
                    ></MenuIcon>
                )}
            </div>
            <Player play={true} audio={"https://qurango.net/radio/tarateel"} />
        </div>
    );
}

export default NavBar;
