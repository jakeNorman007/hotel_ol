import { useState } from "react";
import RoomTable from "../features/rooms/RoomTable";
import CreateRoomForm from "../features/rooms/CreateRoomForm";

function Rooms() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="flex justify-between align-center pb-2">
        <p className="text-slate-600 font-bold text-4xl">Rooms</p>
        <p className="text-2xl text-slate-600 pl-3">Sort / Filter</p>
      </div>
      <RoomTable />
      <button
        className="font-medium bg-blue-400 rounded-md shadow-md shadow-black/50 py-4 px-12 mb-4"
        onClick={() => setShowForm((show) => !show)}
      >
        Create new room
      </button>
      {showForm && <CreateRoomForm />}
    </>
  );
}

export default Rooms;
