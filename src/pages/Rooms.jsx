import { useState } from "react";
import RoomTable from "../features/rooms/RoomTable";
import CreateRoomForm from "../features/rooms/CreateRoomForm";

function Rooms() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="flex justify-between align-center pb-4">
        <p className="text-gray-600 font-bold text-4xl">Rooms</p>
        <p className="text-2xl pl-3">Sort / Filter</p>
      </div>
      <RoomTable />
      <button
        className="font-semibold bg-blue-400 rounded-md shadow-md shadow-black/50 py-4 px-12 mb-4"
        onClick={() => setShowForm((show) => !show)}
      >
        Create new room
      </button>
      {showForm && <CreateRoomForm />}
    </>
  );
}

export default Rooms;
