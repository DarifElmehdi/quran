import React from "react";

function Surah(props) {
    const {
        id,
        name,
        ar_name,
        en_name,
        number_of_ayah,
        number_of_surah,
        type,
    } = props;
    return (
        <div
            key={id}
            className="flex flex-row bg-gray-200  items-center font-normal text-white hover:text-cyan-500 rounded-md border-2 hover:border-cyan-500"
        >
            <div className="h-10 w-10 rounded-full bg-gray-500 flex items-center justify-center ">
                {number_of_surah}
            </div>
            <div className="mx-2 grow flex flex-row justify-between items-center text-gray-500">
                <div>
                    <p>{name}</p>
                    <p>{en_name}</p>
                </div>
                <div>
                    <p className="font-mono" dir="rtl">
                        {ar_name}
                    </p>
                    <p>{type}</p>
                </div>
            </div>
            <div className="h-10 w-20 rounded m-2  bg-gray-500 flex justify-center items-center">
                <p>{number_of_ayah} Ayahs</p>
            </div>
        </div>
    );
}

export default Surah;
