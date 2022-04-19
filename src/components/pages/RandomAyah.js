import axios from "axios";
import React, { useState, useEffect, useLayoutEffect } from "react";
import NumberAvatar from "../avatar/NumberAvatar";

function RandomAyah(props) {
    const [enAyah, setEnAyah] = useState();
    const [arAyah, setArAyah] = useState();
    const [ayahNumber, setAyahNumber] = useState();
    const getRandomAyah = (number) => {
        axios
            .get(`https://api.alquran.cloud/v1/ayah/${number}/en.itani`)
            .then((res) => {
                setEnAyah(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
        axios
            .get(`https://api.alquran.cloud/v1/ayah/${number}/ar.alafasy`)
            .then((res) => {
                setArAyah(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };
    const randomNum = (min, max) => {
        return Math.floor(Math.random() * (max - min)) + min;
    };
    useEffect(() => {
        setAyahNumber(randomNum(1, 6236));
    }, []);

    useEffect(() => {
        ayahNumber && getRandomAyah(ayahNumber);
    }, [ayahNumber]);

    return (
        <div className="mx-4 md:mx-10 lg:mx-32 p-8 grid grid-cols-1 lg:grid-cols-2 gap-8  mt-6 rounded-xl bg-cyan-100 bg-opacity-25">
            <h1
                dir="rtl"
                className="text-2xl mx-auto lg:col-span-2 bg-white  p-4 rounded-md border-2"
            >
                بِسْمِ ٱللَّٰهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ
            </h1>
            {enAyah && (
                <h1 className="w-full h-full text-2xl mx-auto text-center my-auto bg-white  p-4 rounded-md border-2">
                    {enAyah["data"].text}
                </h1>
            )}
            {arAyah && (
                <h1 className=" w-full h-full text-2xl mx-auto text-center my-auto font-amiri font-bold bg-white  p-4 rounded-md border-2">
                    {arAyah["data"].text}
                </h1>
            )}
            <div className="w-full justify-around items-center flex text-2xl mx-auto lg:col-span-2 bg-white  p-4 rounded-md border-2">
                {enAyah && (
                    <h1 dir="rtl">{enAyah["data"]["surah"].englishName}</h1>
                )}
                {enAyah && (
                    <h1 className="text-2xl px-2 rounded-b-md  bg-cyan-100 rounded-xl">
                        {enAyah["data"].numberInSurah}
                    </h1>
                )}
                {enAyah && <h1 dir="rtl">{enAyah["data"]["surah"].name}</h1>}
            </div>
        </div>
    );
}

export default RandomAyah;
