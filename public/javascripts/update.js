primus = Primus.connect('/', {
    reconnect: {
        max: Infinity // Number: The max delay before we try to reconnect.
      , min: 500 // Number: The minimum delay before we try reconnect.
      , retries: 10 // Number: How many times we should try to reconnect.
    }
  });

  document.querySelector('.updateButton').addEventListener('click', e =>{
      let team = document.querySelector('.teamDropdown').value;
      let score = document.querySelector('.scoreInput').value;
     
      switch(team){
        case "team1":  primus.write({
            team : "team1",
            score: score
          });
          break;
          case "team2":  primus.write({
            team : "team2",
            score: score
          });
          break;
          case "team3":  primus.write({
            team : "team3",
            score: score
          });
          break;
          case "team4":  primus.write({
            team : "team4",
            score: score
          });
          break;
          case "team5":  primus.write({
            team : "team5",
            score: score
          });
          break;
          
      }
});