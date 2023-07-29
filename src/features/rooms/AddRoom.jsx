import React, { useState } from "react";
import CreateRoomForm from "./CreateRoomForm";
import Modal from "../../ui/Modal";

function AddRoom() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpenModal((show) => !show)}
        className="bg-blue-400 py-3 px-3 rounded-md shadow-sm shadow-black/50"
      >
        Create new room
      </button>
      {isOpenModal && (
        <Modal onClose={() => setIsOpenModal(false)}>
          <CreateRoomForm onCloseModal={() => setIsOpenModal(false)}/>
        </Modal>
      )}
    </>
  );
}

export default AddRoom;
