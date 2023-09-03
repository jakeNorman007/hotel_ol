import React from "react";
import CreateRoomForm from "./CreateRoomForm";
import Modal from "../../ui/Modal";

function AddRoom() {
  return (
    <div>
      <Modal>
        <Modal.Open opens="room-form">
          <button className="font-medium text-white py-3 px-2 rounded-md shadow-lg shadow-gray-800 bg-amber-600 mb-6 hover:bg-amber-700">
            Add new room
          </button>
        </Modal.Open>
        <Modal.Window name="room-form">
          <CreateRoomForm />
        </Modal.Window>
      </Modal>
    </div>
  );
}

export default AddRoom;
