import React from "react";

function EnAyah(props) {
    const { text, number, index } = props;
    return (
        <div className="h-auto  mx-12 lg:mx-64">
            <div>
                <div
                    key={number}
                    className="px-4 py-2 my-2 rounded-xl text-center bg-white bg-opacity-50 text-xl md:text-2xl "
                >
                    {text}
                    {index !== null ? index : ""}
                </div>
            </div>
        </div>
    );
}

export default EnAyah;
