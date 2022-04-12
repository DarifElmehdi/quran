import React, { useEffect, useState } from "react";

function Avatar(props) {
    let { enName } = props;

    const [avatarName, setAvatarName] = useState("");

    useEffect(() => {
        let words = enName.split(" ");
        setAvatarName(
            words[0].charAt(0).toUpperCase() + words[1].charAt(0).toUpperCase()
        );
    }, [enName]);
    return (
        <div>
            {avatarName && (
                <div className="w-8 h-8 rounded-full bg-slate-600 flex items-center justify-center text-white">
                    <h1>{avatarName}</h1>
                </div>
            )}
        </div>
    );
}
export default Avatar;
