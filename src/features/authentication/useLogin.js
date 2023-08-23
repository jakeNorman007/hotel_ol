import { useMutation } from "@tanstack/react-query";
import { login as loginApi } from "../../services/apiAuthentication";
import { useNavigate } from "react-router-dom";

export function useLogin(){
    const navigate = useNavigate();

    const { mutate: login, isLoading } = useMutation({
        mutationFn: ({email, password}) => loginApi({
            email, password
        }),
        onSuccess: (user) => {
            console.log(user);
            navigate("/dashboard");
        },
        onError: (error) => {
            console.log("Error", error);
            toast.error("provided email or password are incorrect");
        }
    });

    return { login, isLoading };
}
