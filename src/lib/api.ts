import axios from 'axios'
const baseUrl = import.meta.env.VITE_API_BASE_URL

console.log()
export const fetchAllCards = async () => {
  try {
    
    const response = await axios.get(`${baseUrl}/cards`)
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  } 
}
export const fetchCardsByPrompt = async (userPrompt: string) => {
  try {
      console.log(userPrompt)
    const response = await axios.get(`${baseUrl}/cards/query/?prompt=${encodeURIComponent(userPrompt)}`)
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  } 
}