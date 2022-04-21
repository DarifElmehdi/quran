import React from "react";

function Stats({ number, arfact, enfact, img }) {
    return (
        <div className="m-auto w-full px-2 py-2 block text-center bg-white rounded-xl">
            <img
                className="mx-auto my-4 h-20 aspect-square "
                src={img}
                alt={img}
            />
            <div className="flex justify-evenly">
                <h1 className="text-2xl my-2">{enfact}</h1>
                <h1 className="text-2xl my-2">:</h1>
                <h1 dir="rtl" className="text-2xl my-2">
                    {arfact}
                </h1>
            </div>
            <h1 className="text-4xl my-2">{number}</h1>
        </div>
    );
}

export default Stats;
