import React, { useEffect, useState } from "react";
import { PlayIcon, PauseIcon } from "@heroicons/react/outline";
function Player(props) {
    let { number_of_surah } = props;
    function padLeadingZeros(num, size) {
        var s = num + "";
        while (s.length < size) s = "0" + s;
        return s;
    }
    let [url, setUrl] = useState("");
    let [play, setPlay] = useState(false);
    function reloadPlayer() {
        if (number_of_surah) {
            setUrl(
                "https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/" +
                    padLeadingZeros(number_of_surah, 3) +
                    ".mp3"
            );
            document.getElementById("my-audio").pause();
            document.getElementById("my-audio").load();
            document.getElementById("my-audio").play();
            setPlay(true);
        }
    }

    function playQuran() {
        document.getElementById("my-audio").play();
        setPlay(true);
    }

    function pauseQuran() {
        document.getElementById("my-audio").pause();
        setPlay(false);
    }
    useEffect(() => {
        reloadPlayer();
        return (number_of_surah = 0);
    }, [number_of_surah]);
    return (
        <>
            {number_of_surah === 0 ? null : (
                <div className="fixed bottom-4 right-4 flex justify-between bg-white rounded-full">
                    <audio
                        id="my-audio"
                        controls
                        autoPlay
                        className="hidden border-2 border-cyan-600 rounded-full"
                    >
                        <source src={url} />
                    </audio>
                    {!play && (
                        <PlayIcon
                            className="w-12 h-12 bg-cyan-500 rounded-full cursor-pointer"
                            onClick={playQuran}
                        />
                    )}
                    {play && (
                        <PauseIcon
                            className="w-12 h-12 bg-cyan-500 rounded-full cursor-pointer"
                            onClick={pauseQuran}
                        />
                    )}
                </div>
            )}
        </>
    );
}

export default Player;
