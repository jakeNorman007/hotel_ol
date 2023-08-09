import { formatMoney } from "../../utilities/helpers";
import { useDeleteRoom } from "./useDeleteRoom";
import { useCreateRoom } from "./useCreateRoom";
import { HiSquare2Stack, HiPencil, HiTrash } from "react-icons/hi2";
import CreateRoomForm from "./CreateRoomForm";
import Modal from "../../ui/Modal";
import ConfirmDelete from "../../ui/ConfirmDelete";

function RoomRow({ room }) {
  // custom hook to clean up and refactor a bit. See useDeleteRoom.js
  const { isDeleting, deleteRoom } = useDeleteRoom();

  // using the create hook to duplicate the room
  const { isCreating, createRoom } = useCreateRoom();

  // destructures room into it's attributes (columns in DB)
  const {
    id: roomId,
    name,
    maxCapacity,
    regularPrice,
    discount,
    image,
    description,
  } = room;

  // function that creates and fills out the fields for a duplicate room when clicking the duplicate button
  function createDuplicateRoom() {
    createRoom({
      name: `Copy of ${name}`,
      maxCapacity,
      regularPrice,
      discount,
      image,
      description,
    });
  }

  // uses a compound component in Modal.jsx to render the table, if you click on a certain action
  // like create, edit, delete you will see a modal pop up which renders as part of the DOM,
  // closes when a click outside of the modal is detected via useOutseideClick hook
  return (
    <div
      role="row"
      className="grid grid-cols-[0.6fr_1.8fr_2.2fr_1fr_1fr_1fr] gap-x-[2.4rem] items-center px-[2.4rem]
        py-[1.4rem] border-t-2 border-blue-300 text-slate-600"
    >
      <img
        src={image}
        className="block w-[6.4rem] aspect-[3_/_2] object-cover object-center translate-x-[-7px]
            scale-150"
      />
      <p>{name}</p>
      <p>Fits up to {maxCapacity} guests</p>
      <p>{formatMoney(regularPrice)}</p>
      {discount ? (
        <p className="text-green-600">{formatMoney(discount)}</p>
      ) : (
        <span>&mdash;</span>
      )}
      <div>
        <button
          disabled={isCreating}
          onClick={createDuplicateRoom}
          title="Duplicate"
          className="px-2"
        >
          <HiSquare2Stack />
        </button>
        <Modal>
          <Modal.Open opens="edit">
            <button title="Edit" className="px-2">
              <HiPencil />
            </button>
          </Modal.Open>
          <Modal.Window name="edit">
            <CreateRoomForm roomEdit={room} />
          </Modal.Window>
          <Modal.Open opens="delete">
            <button
              onClick={() => deleteRoom(roomId)}
              disabled={isDeleting}
              title="Delete"
              className="px-2"
            >
              <HiTrash />
            </button>
          </Modal.Open>
          <Modal.Window name="delete">
            <ConfirmDelete resourceName="rooms" disabled={isDeleting} onConfirm={() => deleteRoom(roomId)} />
          </Modal.Window>
        </Modal>
      </div>
      <div className="col-span-6"></div>
    </div>
  );
}

export default RoomRow;
