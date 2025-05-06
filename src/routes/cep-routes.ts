import { Router } from "express"
import * as cepController from "../controllers/cep-controller"

const router = Router()

router.get("/sync", cepController.sync)
router.get("/:cep", cepController.get)
router.put("/:cep", cepController.update)
router.patch("/:cep/favorito", cepController.toggleFavorito)
router.get("/", cepController.list)

export default router
