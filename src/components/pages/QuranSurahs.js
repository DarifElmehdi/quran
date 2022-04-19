import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import SurahInfo from "../surahs/SurahInfo";
import Search from "../search/Search";

function QuranSurahs(props) {
    const [surahList, setSurahList] = useState();
    const [filtredList, setFiltredList] = useState();
    const searchTerm = useRef("");

    const getSurahList = () => {
        axios
            .get("https://alquran-server.herokuapp.com/surahs")
            .then((res) => {
                setSurahList(res.data);
                setFiltredList(res.data);
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        getSurahList();
    }, []);

    const searchHandler = () => {
        setFiltredList(
            surahList.filter(
                (item) =>
                    item.englishName
                        .toLowerCase()
                        .includes(searchTerm.current.value.toLowerCase()) ||
                    item.englishNameTranslation
                        .toLowerCase()
                        .includes(searchTerm.current.value.toLowerCase()) ||
                    item.name
                        .toLowerCase()
                        .includes(searchTerm.current.value.toLowerCase())
            )
        );
    };
    return (
        <div>
            <div className="label">
                <h2>Quran Surahs</h2>
                <h2 dir="rtl">سور القران</h2>
            </div>
            {filtredList && (
                <Search
                    searchterm={searchTerm}
                    searchhandler={searchHandler}
                    placeholder="Search Reciter"
                />
            )}
            {!filtredList && (
                <div className="loader">
                    <img src="../assets/loading.gif" alt="Loading .." />
                </div>
            )}
            <div className="quran-surahs-container">
                {filtredList &&
                    filtredList.map((item) => (
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
        </div>
    );
}

export default QuranSurahs;
