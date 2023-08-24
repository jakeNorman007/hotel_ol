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
        bg-cyan-900 rounded-md mx-[7rem]">
      <div className="grid align-center grid-cols-[24rem_1fr_1fr]">
      <label error={errors?.password?.message}>new password:</label>
      <input
        type="password"
        id="password"
        autoComplete="current-password"
        disabled={isUpdating}
        {...register("password", {
          required: "This field is required",
          minLength: {
            value: 8,
            message: "Password needs a minimum of 8 characters",
          },
        })}
      />
      </div>
      <div className="grid align-center grid-cols-[24rem_1fr_1fr]">
      <label error={errors?.password?.message}>Confirm password:</label>
      <input
        type="password"
        id="new-password"
        autoComplete="new-password"
        disabled={isUpdating}
        {...register("passwordConfirm", {
          required: "This field is required",
          validate: (value) => getValues().password === value || "Passwords need to match",
        })}
      />
      </div>
      <div className="flex justify-end">
        <button onClick={reset} type="reset">Cancel</button>
        <button disabled={isUpdating}>Update password</button>
      </div>
    </form>
  );
}

export default UpdatePasswordForm;
