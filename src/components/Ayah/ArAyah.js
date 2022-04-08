import React from "react";

function ArAyah(props) {
    const { text, number } = props;
    return (
        <div className="h-auto mt-40 mx-10">
            <div dir="rtl">
                <div
                    key={number}
                    className="px-8 py-2 my-2 rounded-xl border-2 bg-white bg-opacity-75 text-center border-indigo-500 font-bold text-xl md:text-3xl lg:text-4xl"
                >
                    {text}
                </div>
            </div>
        </div>
    );
}

export default ArAyah;
