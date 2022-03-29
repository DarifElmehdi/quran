import React from "react";

function Player(props) {
    return (
        <div className="w-full fixed bottom-0">
            <audio controls autoplay className="w-full">
                <source src="https://download.quranicaudio.com/quran/mishaari_raashid_al_3afaasee/002.mp3" />
            </audio>
        </div>
    );
}

export default Player;
