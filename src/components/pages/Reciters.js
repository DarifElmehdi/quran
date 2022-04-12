import React, { useState, useEffect } from "react";
import axios from "axios";
import Reciter from "../reciter/Reciter";

function Reciters(props) {
    const [recitersList, setRecitersList] = useState();

    const getReciters = () => {
        axios
            .get("https://alquran-server.herokuapp.com/reciters")
            .then((res) => {
                setRecitersList(res.data);
            })
            .catch((err) => console.log(err));
    };

    useEffect(() => {
        getReciters();
    }, []);
    return (
        <div className="my-4 mx-2">
            {!recitersList && <div> LOADING ...</div>}
            {recitersList && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2">
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
