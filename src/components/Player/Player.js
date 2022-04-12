import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import React from "react";
function Player(props) {
    let { audio, id } = props;
    return (
        <div className="fixed w-full bottom-0">
            <AudioPlayer
                volume={0.1}
                autoPlay
                id={id}
                src={audio}
                onPlay={(e) => console.log("onPlay")}
            />
        </div>
    );
}
export default Player;
