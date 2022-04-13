import React, { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Surah from "../surahs/Surah";
import Player from "../Player/Player";

function Surahs(props) {
    const [audioList, setAudioList] = useState([]);
    const [audio, setAudio] = useState("");
    const [filtredList, setFiltredList] = useState();
    const searchTerm = useRef("");
    let { identifier } = useParams();
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
    }, []);

    const searchHandler = () => {
        setFiltredList(
            audioList.filter(
                (item) =>
                    item.en_name
                        .toLowerCase()
                        .includes(searchTerm.current.value.toLowerCase()) ||
                    item.en_tr_name
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
            <div className="mt-4 mb-10 px-4 md:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-2">
                {!filtredList && <div>LOADING ...</div>}
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
