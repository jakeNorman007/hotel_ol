import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

// this grabs whatever is already in supabase and uses them as the current values
export function useSettings() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { isLoading, error, settings };
}
