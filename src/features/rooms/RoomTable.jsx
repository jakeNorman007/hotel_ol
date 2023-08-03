import RoomRow from "../rooms/RoomRow";
import Table from "../../ui/Table";
import Spinner from "../../ui/Spinner";
import { useRooms } from "./useRooms";

function RoomTable() {
    const { isLoading, rooms } = useRooms();

  // uses the spinner if the page is loading
  if (isLoading)
    return <Spinner />

  return (
    <Table
      role="table"
      className="rounded-lg bg-gray-200 overflow-hidden shadow-sm shadow-black/50"
    >
      <Table.Header
        role="row"
        className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] gap-[2.4rem] align-center bg-blue-100
        tracking-[0.4px] font-semibold text-slate-600 text-xl px-[2.4rem] py-[1.6rem]"
      >
        <div></div>
        <div>Room Number</div>
        <div>Capacity</div>
        <div>Price</div>
        <div>Discount</div>
        <div></div>
      </Table.Header>
      <Table.Body data={rooms} render={(room) => <RoomRow room={room} key={room.id}/>} />
    </Table>
  );
}

export default RoomTable;
