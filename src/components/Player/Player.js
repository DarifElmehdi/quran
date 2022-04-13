import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import React from "react";
function Player(props) {
    let { audio } = props;

    const onEnded = () => {
        console.log("end");
    };

    return (
        <div className="fixed w-full bottom-0">
            <AudioPlayer volume={0.5} onEnded={onEnded} src={audio} />
        </div>
    );
}
export default Player;
