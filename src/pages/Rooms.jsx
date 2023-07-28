import RoomTable from "../features/rooms/RoomTable";
import AddRoom from "../features/rooms/AddRoom";

function Rooms() {

  return (
    <>
      <div className="flex justify-between align-center pb-2">
        <p className="text-slate-600 font-bold text-4xl">Rooms</p>
        <p className="text-2xl text-slate-600 pl-3">Sort / Filter</p>
      </div>
      <RoomTable />
      <AddRoom />
    </>
  );
}

export default Rooms;
