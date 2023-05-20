const { Router } = require("express");
const etapaController = require('../controllers/etapa')

const router = Router();

router.get("/", etapaController.find);
router.post("/", etapaController.create);
router.put("/:id", etapaController.update);
router.delete("/:id", etapaController.delete);

module.exports = router;