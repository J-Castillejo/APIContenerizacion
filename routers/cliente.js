const { Router } = require("express");
const clienteController = require('../controllers/cliente');

const router = Router();

router.get("/", clienteController.find);
router.post("/", clienteController.create);
router.put("/:id", clienteController.update);
router.delete("/:id", clienteController.delete);

module.exports = router;