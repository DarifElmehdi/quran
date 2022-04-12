import React from "react";

function AyahsNumberAvatar(props) {
    let { number } = props;
    return (
        <div className="w-20 h-8 rounded-full bg-slate-600 flex items-center justify-center text-white">
            <h1>{number}</h1>
        </div>
    );
}

export default AyahsNumberAvatar;
