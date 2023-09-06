import React, { useState } from "react";
import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";

function UpdateUserDataForm() {
  // updating the current users data, such as their personal info, also has the ability to either create
  // or update a user avatar, primarily seen in the top right corner
  const {
    user: {
      email,
      user_metadata: { fullName: currentFullName },
    },
  } = useUser();
  const { updateUser, isUpdating } = useUpdateUser();
  const [fullName, setFullName] = useState(currentFullName);
  const [avatar, setAvatar] = useState(null);

  function handleSubmit(event) {
    event.preventDefault();
    if (!fullName) return;
    updateUser(
      {
        fullName,
        avatar,
      },
      {
        onSuccess: () => {
          setAvatar(null);
          event.target.reset();
        },
      }
    );
  }

  function handleCancel() {
    setFullName(currentFullName);
    setAvatar(null);
  }

  return (
    <>
      <p className="text-white font-bold text-4xl">Update user account</p>
      <form
        onSubmit={handleSubmit}
        className="grid px-[2.4rem] py-[4rem] border-2 border-slate-400
        bg-gray-700 rounded-md"
      >
        <div className="grid align-center grid-cols-[24rem_1fr_1fr] mb-3 py-2 border-b border-slate-400">
          <label className="font-medium text-lg text-white">
            Email address:
          </label>
          <input value={email} className="px-2 rounded-md" />
        </div>
        <div className="grid align-center grid-cols-[24rem_1fr_1fr] mb-3 py-2 border-b border-slate-400">
          <label className="font-medium text-lg text-white">Name:</label>
          <input
            className="px-2 rounded-md"
            type="text"
            value={fullName}
            onChange={(event) => setFullName(event.target.value)}
            id="fullName"
            disabled={isUpdating}
          />
        </div>
        <div className="grid align-center grid-cols-[24rem_1fr_1fr] mb-3 py-2 border-b border-slate-400">
          <label className="font-medium text-lg text-white">Avatar:</label>
          <input
            type="file"
            id="avatar"
            accept="image/*"
            onChange={(event) => setAvatar(event.target.files[0])}
            disabled={isUpdating}
            className="text-white"
          />
        </div>
        <div className="flex justify-end">
          <button
            type="reset"
            disabled={isUpdating}
            onClick={handleCancel}
            className="text-white bg-slate-400 p-3 rounded-md mx-1 shadow-lg shadow-black/50"
          >
            Cancel
          </button>
          <button
            disabled={isUpdating}
            className="text-white bg-amber-600 hover:bg-amber-700 p-3 rounded-md mx-1 shadow-lg shadow-black/50"
          >
            Update
          </button>
        </div>
      </form>
    </>
  );
}

export default UpdateUserDataForm;
