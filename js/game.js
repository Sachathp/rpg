import { Character } from './character.js';
import { Fighter } from './fighter.js';
import { Paladin } from './paladin.js';
import { Berzerker } from './berzerker.js';
import { Monk } from './monk.js';
import { Assasin } from './assasin.js';

export class Game {
    constructor(players, turnLeft = 10) {
        this.players = players;
        this.turnLeft = turnLeft;
    }

    startGame() {
        console.log("La partie commence");
        this.startTurn();
    }

    startTurn() {
        if (this.turnLeft > 0) {
        console.log(`Tour n°${10 - this.turnLeft +1}`);

        const shuffledPayers = this.shuffledPayers(this.players);

        shuffledPayers.forEach(player => {
            if (player.hp > 0) {
                console.log(`C'est à ${player.name} de jouer`);
                this.handlePlayerTurn(player);
            }
        });

        this.showAlivePlayers();

        this.skipTurn();

        } else {
            console.log("La partie est terminée");
            this.endGame();
        }
    }

    handlePlayerTurn(player) {
        const target = this.getRandomTarget(player);

        if (Math.random() > 0.5) {
            player.useSpecialAttack(target);
        } else {
            player.dealDamage(target);
        }
    }

    getRandomTarget(player) {
        const alivePlayers = this.players.filter(p => p !== player && p.hp > 0);
        const randomIndex = Math.floor(Math.random() * alivePlayers.length);
        return alivePlayers[randomIndex];
    }

    showAlivePlayers() {
        const alivePlayers = this.players.filter(player => player.hp > 0);
        console.log("Joueurs vivants :");
        alivePlayers.forEach(player => {
            console.log(`${player.name}: ${player.hp} HP`);
        });
    }

    skipTurn() {
        if (this.turnLeft > 0) {
            this.turnLeft -= 1;
            console.log(`Un tour est passé. Tour restants : ${this.turnLeft}`);
        } else {
            console.log("La partie est terminée ! ");
        }

        if (this.turnLeft === 0) {
            this.endGame();
        } else {
            this.startTurn();
        }
    }

    endGame() {
        console.log("La partie est terminée !");
        Character.updateStatus(this.players);

        this.players.forEach(player => {
            if (player.status === "playing") {
                player.status = "winner";
            }
        })
    }

    watchStats() {
        console("Statistiques des joueurs :");
        this.players.forEach(player => {
            console.log(`${player.name} : ${player.hp} HP, ${player.dmg} DMG, ${player.mana} MANA, ${player.status}`);
        });
    }

    shuffledPayers(players) {
        return players.sort(() => Math.random() - 0.5);
    }
}