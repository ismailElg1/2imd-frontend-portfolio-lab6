const Primus = require('primus');

let go = (server) => {
    const primus = new Primus(server, {});

    primus.on('connection', (spark) =>{
        spark.on('data', (data) =>{
            primus.write(data);
         })
    });
   
}

module.exports.go = go;