import { useQueryClient, useMutation } from "@tanstack/react-query";
import { toast } from "react-hot-toast";
import { updateSetting as updateSettingApi

// goes in and updates the settings in supabase when you change the values in the app itself
export function useUpdateSetting() {
  const queryClient = useQueryClient();

  const { mutate: updateSetting, isLoading: isEditing } = useMutation({
    mutationFn: updateSettingApi,
    onSuccess: () => {
      toast.success("Settings sucessfully updated");
      queryClient.invalidateQueries({
        queryKey: ["setting"],
      });
    },
    onError: (error) => toast.error(error.message),
  });

  return { isEditing, updateSetting };
}
