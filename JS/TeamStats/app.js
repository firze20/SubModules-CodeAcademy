const team = {
  _players: 
    [{
      firstName: 'Pedro',
      lastName: 'Gonçalves',
      age: 22
    }]
  ,
  _games: [{
    opponent: 'Benfica',
    teamPoints: 12,
    opponentPoints: 1
  },
  {
    opponent: 'Porto',
    teamPoints: 14,
    opponentPoints: 2
  },
  {
    opponent: 'Braga',
    teamPoints: 2,
    opoonentPoints: 4
  }
  ],
  get players(){
    return this._players;
  },
  get games(){
    return this._games;
  },
  addPlayer(firstName, lastName, age){
    const player = {
      firstName: firstName,
      lastName: lastName,
      age: age
    }
    this._players.push(player);
  },
  addGame(opponent, teampoints, opponentPoints){
    const opponentTeam = {
      opponent: opponent,
      teamPoints: teampoints,
      opponentPoints: opponentPoints
    };
    this._games.push(opponentTeam);
  }
};

//console.log(team._players);
//console.log(team._games[0]);




team.addPlayer('Tiago', 'Tomás', 18)

team.addGame('Rio Ave', 25, 3);
team.addGame('VCS', 21, 2);
team.addGame('Maritimo', 12, 4);

console.log(team.players);
console.log(team.games);