import { useQuery } from "@tanstack/react-query"
import { fetchAllCards, fetchCardsByPrompt } from "./api";


export const useGetAllCards = (enabled:boolean = true) => {
  return useQuery({
    queryKey: ['cards', 'all'],
    queryFn: fetchAllCards,
    enabled: enabled
  })
}

interface UseGetCardsByPromptOptions {
  prompt: string;
  enabled: boolean;
}
export const useGetCardsByPrompt = ({prompt, enabled = false}: UseGetCardsByPromptOptions) => {
  return useQuery({
    queryKey: ['cards', 'prompt', prompt],
    queryFn: async () => await fetchCardsByPrompt(prompt),
    enabled: enabled
  })
}