
function TraerTodo(mongoConn){
    return mongoConn.model('Usuarios').find();
}

function LoginUsuario(username,password,mongoConn){
    var res= mongoConn.model('Usuarios').find({Nombre:username,Password:password});
    return res;
};

module.exports={
    TraerTodo,
    LoginUsuario
}