var express=require('express');
var mongoose=require('mongoose');
mongoose.connect('mongodb://localhost:27017/TipoUber',{ useNewUrlParser: true,useUnifiedTopology: true  });


router = express.Router();

router.get('/', function(req,res){
    res.send('pico pal que lee');
})

router.get('/api/Usuarios', function(req,res){
    var usuarios= mongoose.model('Usuarios').find();
    res.send(usuarios);
})

router.post('/api/Usuarios/LoginUsuario',function(req,res){
    const username=req.body.username;
    const password=req.body.password;

    var respuestaLogin= mongoose.model('Usuarios').find({Nombre:username,Password:password}).then((respuesta)=>{
        if(respuesta.length===0){
          res.status(204);
        }
        res.send(respuesta);
    });

});

router.get('/api/Usuarios/:ID',function(req,res){
    //const nombre=req.
    mongoose.model('Usuarios').find({Nombre:username,Password:password}).then((respuesta)=>{
        if(respuesta.length===0){
          res.status(204);
        }
        res.status(200).send(respuesta);
      });
});

module.exports = {router};