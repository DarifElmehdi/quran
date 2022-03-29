import React, { useEffect, useState } from "react";
import axios from "axios";
import Surah from "./Surah";

function Gallerie(props) {
    let [surah, setSurah] = useState();

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
        <div className="w-full bg-slate-300 flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2   lg:grid-cols-3 gap-4">
                {!surah && <div> loading....</div>}
                {surah &&
                    surah.map((item) => (
                        <Surah
                            id={item.index}
                            name={item.name}
                            ar_name={item.name_translations.ar}
                            en_name={item.name_translations.en}
                            number_of_surah={item.number_of_surah}
                            number_of_ayah={item.number_of_ayah}
                            type={item.type}
                        ></Surah>
                    ))}
            </div>
        </div>
    );
}

export default Gallerie;
