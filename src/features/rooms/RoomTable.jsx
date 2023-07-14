import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../../services/apiRooms";
import RoomRow from "../rooms/RoomRow";

function RoomTable() {
  const { isLoading, data: rooms } = useQuery({
    queryKey: ["room"],
    queryFn: getRooms,
  });

  if (isLoading) return <div className="text-4xl pt-12 px-12">Loading...</div>;

  return (
    <table
      role="table"
      className="rounded-lg text-2xl bg-gray-200 overflow-hidden shadow-sm shadow-black/50"
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
