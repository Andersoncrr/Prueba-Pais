const { Schema, model } = require("mongoose");

const EventoSchema = Schema({
  fullname: {
    type: String,
    required: true,
  },
  country: {
    type: String,
  },
});

EventoSchema.method("toJSON", function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

module.exports = model("Evento", EventoSchema);
