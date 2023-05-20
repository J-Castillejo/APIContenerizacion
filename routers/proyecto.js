const { Router } = require("express");
const proyectoController = require('../controllers/proyecto')

const router = Router();

router.post("/", proyectoController.create);
router.put("/:id", proyectoController.update);
router.delete("/:id", proyectoController.delete);

module.exports = router;