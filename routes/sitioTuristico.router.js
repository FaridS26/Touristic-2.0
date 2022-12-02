const express = require("express");
const router = express.Router();
const sitioTuristicoController = require("../controllers/sitioTuristico.controller");

router.post("/", sitioTuristicoController.create)
router.get("/region-:region", sitioTuristicoController.find)
// router.get("/:id", empleadosController.findOne)
// router.put("/:id", empleadosController.update)
// router.delete("/:id", empleadosController.remove)

module.exports = router