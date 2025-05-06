import { Request, Response } from "express"
import * as cepService from "../services/cep-service"
import { ApiError } from "../utils/api-error"

export const sync = async (_req: Request, res: Response): Promise<void> => {
  const result = await cepService.syncCeps()
  res.status(201).json({ inserted: result.length })
}

export const get = async (req: Request, res: Response): Promise<void> => {
  const result = await cepService.getCep(req.params.cep)
  if (!result) {
    throw new ApiError("CEP não encontrado.", 404)
  }
  res.json(result)
}

export const update = async (req: Request, res: Response): Promise<void> => {
  const { logradouro, bairro } = req.body
  const result = await cepService.updateCep(req.params.cep, {
    logradouro,
    bairro,
  })
  if (!result) {
    throw new ApiError("CEP não encontrado para atualização.", 404)
  }
  res.json(result)
}

export const toggleFavorite = async (
  req: Request,
  res: Response
): Promise<void> => {
  const result = await cepService.toggleFavorite(req.params.cep)
  if (!result) {
    throw new ApiError("CEP não encontrado para favoritar.", 404)
  }
  res.json(result)
}

export const list = async (_req: Request, res: Response): Promise<void> => {
  const result = await cepService.listCeps()
  res.json(result)
}
