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
            <Search searchterm={searchTerm} searchhandler={searchHandler} />
            <div className="my-4 px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
                {!filtredList && <div>LOADING ...</div>}
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
