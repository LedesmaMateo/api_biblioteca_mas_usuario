const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/biblioteca", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});

const UsuarioSchema = new mongoose.Schema({
    username: String,
    password: String
}, { collection: 'usuarios' });

const Usuario = mongoose.model('Usuario', UsuarioSchema);

module.exports = Usuario;