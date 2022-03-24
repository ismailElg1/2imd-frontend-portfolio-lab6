const Primus = require('primus');

let go = (server) => {
    const primus = new Primus(server, {});

    primus.on('connection', (spark) =>{
       console.log('test');
    });
   
}

module.exports.go = go;