import RoomTable from "../features/rooms/RoomTable";
import AddRoom from "../features/rooms/AddRoom";
import RoomTableOps from "../features/rooms/RoomTableOps";

function Rooms() {

  return (
    <>
      <div className="flex justify-between align-center">
        <p className="text-white font-bold text-4xl">Rooms</p>
        <RoomTableOps />
      </div>
      <RoomTable />
      <AddRoom />
    </>
  );
}

export default Rooms;
