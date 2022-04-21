import React, { useEffect, useState } from "react";
import { MenuIcon, XIcon, PlayIcon, PauseIcon } from "@heroicons/react/outline";
import { Link } from "react-router-dom";
import Radio from "../radio/Radio";

function NavBar(props) {
    let links = [
        { key: 1, title: "Home", url: "/" },
        { key: 2, title: "Reciters", url: "/reciters" },
        { key: 3, title: "Surahs", url: "/quransurahs" },
    ];
    let mailto =
        "mailto:elmehdi_darif@um5.ac.ma?subject=Quran Live WebSite&cc=darifmehdi1998@gmail.com&body=Feel free to contact us";

    const [open, setOpen] = useState(false);
    const [nav, setNav] = useState(false);
    const [radio, setRadio] = useState(false);
    const [showRadio, setShowRadio] = useState(true);

    const changBackground = () => {
        window.scrollY > 300 ? setNav(true) : setNav(false);
    };

    window.addEventListener("scroll", changBackground);

    const handleRadio = (ele = document.getElementById("radio")) => {
        if (radio) {
            ele.pause();
            setRadio(false);
        } else {
            ele.play();
            setRadio(true);
        }
    };

    useEffect(() => {
        setShowRadio(!window.location.pathname.includes("audio"));
        !showRadio && setRadio(false);
    });

    return (
        <div
            className={
                nav
                    ? "w-full fixed z-20 text-white bg-gray-800 bg-opacity-90"
                    : "w-full fixed z-20 text-white bg-none"
            }
        >
            <div className="lg:flex px-4 lg:px-10 lg:justify-between">
                <div className="cursor-pointer flex items-center">
                    <Link to="/" className=" text-2xl  flex items-center">
                        <img
                            src="/assets/logo.png"
                            alt="quran"
                            className="h-10 w-10 m-2"
                        />
                        Quran
                    </Link>
                </div>
                <ul
                    className={`${
                        !open ? "hidden" : ""
                    } lg:visible lg:flex lg:items-center lg:space-x-4`}
                >
                    {links.map((link) => (
                        <li key={link.key} className=" m-4 lg:ml-8">
                            <Link
                                to={link.url}
                                className="px-2 py-1 rounded-full  hover:bg-slate-100 hover:bg-opacity-20 "
                            >
                                {link.title}
                            </Link>
                        </li>
                    ))}
                    <li className="m-4 lg:ml-8">
                        <a
                            href={mailto}
                            className="px-2 py-1 rounded-full  hover:bg-slate-100 hover:bg-opacity-20 "
                        >
                            Contact me
                        </a>
                    </li>
                    {showRadio && (
                        <li
                            className="ml-4 lg:ml-8 w-40 my-4 lg:mt-0 lg:mb-0 px-2 py-1 rounded-full bg-cyan-500 hover:bg-cyan-100 hover:text-slate-800 text-white cursor-pointer"
                            onClick={() => handleRadio()}
                        >
                            {!radio && (
                                <div className="flex items-center">
                                    <PlayIcon className="h-8 w-8 mr-2" />
                                    Play Radio
                                </div>
                            )}
                            {radio && (
                                <div className="flex items-center">
                                    <PauseIcon className="h-8 w-8 mr-2" />
                                    Pause Radio
                                </div>
                            )}
                        </li>
                    )}
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
            {showRadio && (
                <Radio id="radio" audio="https://qurango.net/radio/tarateel" />
            )}
        </div>
    );
}
export default NavBar;
