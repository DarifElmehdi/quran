import React from "react";
import AyahsNumberAvatar from "../avatar/AyahsNumberAvatar";
import NumberAvatar from "../avatar/NumberAvatar";

function SurahInfo(props) {
    let { number, arName, enName, enType, arType, numberOfAyahs } = props;
    return (
        <div className="py-2 px-2 flex flex-row rounded-md bg-gray-200  items-center">
            <NumberAvatar number={number} />
            <div className="mx-2 grow flex flex-row justify-between items-center text-gray-500">
                <div className="w-full md:px-6 lg:px-8 grid grid-cols-2 grid-rows-2  gap-2">
                    <div>
                        <p>{enName}</p>
                    </div>
                    <div dir="rtl">
                        <p>{arName}</p>
                    </div>
                    <div>
                        <p>{enType}</p>
                    </div>
                    <div dir="rtl">
                        <p>{arType}</p>
                    </div>
                </div>
            </div>
            <AyahsNumberAvatar number={numberOfAyahs + " Ayahs"} />
        </div>
    );
}

export default SurahInfo;
