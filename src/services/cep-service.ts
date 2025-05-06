import { CepModel, ICep } from "../models/cep-model"
import { fetchCepsFromViaCep } from "../utils/apiViaCep"

export const syncCeps = async () => {
  const ceps: ICep[] = await fetchCepsFromViaCep()

  const inserted = []

  for (const cepData of ceps) {
    const exists = await CepModel.findOne({ cep: cepData.cep })

    if (!exists) {
      const newCep = new CepModel({ ...cepData, favorito: false })
      await newCep.save()
      inserted.push(newCep)
    }
  }

  return inserted
}

export const getCep = async (cep: string) => {
  return await CepModel.findOne({ cep })
}

export const updateCep = async (
  cep: string,
  data: Partial<Pick<ICep, "logradouro" | "bairro">>
) => {
  return await CepModel.findOneAndUpdate({ cep }, data, { new: true })
}

export const toggleFavorite = async (cep: string) => {
  const item = await CepModel.findOne({ cep })
  if (!item) return null
  item.favorito = !item.favorito
  return await item.save()
}

export const listCeps = async () => {
  return await CepModel.find()
}
