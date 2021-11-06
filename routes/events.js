const { Router } = require("express");
const { crearEvento } = require("../controllers/events");
const { check } = require("express-validator");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.post(
  "/",
  [
    check("fullname", "El nombre es obligatorio").not().isEmpty(),
    validarCampos,
  ],
  crearEvento
);

module.exports = router;
