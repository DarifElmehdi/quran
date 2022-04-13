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
        <div>
            <div className="label">
                <h2>Available Reciters</h2>
                <h2 dir="rtl"> التلاوات المتاحة</h2>
            </div>
            {filtredList && (
                <Search
                    searchterm={searchTerm}
                    searchhandler={searchHandler}
                    placeholder="Search Reciter"
                />
            )}
            {!filtredList && (
                <div className="w-full flex justify-center">
                    <img src="assets/loading.gif" alt="Loading .." />
                </div>
            )}
            <div className="card-container">
                {filtredList &&
                    filtredList.map((item) => (
                        <Reciter
                            key={recitersList.indexOf(item)}
                            enName={item.en_name}
                            arName={item.ar_name}
                            identifier={item.identifier}
                        />
                    ))}
            </div>
        </div>
    );
}

export default Reciters;
