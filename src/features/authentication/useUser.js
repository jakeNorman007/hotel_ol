import { getCurrentUser } from "../../services/apiAuthentication";
import { useQuery } from "@tanstack/react-query";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
