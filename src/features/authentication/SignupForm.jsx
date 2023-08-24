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
    <form onSubmit={handleSubmit(onSubmit)}>
      <label error={errors?.fullName?.message}>name:</label>
        <input
          type="text"
          id="fullName"
          disabled={isLoading}
          {...register("fullName", { required: "This field is required" })}
        />
      <label error={errors?.email?.message}>email:</label>
        <input
          type="email"
          id="email"
          disabled={isLoading}
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "Please provide a valid email address",
            },
          })}
        />
      {/* password */}
      <label error={errors?.password?.message}>password:</label>
        <input
          type="password"
          id="password"
          disabled={isLoading}
          {...register("password", {
            required: "This field is required",
            minLength: {
                value: 8, message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      {/* password repeat */}
      <label error={errors?.passwordConfirm?.message}>Repeat password:</label>
        <input
          type="password"
          id="passwordConfirm"
          disabled={isLoading}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) => value === getValues().password || "Passwords must match",
          })}
        />
      {/* buttons */}
      <button type="reset" disabled={isLoading} onClick={reset}>Cancel</button>
      <button disabled={isLoading}>Create new user</button>
    </form>
  );
}

export default SignupForm;
