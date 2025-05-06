import axios from "axios"

export const fetchCepsFromViaCep = async () => {
  const url = "https://viacep.com.br/ws/RS/Porto%20Alegre/Domingos/json/"
  const response = await axios.get(url)
  return response.data
}
