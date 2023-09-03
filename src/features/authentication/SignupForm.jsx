import { useForm } from "react-hook-form";
import { useSignup } from "./useSignup";

function SignupForm() {
  const { signup, isLoading } = useSignup();
  const { register, formState, getValues, handleSubmit, reset } = useForm();
  const { errors } = formState;

  function onSubmit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSettled: () => reset(),
      }
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="grid px-[2.4rem] py-[4rem] border border-white
        bg-gray-700 rounded-md mb-7 shadow-lg shadow-gray-900"
    >
      <div className="grid align-center grid-cols-[24rem_1fr_1fr] mb-3 py-2 border-b border-slate-400">
        <label
          error={errors?.fullName?.message}
          className="text-white text-lg font-semibold"
        >
          Name:
        </label>
        <input
          type="text"
          id="fullName"
          disabled={isLoading}
          className="px-2 rounded-md"
          {...register("fullName", { required: "This field is required" })}
        />
      </div>
      <div className="grid align-center grid-cols-[24rem_1fr_1fr] mb-3 py-2 border-b border-slate-400">
        <label
          error={errors?.email?.message}
          className="text-white text-lg font-semibold"
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          disabled={isLoading}
          className="px-2 rounded-md"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      </div>
      {/* password */}
      <div className="grid align-center grid-cols-[24rem_1fr_1fr] mb-3 py-2 border-b border-slate-400">
        <label
          error={errors?.password?.message}
          className="text-white text-lg font-semibold"
        >
          Password:
        </label>
        <input
          type="password"
          id="password"
          disabled={isLoading}
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
      {/* password repeat */}
      <div className="grid align-center grid-cols-[24rem_1fr_1fr] mb-3 py-2 border-b border-slate-400">
        <label
          error={errors?.passwordConfirm?.message}
          className="text-white text-lg font-semibold"
        >
          Repeat password:
        </label>
        <input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          className="px-2 rounded-md"
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords must match",
          })}
        />
        {/* buttons */}
      </div>
      <div className="flex justify-end">
        <button
          type="reset"
          disabled={isLoading}
          onClick={reset}
          className="text-white bg-slate-400 p-3 rounded-md mx-1 shadow-lg shadow-black/50"
        >
          Cancel
        </button>
        <button
          disabled={isLoading}
          className="text-white bg-amber-600 hover:bg-amber-700 p-3 rounded-md mx-1 shadow-lg shadow-black/50"
        >
          Create new user
        </button>
      </div>
    </form>
  );
}

export default SignupForm;
