import React from "react";
import { useForm } from "react-hook-form";
import { useCreateRoom } from "./useCreateRoom";
import { useEditRoom } from "./useEditRoom";

function CreateRoomForm({ roomEdit = {}, onCloseModal }) {
  // custom hook for creating room see useCreateRoom.js
  const { isCreating, createRoom } = useCreateRoom();

  // custom hook for creating room see useEditRoom.js
  const { isEditing, editRoom } = useEditRoom();

  // destructuring the room editing function to edit a room based on an ID and we are spreading through all the 
  // values. This then uses the new values as the current values after saved
  const { id: editId, ...editValues } = roomEdit;

  // condenses the edit and creating new functionality into one, so where isWorking it will either be
  // creating or editing based on if you are already in an edit session or new session
  const isWorking = isCreating || isEditing;

  // converts edit session to boolean, are you editing? yes or no, if yes it pulls up the current data for 
  // room you're editing
  const isEditSession = Boolean(editId);

  // form state, takes the edit session or values and returns empty object, which is new values
  const { register, handleSubmit, reset, getValues, formState } = useForm({
    defaultValues: isEditSession ? editValues : {},
  });

  // brings in the errors for form filling, incase you miss a value an error should pop up letting you know
  // how to handle it
  const { errors } = formState;

  // this is the big daddy, the submit function that handles either filling out a new room or editing a 
  //current room
  function onSubmit(data) {
    const image = typeof data.image === "string" ? data.image : data.image[0];

    if (isEditSession)
      editRoom(
        { newRoomData: { ...data, image }, id: editId },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
    else
      createRoom(
        { ...data, image: image },
        {
          onSuccess: (data) => {
            reset();
            onCloseModal?.();
          },
        }
      );
  }

  // console log is my friend, logs the errors so I can test if they are working
  function onError(errors) {
    console.log(errors);
  }

  // this works to create a new room because the fields have tags/id's that match the table in supabase
  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className="grid py-[2.4rem] px-[4rem]"
    >
      <div className="grid grid-cols-[20rem_1fr_1fr] items-center gap-[2.4rem] py-2 border-b border-slate-300">
        <label htmlFor="name" className="font-medium text-lg text-slate-600">Room number</label>
        <input
          role="textbox"
          className="rounded-md shadow-sm shadow-black/50"
          type="text"
          id="name"
          disabled={isWorking}
          {...register("name", {
            required: "This field is required",
          })}
        />
        <div className="text-red-600">{errors?.name?.message}</div>
      </div>
      <div className="grid grid-cols-[20rem_1fr_1fr] items-center gap-[2.4rem] py-2 border-b border-slate-300">
        <label htmlFor="maxCapacity" className="font-medium text-lg text-slate-600">Maximum capacity</label>
        <input
          role="textbox"
          className="rounded-md shadow-sm shadow-black/50"
          type="number"
          id="maxCapacity"
          disabled={isWorking}
          defaultValue={0}
          {...register("maxCapacity", {
            required: "This field is required",
            min: { value: 1, message: "Capacity should be at least 1" },
          })}
        />
        <div className="text-red-600">{errors?.maxCapacity?.message}</div>
      </div>
      <div className="grid grid-cols-[20rem_1fr_1fr] items-center gap-[2.4rem] py-2 border-b border-slate-300">
        <label htmlFor="regularPrice" className="font-medium text-lg text-slate-600">Regular price</label>
        <input
          className="rounded-md shadow-sm shadow-black/50"
          type="number"
          id="regularPrice"
          disabled={isWorking}
          {...register("regularPrice", {
            required: "This field is required",
          })}
        />
        <div className="text-red-600">{errors?.regularPrice?.message}</div>
      </div>
      <div className="grid grid-cols-[20rem_1fr_1fr] items-center gap-[2.4rem] py-2 border-b border-slate-300">
        <label htmlFor="discount" className="font-medium text-lg text-slate-600">Discount</label>
        <input
          className="rounded-md shadow-sm shadow-black/50"
          type="number"
          id="discount"
          defaultValue={0}
          disabled={isWorking}
          {...register("discount", {
            validate: (value) =>
              value <= getValues().regularPrice ||
              "Discount should be less than the regular price",
          })}
        />
        <div className="text-red-600">{errors?.discount?.message}</div>
      </div>
      <div className="grid grid-cols-[20rem_1fr_1fr] items-center gap-[2.4rem] py-2 border-b border-slate-300">
        <label htmlFor="description" className="font-medium text-lg text-slate-600">Description of room</label>
        <textarea
          className="rounded-md shadow-sm shadow-black/50 resize-none"
          type="number"
          id="description"
          defaultValue=""
          {...register("description", { required: "This field is required" })}
        />
        <div className="text-red-600">{errors?.description?.message}</div>
      </div>
      <div className="grid grid-cols-[20rem_1fr_1fr] items-center gap-[2.4rem] py-2">
        <label htmlFor="image" className="font-medium text-lg text-slate-600">Upload Image</label>
        <input
          id="image"
          accept="image/*"
          type="file"
          {...register("image", {
            required: isEditSession ? false : "This field is required",
          })}
        />
        <div className="text-red-600">{errors?.image?.message}</div>
      </div>
      <div className="flex flex-row-reverse">
        <button type="reset" className="text-slate-600 bg-slate-200 px-3 py-3 rounded-md mx-1 shadow-sm shadow-black/50" onClick={() => onCloseModal?.()}>
            Clear all
        </button>
        <button role="button" disabled={isWorking} className="bg-blue-400 px-3 py-3 rounded-md mx-1 shadow-sm shadow-black/50">
          {isEditSession ? "Edit room" : "Create"}
        </button>
      </div>
    </form>
  );
}

export default CreateRoomForm;
