const express = require("express");
const router = express.Router();

const {getAllUsuario, getUsuarioById, createUsuario, updateUsuario, deleteUsuario} = require("../controllers/usuarioController");

// Importamos la libreria para validar scopes
const { requiredScopes } = require("express-oauth2-jwt-bearer");

// Ruta para obtener todos los usuarios
router.get("/", requiredScopes("read:user"), getAllUsuario);

// Ruta para obtener un usuario por id
router.get("/:id", requiredScopes("read:user"), getUsuarioById);

// Ruta para crear un nuevo usuario
router.post("/", requiredScopes("write:user"), createUsuario);

// Ruta para actualizar un usuario existente
router.put("/:id", requiredScopes("write:user"), updateUsuario);

// Ruta para eliminar un usuario
router.delete("/:id", requiredScopes("write:user"), deleteUsuario);

module.exports = router;