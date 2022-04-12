import React from "react";
import AudioPlayer from "react-h5-audio-player";
function Player(props) {
    let { audio } = props;
    return (
        <div className="hidden">
            {audio && <AudioPlayer src={audio} volume={0.4} />}
        </div>
    );
}

export default Player;
