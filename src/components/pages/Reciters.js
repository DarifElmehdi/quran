import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Reciter from "../reciter/Reciter";

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
            recitersList.filter((item) =>
                item.en_name.includes(searchTerm.current.value.toLowerCase())
            )
        );
    };

    return (
        <div className="my-4 mx-2">
            <div className="flex items-center justify-center">
                <input
                    className="px-4 py-2 m-4 w-96 border-2 border-gray-200 focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-s"
                    type="search"
                    placeholder="Search"
                    ref={searchTerm}
                    onChange={() => searchHandler()}
                ></input>
            </div>
            {!filtredList && <div> LOADING ...</div>}
            {filtredList && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2">
                    {recitersList.map((item) => (
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
