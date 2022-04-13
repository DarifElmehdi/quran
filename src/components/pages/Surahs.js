import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Surah from "../surahs/Surah";
import Player from "../Player/Player";
import Search from "../search/Search";

function Surahs(props) {
    const [audioList, setAudioList] = useState([]);
    const [audio, setAudio] = useState("");
    const [filtredList, setFiltredList] = useState();
    const [reciter, setReciter] = useState();
    const searchTerm = useRef("");
    let { identifier } = useParams();

    const getReciter = () => {
        axios
            .get("https://alquran-server.herokuapp.com/reciter/" + identifier)
            .then((res) => {
                setReciter(res.data);
            })
            .catch((err) => console.log(err));
    };

    const getAudios = () => {
        axios
            .get("https://alquran-server.herokuapp.com/audiolist/" + identifier)
            .then((res) => {
                setAudioList(res.data);
                setFiltredList(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getAudios();
        getReciter();
    }, [identifier]);

    const searchHandler = () => {
        setFiltredList(
            audioList.filter(
                (item) =>
                    item.en_name
                        .toLowerCase()
                        .includes(searchTerm.current.value.toLowerCase()) ||
                    item.en_tr_name
                        .toLowerCase()
                        .includes(searchTerm.current.value.toLowerCase()) ||
                    item.ar_name
                        .toLowerCase()
                        .includes(searchTerm.current.value.toLowerCase())
            )
        );
    };

    return (
        <div>
            {reciter && (
                <div className="label">
                    <h2>{reciter.en_name + " >" + reciter.en_riwaya}</h2>
                    <h2 dir="rtl" className="hidden md:block">
                        {reciter.ar_name + " >" + reciter.ar_riwaya}
                    </h2>
                </div>
            )}
            {filtredList && (
                <Search
                    searchterm={searchTerm}
                    searchhandler={searchHandler}
                    placeholder="Search Reciter"
                />
            )}

            {!filtredList && (
                <div className="w-full flex justify-center">
                    <img src="../assets/loading.gif" alt="Loading .." />
                </div>
            )}

            <div className="surahs-container">
                {filtredList &&
                    filtredList.map((item, index) => (
                        <Surah
                            id={index}
                            key={item.index}
                            number={item.index}
                            arName={item.ar_name}
                            enName={item.en_name}
                            enTrName={item.en_tr_name}
                            enType={item.en_type}
                            arType={item.ar_type}
                            url={item.url}
                            setAudio={setAudio}
                        />
                    ))}
            </div>
            <Player audio={audio} />
        </div>
    );
}

export default Surahs;
