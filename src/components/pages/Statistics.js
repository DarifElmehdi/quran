import React from "react";
import Stats from "../stats/Stats";

function Statistics(props) {
    return (
        <div className="p-4 grid grid-cols-1 lg:grid-cols-3 gap-4 bg-cyan-100 bg-opacity-25 mx-4 md:mx-10 lg:mx-32 my-6 rounded-xl">
            <Stats
                img="assets\reciter.png"
                enfact="Riwaya"
                arfact="رواية"
                number={3}
            />
            <Stats
                img="assets\reciter.png"
                enfact="Reciter"
                arfact="قارئ"
                number={198}
            />
            <Stats
                img="assets\reciter.png"
                enfact="Surah"
                arfact="سورة"
                number={114}
            />
        </div>
    );
}

export default Statistics;
