import React, { useEffect, useState } from "react";

function Player(props) {
    let { number_of_surah } = props;
    function padLeadingZeros(num, size) {
        var s = num + "";
        while (s.length < size) s = "0" + s;
        return s;
    }
    let [url, setUrl] = useState("");
    function reloadPlayer() {
        if (number_of_surah) {
            document.getElementById("my-audio").pause();
            document.getElementById("my-audio").load();
            document.getElementById("my-audio").play();
        }
    }
    useEffect(() => {
        setUrl(
            "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/" +
                padLeadingZeros(number_of_surah, 3) +
                ".mp3"
        );
        reloadPlayer();
        return (number_of_surah = 0);
    }, [number_of_surah]);
    return (
        <>
            {number_of_surah === 0 ? null : (
                <audio
                    id="my-audio"
                    controls
                    autoPlay
                    className="fixed bottom-0 w-full border-2 border-cyan-600 rounded-full"
                >
                    <source src={url} />
                </audio>
            )}
        </>
    );
}

export default Player;
