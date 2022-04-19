import React from "react";

function Stats({ number, arfact, enfact, img }) {
    return (
        <div className="m-auto w-full px-2 py-4 block text-center bg-white rounded-xl">
            <img
                className="mx-auto my-8 h-32 aspect-square rounded-full border-2 hover:border-cyan-300"
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
