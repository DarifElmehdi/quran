import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Surah from "../surah/Surah";

function Surahs(props) {
    const [audioList, setAudioList] = useState([]);
    let { identifier } = useParams();
    const getAudios = () => {
        axios
            .get("https://alquran-server.herokuapp.com/audiolist/" + identifier)
            .then((res) => {
                setAudioList(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getAudios();
    }, []);

    return (
        <div className="my-4 px-4 md:px-6 lg:px-8 grid grid-cols-1 gap-2">
            {!audioList && <div>LOADING ...</div>}
            {audioList &&
                audioList.map((item) => (
                    <Surah
                        key={item.index}
                        number={item.index}
                        arName={item.ar_name}
                        enName={item.en_name}
                        enTrName={item.en_tr_name}
                        enType={item.en_type}
                        arType={item.ar_type}
                    />
                ))}
        </div>
    );
}

export default Surahs;
