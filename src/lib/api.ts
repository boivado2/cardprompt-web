import axios from 'axios'
const baseUrl = import.meta.env.VITE_API_URL

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
    
    const response = await axios.get(`${baseUrl}/cards/?prompt=${encodeURIComponent(userPrompt)}`)
    return response.data
  } catch (error) {
    console.log(error)
    throw error
  } 
}