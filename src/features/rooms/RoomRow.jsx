import { useState } from "react";
import { formatMoney } from "../../utilities/helpers";
import CreateRoomForm from "./CreateRoomForm";
import { useDeleteRoom } from "./useDeleteRoom";
import { HiSquare2Stack, HiPencil, HiTrash } from "react-icons/hi2";
import { useCreateRoom } from "./useCreateRoom";

function RoomRow({ room }) {
  // form state, by default the room edit form is not showing
  const [showForm, setShowForm] = useState(false);

  // custom hook to clean up and refactor a bit. See useDeleteRoom.js
  const { isDeleting, deleteRoom } = useDeleteRoom();

  // using the create hook to duplicate the room
  const { isCreating, createRoom } = useCreateRoom();

  // destructures room into it's attributes (columns in DB)
  const { id: roomId, name, maxCapacity, regularPrice, discount, image, description } = room;
      
  // function that creates and fills out the fields for a duplicate room when clicking the duplicate button
  function createDuplicateRoom(){
      createRoom({
          name: `Copy of ${name}`,
          maxCapacity,
          regularPrice,
          discount,
          image,
          description,
        });
    }

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
      {discount ? <p>{formatMoney(discount)}</p> : <span>&mdash;</span>}
      <div>
        <button disabled={isCreating} onClick={createDuplicateRoom}>
          <HiSquare2Stack />
        </button>
        <button onClick={() => setShowForm((show) => !show)}>
          <HiPencil />
        </button>
        <button onClick={() => deleteRoom(roomId)} disabled={isDeleting}>
          <HiTrash />
        </button>
      </div>
      <div className="col-span-6">
        {showForm && <CreateRoomForm roomEdit={room} />}
      </div>
    </div>
  );
}

export default RoomRow;
