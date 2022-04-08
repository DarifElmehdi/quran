import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-h5-audio-player/lib/styles.css";
import ArAyah from "./Ayah/ArAyah";
import EnAyah from "./Ayah/EnAyah";
import Player from "./Player/Player";

function Quran(props) {
    const [reciters, setReciters] = useState();
    const [identifier, setIdentifier] = useState("ar.abdullahbasfar");
    const [surah, setSurah] = useState();
    const [ensurah, setEnSurah] = useState();
    const [surahnumber, setSurahNumber] = useState(1);
    const [meta, setMeta] = useState();
    const [audio, setAudio] = useState();
    const [index, setIndex] = useState(0);

    const getReciters = () => {
        axios
            .get(
                "https://api.alquran.cloud/v1/edition?format=audio&language=ar&type=versebyverse"
            )
            .then(function (response) {
                setReciters(response.data.data);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const getMeta = () => {
        axios
            .get("https://api.alquran.cloud/v1/meta")
            .then(function (response) {
                setMeta(response.data.data.surahs.references);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const getSurah = () => {
        axios
            .get(
                `https://api.alquran.cloud/v1/surah/${surahnumber}/${identifier}`
            )
            .then(function (response) {
                setSurah(response.data.data.ayahs);
                setAudio(response.data.data.ayahs.filter((ayah) => "audio"));
            })
            .catch(function (error) {
                console.log(error);
            });
    };
    const getEnSurah = () => {
        axios
            .get(`https://api.alquran.cloud/v1/surah/${surahnumber}/en.asad`)
            .then(function (response) {
                setEnSurah(response.data.data.ayahs);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    useEffect(() => {
        getReciters();
        getMeta();
    }, []);

    useEffect(() => {
        getSurah();
        getEnSurah();
        return () => {
            setIndex(0);
            setAudio();
        };
    }, [identifier, surahnumber]);

    const handleReciter = (e) => {
        setIdentifier(e.target.value);
    };
    const handleSurah = (e) => {
        setSurahNumber(e.target.value);
    };
    const onEnded = () => {
        if (index < audio.length - 1 && index >= 0) {
            setIndex(index + 1);
        } else {
            if (surahnumber < 114) setSurahNumber(surahnumber + 1);
        }
    };

    const onClickNext = () => {
        if (index < audio.length - 1 && index >= 0) {
            setIndex(index + 1);
        }
    };

    const onClickPrevious = () => {
        if (index < audio.length - 1 && index >= 0) {
            setIndex(index - 1);
        }
    };

    return (
        <>
            <div className="bg-player-bg bg-cover bg-center h-screen py-12 px-w-full flex flex-col text-slate-900">
                <div className="mt-12 flex justify-around items-center">
                    <div dir="rtl">
                        {!reciters && <div>Reciters Loading ...</div>}
                        {reciters && (
                            <div>
                                <select
                                    name="reciters"
                                    className=" h-10 w-52 md:w-auto font-mono border-2 hover:border-indigo-500 justify-between bg-white bg-opacity-75"
                                    onChange={handleReciter}
                                >
                                    {reciters.map((item) => (
                                        <option
                                            key={item.identifier}
                                            value={item.identifier}
                                        >
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>
                    <div dir="rtl">
                        {!meta && <div>meta Loading ...</div>}
                        {meta && (
                            <div>
                                <select
                                    name="meta"
                                    className=" h-10 w-40 font-mono border-2 hover:border-indigo-500 justify-between bg-white bg-opacity-75"
                                    onChange={handleSurah}
                                >
                                    {meta.map((item) => (
                                        <option
                                            key={item.name}
                                            value={item.number}
                                        >
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex flex-col mt-8">
                    <img
                        src="assets/top.png"
                        className="px-8 h-40 object-contain"
                    />
                    {surah && (
                        <ArAyah
                            {...surah[index]}
                            index={index > 0 ? index : null}
                        />
                    )}

                    {ensurah && (
                        <EnAyah
                            {...ensurah[index]}
                            index={index > 0 ? index : null}
                        />
                    )}
                    <img
                        src="assets/bottom.png"
                        className="px-8 h-40 object-contain"
                    />
                </div>
                {audio && (
                    <Player
                        {...audio[index]}
                        onEnded={onEnded}
                        onClickNext={onClickNext}
                        onClickPrevious={onClickPrevious}
                    />
                )}
            </div>
        </>
    );
}

export default Quran;
