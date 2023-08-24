import { useMutation } from "@tanstack/react-query";
import { signup as signUpApi } from "../../services/apiAuthentication";
import { toast } from "react-hot-toast";

export function useSignup() {

  const { mutate: signup, isLoading } = useMutation({
    mutationFn: signUpApi,
    onSuccess: () => {
      toast.success(
        "Account successfully createdd. Please verify new account from the user's email address."
      );
    },
  });

  return { signup, isLoading };
}
