const { Router } = require("express");
const tipoProyectoController = require('../controllers/tipoProyecto')

const router = Router();

router.get("/", tipoProyectoController.find);
router.post("/", tipoProyectoController.create);
router.put("/:id", tipoProyectoController.update);
router.delete("/:id", tipoProyectoController.delete);

module.exports = router;