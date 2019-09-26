const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    senha: {
      type: String,
      required: true,
    }
  },
  {
    timestamps: true
  },
);

mongoose.model("Product", ProductSchema);