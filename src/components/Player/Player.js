import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import React, { useEffect, useState } from "react";
function Player(props) {
    let { audio, audiolist } = props;
    const [src, setSrc] = useState("");
    const [reciter, setReciter] = useState();

    const onEnded = () => {
        try {
            setSrc(
                audiolist[audiolist.findIndex((item) => item.url === src) + 1]
                    .url
            );
        } catch (err) {
            console.log(err);
        }
    };
    useEffect(() => {
        setSrc(audio);
    }, [audio]);

    useEffect(() => {
        if (audiolist.length > 1) {
            setReciter({
                en_name:
                    audiolist[audiolist.findIndex((item) => item.url === src)]
                        .en_name,
                ar_name:
                    audiolist[audiolist.findIndex((item) => item.url === src)]
                        .ar_name,
            });
        }
    }, [src]);

    return (
        <div className="fixed w-full bottom-0">
            {reciter && (
                <div className="h-8 w-full bg-white flex justify-evenly items-start">
                    <h1>{reciter["en_name"]}</h1>
                    <h1>: </h1>
                    <h1 dir="rtl">{reciter["ar_name"]}</h1>
                </div>
            )}
            <AudioPlayer
                id="player"
                volume={0.5}
                onEnded={() => onEnded()}
                src={src}
            />
        </div>
    );
}
export default Player;
