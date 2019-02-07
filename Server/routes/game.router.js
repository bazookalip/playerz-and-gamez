const router = require('express').Router();
const gameData = require('../modules/game.data');

router.get('/', (req, res) => {
    res.send(gameData);
});

router.post('/', (req, res) => {
    const playerName = req.body.playerName;
    const playerScore = req.body.playerScore;
    const opponentName = req.body.opponentName;
    const opponentScore = req.body.opponentScore;
    let winner = 'Tie';

    if (playerScore > opponentScore) {
        winner = playerName;
    }

    if (opponentScore > playerScore) {
        winner = opponentName;
    }

    const newGame = { 
        playerName,
        playerScore,
        opponentName,
        opponentScore,
        winner
    };
    gameData.push(newGame);
    res.sendStatus(201);
});

module.exports = router;