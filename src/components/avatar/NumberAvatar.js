import React from "react";

function NumberAvatar(props) {
    let { number } = props;
    return (
        <div className="w-8 h-8 rounded-full  text-neutral-100 bg-gray-900 flex items-center justify-center ">
            <h1>{number}</h1>
        </div>
    );
}

export default NumberAvatar;
