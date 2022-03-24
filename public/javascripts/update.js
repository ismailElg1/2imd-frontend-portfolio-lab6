primus = Primus.connect('/', {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
  });

  document.querySelector('.updateButton').addEventListener('click', e =>{
      let team = document.querySelector('.gameDropdown').value;
      let score = document.querySelector('.scoreInput').value;
     
      switch(team){
        case "game1":  primus.write({
            team : "game1",
            score: score
          });
          break;
          case "game2":  primus.write({
            team : "game2",
            score: score
          });
          break;
          case "game3":  primus.write({
            team : "game3",
            score: score
          });
          break;
          case "game4":  primus.write({
            team : "game4",
            score: score
          });
          break;
          case "game5":  primus.write({
            team : "game5",
            score: score
          });
          break;
          
      }
});