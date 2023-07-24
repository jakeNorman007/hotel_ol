import RoomRow from "../rooms/RoomRow";
import Spinner from "../../ui/Spinner";
import { useRooms } from "./useRooms";

function RoomTable() {
    const { isLoading, rooms } = useRooms();

  if (isLoading)
    return <Spinner />

  return (
    <table
      role="table"
      className="rounded-lg bg-gray-200 overflow-hidden shadow-sm shadow-black/50"
    >
      <header
        role="row"
        className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] gap-[2.4rem] align-center bg-blue-100
        tracking-[0.4px] font-semibold text-gray-600 px-[2.4rem] py-[1.6rem]"
      >
        <div></div>
        <div>Room Number</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </header>
      {rooms.map((room) => (
        <RoomRow room={room} key={room.id} />
      ))}
    </table>
  );
}

export default RoomTable;
