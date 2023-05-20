const { Router } = require("express");
const universidadController = require('../controllers/universidad')

const router = Router();

router.get("/", universidadController.find);
router.post("/", universidadController.create);
router.put("/:id", universidadController.update);
router.delete("/:id", universidadController.delete);

module.exports = router;