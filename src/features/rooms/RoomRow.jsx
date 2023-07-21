import { useState } from "react";
import { formatMoney } from "../../utilities/helpers";
import CreateRoomForm from "./CreateRoomForm";
import { useDeleteRoom } from "./useDeleteRoom";

function RoomRow({ room }) {
  const [showForm, setShowForm] = useState(false);

  // custom hook to clean up and refactor a bit. See useDeleteRoom.js
  const { isDeleting, deleteRoom } = useDeleteRoom();

  // destructures room into it's attributes (columns in DB)
  const { id: roomId, name, maxCapacity, regularPrice, discount, image } = room;

  return (
    <div
      role="row"
      className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] gap-x-[2.4rem] items-center px-[2.4rem]
       py-[1.4rem] border-t-2 border-blue-400"
    >
      <img
        src={image}
        className="block w-[6.4rem] aspect-[3_/_2] object-cover object-center translate-x-[-7px]
        scale-150"
      />
      <p>{name}</p>
      <p>Fits up to {maxCapacity} guests</p>
      <p>{formatMoney(regularPrice)}</p>
      {discount ? (<p>{formatMoney(discount)}</p>) :(<span>&mdash;</span>)}
      <div>
        <button onClick={() => setShowForm((show) => !show)}>Edit</button>
        <button onClick={() => deleteRoom(roomId)} disabled={isDeleting}>
          Delete
        </button>
      </div>
      <div className="col-span-6">
        {showForm && <CreateRoomForm roomEdit={room} />}
      </div>
    </div>
  );
}

export default RoomRow;
