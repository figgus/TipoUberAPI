var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var Usuarios=new Schema({
    _id : mongoose.Types.ObjectId,
    Nombre:String,
    Password:String,
    FechaCreacion:Date,
    InfoUsuario:new Schema({
        Nombre:String,
        SegundoNombre:String,
        ApellidoPaterno:String,
        ApellidoMaterno:String
    })
},{collection: 'Usuarios'});

module.exports=Usuarios
