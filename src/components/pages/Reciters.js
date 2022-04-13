import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Reciter from "../reciter/Reciter";
import Search from "../search/Search";

function Reciters(props) {
    const [recitersList, setRecitersList] = useState([]);
    const [filtredList, setFiltredList] = useState();
    const searchTerm = useRef("");
    const getReciters = () => {
        axios
            .get("https://alquran-server.herokuapp.com/reciters")
            .then((res) => {
                setRecitersList(res.data);
                setFiltredList(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getReciters();
    }, []);

    const searchHandler = () => {
        setFiltredList(
            recitersList.filter(
                (item) =>
                    item.en_name.includes(
                        searchTerm.current.value.toLowerCase()
                    ) ||
                    item.ar_name.includes(
                        searchTerm.current.value.toLowerCase()
                    )
            )
        );
    };

    return (
        <div className="my-4 mx-2">
            <Search searchterm={searchTerm} searchhandler={searchHandler} />
            {!filtredList && <div> LOADING ...</div>}
            {filtredList && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {filtredList.map((item) => (
                        <Reciter
                            key={recitersList.indexOf(item)}
                            enName={item.en_name}
                            arName={item.ar_name}
                            identifier={item.identifier}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default Reciters;
