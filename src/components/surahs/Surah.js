import React from "react";
import { DotsVerticalIcon } from "@heroicons/react/outline";
import NumberAvatar from "../avatar/NumberAvatar";

function Surah(props) {
    let { number, arName, enName, enTrName, url, setAudio } = props;
    return (
        <div
            className="py-2 px-2 flex flex-row rounded-md bg-neutral-100 shadow-sm  items-center cursor-pointer"
            onClick={() => setAudio(url)}
        >
            <NumberAvatar number={number} />
            <div className="mx-2 grow flex flex-row justify-between items-center text-gray-900">
                <div className="w-full md:px-6 lg:px-8 grid grid-cols-2 lg:grid-cols-3 gap-2">
                    <div>
                        <p>{enName}</p>
                    </div>
                    <div className="hidden lg:block">
                        <p>{enTrName}</p>
                    </div>
                    <div dir="rtl">
                        <p>{arName}</p>
                    </div>
                </div>
            </div>
            <DotsVerticalIcon className="h-8 w-8 mx-2 cursor-pointer" />
        </div>
    );
}

export default Surah;
