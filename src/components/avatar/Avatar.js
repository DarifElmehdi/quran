import React, { useEffect, useState } from "react";

function Avatar(props) {
    let { name } = props;

    const [avatarName, setAvatarName] = useState("");

    useEffect(() => {
        let words = name.split(" ");
        setAvatarName(
            words[0].charAt(0).toUpperCase() + words[1].charAt(0).toUpperCase()
        );
    }, [name]);
    return (
        <div>
            {avatarName && (
                <div className="w-8 h-8 rounded-full text-neutral-100 bg-gray-900 flex items-center justify-center ">
                    <h1>{avatarName}</h1>
                </div>
            )}
        </div>
    );
}
export default Avatar;
