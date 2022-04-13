import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import SurahInfo from "../surahs/SurahInfo";

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
        console.log(filtredList);
        setFiltredList(
            surahList.filter(
                (item) =>
                    item.englishName
                        .toLowerCase()
                        .includes(searchTerm.current.value.toLowerCase()) ||
                    item.englishNameTranslation
                        .toLowerCase()
                        .includes(searchTerm.current.value.toLowerCase())
            )
        );
    };
    return (
        <div>
            <div className="flex items-center justify-center">
                <input
                    className="px-4 py-2 m-4 w-96 border-2 border-gray-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-s"
                    type="search"
                    placeholder="Search"
                    ref={searchTerm}
                    onChange={() => searchHandler()}
                ></input>
            </div>
            <div className="my-4 px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2">
                {!filtredList && <div>LOADING ...</div>}
                {filtredList &&
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
        </div>
    );
}

export default QuranSurahs;
