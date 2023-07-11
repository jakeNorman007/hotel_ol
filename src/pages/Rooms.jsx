import { useEffect } from "react";
import { getRooms } from "../services/apiRooms";

function Rooms() {
    useEffect(function(){
        getRooms().then(data => console.log(data));
    }, []);

    return <p>Rooms</p>
}

export default Rooms;
