const mongoose = require('mongoose');
const Libro = require('./libro');
const Usuario = require('./usuario');

let Schema = mongoose.Schema;

let PrestamoSchema = new Schema({
    usuario: {
        type: Schema.Types.ObjectId,
        ref: 'usuario',
        required: [true, 'Ingrese el usuario']
    },
    fechaprestamo: {
        type: String,
        required: [true, 'Ingrese la fecha de prestamo']
    },
    fechaentrega: {
        type: String,
        required: [true, 'Ingresa fecha de la entrega']
    },
    libro: {
        type: Schema.Types.ObjectId,
        ref: 'libro',
        required: [true, 'Ingrese el libro']
    }
});

module.exports = mongoose.model('Prestamo', PrestamoSchema);