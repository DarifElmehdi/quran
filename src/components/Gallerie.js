import React, { useEffect, useState } from "react";
import axios from "axios";
import Surah from "./Surah";
import Player from "./Player";
function Gallerie(props) {
    let [surah, setSurah] = useState();
    let [play, setPlay] = useState(0);
    const fetchSurahs = () => {
        axios
            .get(
                "https://raw.githubusercontent.com/penggguna/QuranJSON/master/quran.json"
            )
            .then((resp) => setSurah(resp.data))
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        fetchSurahs();
    }, []);
    return (
        <>
            <Player number_of_surah={play}></Player>
            <div className="flex w-full  justify-center">
                <div className=" my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-4">
                    {!surah && <div> loading....</div>}
                    {surah &&
                        surah.map((item) => (
                            <div
                                key={item.number_of_surah}
                                className="cursor-pointer"
                                onClick={() => setPlay(item.number_of_surah)}
                            >
                                <Surah
                                    name={item.name}
                                    ar_name={item.name_translations.ar}
                                    en_name={item.name_translations.en}
                                    number_of_surah={item.number_of_surah}
                                    number_of_ayah={item.number_of_ayah}
                                    type={item.type}
                                ></Surah>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
}

export default Gallerie;
