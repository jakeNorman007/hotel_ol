import { useForm } from "react-hook-form";
import { useUpdateUser } from "./useUpdateUser";

function UpdatePasswordForm() {
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;
  const { updateUser, isUpdating } = useUpdateUser();

  function onSubmit({ password }) {
    updateUser({ password }, { onSuccess: reset });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid px-[2.4rem] py-[4rem] border border-white
        bg-gray-700 rounded-md mb-7">
      <div className="grid align-center grid-cols-[24rem_1fr_1fr] mb-3 py-2 border-b border-slate-400">
      <label error={errors?.password?.message} className="text-white text-lg font-semibold">New password:</label>
      <input
        type="password"
        id="password"
        autoComplete="current-password"
        disabled={isUpdating}
        className="px-2 rounded-md"
        {...register("password", {
          required: "This field is required",
          minLength: {
            value: 8,
            message: "Password needs a minimum of 8 characters",
          },
        })}
      />
      </div>
      <div className="grid align-center grid-cols-[24rem_1fr_1fr] mb-3 py-2 border-b border-slate-400">
      <label error={errors?.password?.message} className="text-white text-lg font-semibold">Confirm password:</label>
      <input
        type="password"
        id="new-password"
        autoComplete="new-password"
        className="px-2 rounded-md"
        disabled={isUpdating}
        {...register("passwordConfirm", {
          required: "This field is required",
          validate: (value) => getValues().password === value || "Passwords need to match",
        })}
      />
      </div>
      <div className="flex justify-end">
        <button onClick={reset} type="reset" className="text-white bg-slate-400 p-3 rounded-md mx-1 shadow-lg shadow-black/50">Cancel</button>
        <button disabled={isUpdating} className="text-white bg-amber-600 hover:bg-amber-700 p-3 rounded-md mx-1 shadow-lg shadow-black/50">Update password</button>
      </div>
    </form>
  );
}

export default UpdatePasswordForm;
