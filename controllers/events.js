const { response } = require("express");
const Evento = require("../models/Evento");

const crearEvento = async (req, res = response) => {
  const evento = new Evento(req.body);

  try {
    const eventoGuardado = await evento.save();

    res.json({
      ok: true,
      evento: eventoGuardado,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Hable con el administrador",
    });
  }
};

module.exports = {
  crearEvento,
};
