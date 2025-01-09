export class Character {
    constructor (hp, dmg, mana, name, specialattack) {
        this.hp = hp;
        this.dmg = dmg;
        this.mana = mana;
        this.specialattack = specialattack;
        this.name = name;
        this.status = "playing";
    }

    takeDamage(amount) {
        this.hp -= amount;
        if (this.hp < 0) this.hp = 0;
        console.log(`${this.name} subit ${amount} dégats. Il lui reste ${this.hp} HP.`);
    }


    dealDamage(target) {
        if (this.hp > 0) {
        console.log(`${this.name} inflige ${this.dmg} dégats à ${target.name}`);
        target.takeDamage(this.dmg);
        } else {
        console.log(`${this.name} est hors de combat et ne peut pas attaquer.`);
        }
    }

    static updateStatus(players) {
        const alivePlayers = players.filter (player => player.hp > 0); 

        players.forEach(player => {
            player.status = player.hp > 0
                ? (alivePlayers.length === 1 ? "winner" : "playing")
                : "loser";
        });

        if (alivePlayers.length === 1) {
            console.log(`${alivePlayers[0].name} est maintenant le winner !`);
            this.turnsLeft = 0;
        }
    }
}