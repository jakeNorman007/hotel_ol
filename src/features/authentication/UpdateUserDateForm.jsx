import React, { useState } from "react";
import { useUser } from "./useUser";
import { useUpdateUser } from "./useUpdateUser";

function UpdateUserDataForm() {
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
      <p className="text-white text-3xl mx-[7rem]">Update user account</p>
    <form onSubmit={handleSubmit} className="grid px-[2.4rem] py-[4rem] border border-white
        bg-cyan-900 rounded-md mx-[7rem]">
      <div className="grid align-center grid-cols-[24rem_1fr_1fr]">
      <label>email address:</label>
      <input value={email} />
      </div>
      <div className="grid align-center grid-cols-[24rem_1fr_1fr]">
      <label>name:</label>
      <input
        type="text"
        value={fullName}
        onChange={(event) => setFullName(event.target.value)}
        id="fullName"
        disabled={isUpdating}
      />
      </div>
      <div className="grid align-center grid-cols-[24rem_1fr_1fr]">
      <label>avatar:</label>
      <input
        type="file"
        id="avatar"
        accept="image/*"
        onChange={(event) => setAvatar(event.target.files[0])}
        disabled={isUpdating}
      />
      </div>
      <div className="flex justify-end">
      <button type="reset" disabled={isUpdating} onClick={handleCancel}>Cancel</button>
      <button disabled={isUpdating}>Update</button>
      </div>
    </form>
      </>
  );
}

export default UpdateUserDataForm;
