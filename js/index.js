import { Character } from './character.js';
import { Fighter } from './fighter.js';
import { Monk } from './monk.js';
import { Berzerker } from './berzerker.js';
import { Assasin } from './assasin.js';
import { Paladin } from './paladin.js';
import { Game } from './game.js';





const myFighter = new Fighter();
const myPaladin = new Paladin();
const myMonk = new Monk();
const myBerzerker = new Berzerker();
const myAssasin = new Assasin();

const players = [myFighter, myPaladin, myMonk, myBerzerker, myAssasin];

const game = new Game(players);

game.startGame();