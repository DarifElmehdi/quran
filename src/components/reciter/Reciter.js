import React from "react";
import { Link } from "react-router-dom";
import Avatar from "../avatar/Avatar";
import { PlayIcon } from "@heroicons/react/outline";

function Reciter(props) {
    let { arName, enName, identifier } = props;
    return (
        <div className="py-2 px-2 flex flex-row rounded-md bg-gray-200  items-center">
            <Avatar enName={enName} />
            <div className="mx-2 grow flex flex-row justify-between items-center text-gray-500">
                <div>
                    <p>{enName}</p>
                </div>
                <div dir="rtl">
                    <p>{arName}</p>
                </div>
            </div>
            <Link to={`/audio/${identifier}`} key={identifier}>
                <PlayIcon className="h-8 w-8 text-slate-600 cursor-pointer" />
            </Link>
        </div>
    );
}

export default Reciter;
