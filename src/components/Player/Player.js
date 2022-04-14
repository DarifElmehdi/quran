import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import React, { useEffect, useState } from "react";
function Player(props) {
    let { audio, audiolist } = props;
    const [src, setSrc] = useState("");

    const onEnded = () => {
        setSrc(
            audiolist[audiolist.findIndex((item) => item.url === src) + 1].url
        );
    };
    useEffect(() => {
        setSrc(audio);
        console.log(audio);
    }, [audio]);

    return (
        <div className="fixed w-full bottom-0">
            {audiolist.length > 0 && (
                <div className="h-8 w-full bg-white flex justify-evenly items-start">
                    <h1>
                        {
                            audiolist[
                                audiolist.findIndex(
                                    (item) => item.url === src
                                ) + 1
                            ].en_name
                        }
                    </h1>
                    <h1>: </h1>
                    <h1 dir="rtl">
                        {
                            audiolist[
                                audiolist.findIndex(
                                    (item) => item.url === src
                                ) + 1
                            ].ar_name
                        }
                    </h1>
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
