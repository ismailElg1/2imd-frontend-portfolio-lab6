primus = Primus.connect('/', {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
  });

  primus.on('data', data => {
 
    switch(data.team){
        case "game1": document.querySelector(".game1").innerHTML = data.score;
        break;
        case "game2": document.querySelector(".game2").innerHTML = data.score;
        break;
        case "game3": document.querySelector(".game3").innerHTML = data.score;
        break;
        case "game4": document.querySelector(".game4").innerHTML = data.score;
        break;
        case "game5": document.querySelector(".game5").innerHTML = data.score;
        break;
    }
  });