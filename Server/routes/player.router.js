const router = require('express').Router();
const playerData = require('../modules/player.data');

router.get('/', (req, res) => {
    res.send(playerData);
});

router.post('/', (req, res) => {
    playerData.push(req.body.playerName);
    res.sendStatus(201);
});

module.exports = router;