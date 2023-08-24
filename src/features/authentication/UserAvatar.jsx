import React from "react";
import { useUser } from "./useUser";

function UserAvatar(){
    const { user } = useUser();
    const { avatar } = user.user_metadata;

    return(
        <div>
            <img src={ avatar || "default-user.jpg"} />
        </div>
    );
}

export default UserAvatar;
