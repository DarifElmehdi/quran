import React from "react";
import AudioPlayer from "react-h5-audio-player";
function Player(props) {
    const { audio, onEnded, onClickNext, onClickPrevious } = props;
    return (
        <div className="fixed bottom-0 w-screen bg-white">
            {audio && (
                <AudioPlayer
                    src={audio}
                    autoPlay
                    volume={0.4}
                    onEnded={() => onEnded()}
                    onClickNext={() => onClickNext()}
                    onClickPrevious={() => onClickPrevious()}
                />
            )}
        </div>
    );
}

export default Player;
