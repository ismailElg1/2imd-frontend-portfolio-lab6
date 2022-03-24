primus = Primus.connect('/', {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
  });

  primus.on('data', data => {
    console.log(data.team);
    switch(data.team){
        case "team1": document.querySelector(".team1").innerHTML = data.score;
        break;
        case "team2": document.querySelector(".team2").innerHTML = data.score;
        break;
        case "team3": document.querySelector(".team3").innerHTML = data.score;
        break;
        case "team4": document.querySelector(".team4").innerHTML = data.score;
        break;
        case "team5": document.querySelector(".team5").innerHTML = data.score;
        break;
    }
  });