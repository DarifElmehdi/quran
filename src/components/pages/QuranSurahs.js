import React, { useState, useEffect } from "react";
import axios from "axios";
import SurahInfo from "../surahs/SurahInfo";

function QuranSurahs(props) {
    const [surahList, setSurahList] = useState();
    const getSurahList = () => {
        axios
            .get("https://alquran-server.herokuapp.com/surahs")
            .then((res) => {
                setSurahList(res.data);
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        getSurahList();
    }, []);
    return (
        <div className="my-4 px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
            {!surahList && <div>LOADING ...</div>}
            {surahList &&
                surahList.map((item) => (
                    <SurahInfo
                        key={item.number}
                        number={item.number}
                        arName={item.name}
                        numberOfAyahs={item.numberOfAyahs}
                        enName={item.englishName}
                        enTrName={item.englishNameTranslation}
                        enType={item.revelationType}
                        arType={item.ar_revelationType}
                    />
                ))}
        </div>
    );
}

export default QuranSurahs;
