import { Request, Response } from "express"
import * as cepService from "../services/cep-service"

export const sync = async (_req: Request, res: Response): Promise<void> => {
  const result = await cepService.syncCeps()
  res.status(201).json({ inserted: result.length })
}

export const get = async (req: Request, res: Response): Promise<void> => {
  const result = await cepService.getCep(req.params.cep)
  if (!result) {
    res.status(404).json({ error: "CEP não encontrado." })
    return
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
    res.status(404).json({ error: "CEP não encontrado para atualização." })
    return
  }
  res.json(result)
}

export const toggleFavorito = async (
  req: Request,
  res: Response
): Promise<void> => {
  const result = await cepService.toggleFavorito(req.params.cep)
  if (!result) {
    res.status(404).json({ error: "CEP não encontrado para favoritar." })
    return
  }
  res.json(result)
}

export const list = async (_req: Request, res: Response): Promise<void> => {
  const result = await cepService.listCeps()
  res.json(result)
}
