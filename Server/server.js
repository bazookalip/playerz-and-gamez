const express = require('express');
const bodyParser = require('body-parser');

const playerRouter = require('./routes/player.router');
const gameRouter = require('./routes/game.router');

const app = express();
const PORT = 5000;

app.use(express.static('server/public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.use('/player', playerRouter);
app.use('/game', gameRouter);

app.listen(PORT, () => {
    console.log(`Up and running on PORT: ${PORT}`);
});

