import React from "react";

function Radio(props) {
    let { audio, id } = props;
    return (
        <div className="hidden">
            {audio && (
                <audio id={id} controls src={audio} preload="none"></audio>
            )}
        </div>
    );
}

export default Radio;
