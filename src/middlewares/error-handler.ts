import { Request, Response, NextFunction } from "express"

export function errorHandler(
  err: any,
  _req: Request,
  res: Response,
  _next: NextFunction
) {
  console.error("💥 Erro captured:", err)

  const status = err.statusCode || 500
  const message = err.message || "Server internal error."

  res.status(status).json({ error: message })
}
