import React from "react";

function ConfirmDelete({ onConfirm, disabled, onCloseModal }) {
  //function handleConfirmClick() {}

  return (
    <>
      <div className="w-[40rem] flex flex-col gap-[1.2rem] px-6 py-10">
        <h1 className="text-xl font-semibold">Delete</h1>
        <p className="text-lg">
          Are you sure you want to delete this? This action is permanent and cannot be undone.
        </p>
        <div className="flex flex-row-reverse">
          <button onClick={onCloseModal} disabled={disabled} className="text-slate-600 bg-slate-200 px-3 py-3 rounded-md mx-1 shadow-sm shadow-black/50">
            Cancel
          </button>
          <button onClick={onConfirm} disabled={disabled} className=">text-slate-600 bg-red-500 px-3 py-3 rounded-md mx-1 shadow-sm shadow-black/50">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}

export default ConfirmDelete;
