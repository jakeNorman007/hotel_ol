import React from "react";
import { useUser } from "./useUser";

function UserAvatar(){
    const { user } = useUser();
    const { fullName, avatar } = user.user_metadata;

    return(
        <div className="flex items-center gap-5 px-9">
            <img className="rounded-full h-14 w-14 aspect-square" src={ avatar || "default-user.jpg"} alt={`Avatar of ${fullName}`} />
            <span className="text-white font-semibold">{fullName}</span>
        </div>
    );
}

export default UserAvatar;
