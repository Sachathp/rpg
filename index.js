class Character {
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
        }
    }
}


class Fighter extends Character {
    constructor (hp = 12, dmg = 4, mana = 40, name = "Grace", specialattack = "DarkVision" ) {
        super(hp, dmg, mana, name, specialattack);
        this.damageReduction = 0;
    }

    useSpecialAttack(target) {
        if (this.mana >= 20) {
            console.log (`${this.name} utilise ${this.specialattack} sur ${target.name}`);

            target.takeDamage(5);

            this.damageReduction = 2;

            this.mana -= 20;
            console.log(`${this.name} résuit les dégats reçu de 2 au prochain tour, mana restant : ${this.mana}`);
        } else {
            console.log(`${this.name} n'a pas assez de mana pour utiliser ${this.specialattack}`);
        }
    }

    

    takeDamage(amount) {
        const finalDamage = Math.max(0, amount - this.damageReduction);
        this.hp -= finalDamage;
        if (this.hp < 0) this.hp = 0;
        console.log(`${this.name} subit ${finalDamage} dégats après réduction. Il lui reste ${this.hp} HP`); 
    }

    resetDamageReduction() {
        this.damageReduction = 0;
        console.log(`${this.name} ne bénéficie plus de réduction de dégats`);
    }
}

class Paladin extends Character {
    constructor (hp = 16, dmg = 3, mana = 160, name = "Ulder", specialattack = "Healing Lighting") {
        super(hp, dmg, mana, name, specialattack);
    }

    useSpecialAttack(target) {
        if (this.mana >= 40) {
        console.log (`${this.name} utilise ${this.specialattack} sur ${target.name}`);

        target.takeDamage(4);

        this.hp += 5;

        this.mana -= 40;
        console.log (`${this.name} inflige 4 dommage à ${target.name} et se soigne de 5 HP`)
    } else {
        console.log(`${this.name} n'a pas assez de mana pour utiliser ${this.specialattack}`);
        }
    }
}

class Monk extends Character {
    constructor (hp = 8, dmg = 2, mana = 25, name = "Maana", specialattack = "Heal") {
        super(hp, dmg, mana, name, specialattack);
    }

    useSpecialAttack() {
        if (this.mana >= 25) {
        console.log(`${this.name} utilise ${this.specialattack}`);

        this.hp += 8;

        this.mana -= 25;
        console.log(`${this.name} se soigne de 8 hp`);
    } else {
        console.log(`${this.name} n'a pas assez de mana pour utiliser ${this.specialattack}`);
        }
    }
}

class Berzerker extends Character {
    constructor (hp = 8, dmg = 4, mana = 0, name = "Draven", specialattack = "Rage") {
        super(hp, dmg, mana, name, specialattack,);
    }

    useSpecialAttack() {

        console.log(`${this.name} utilise ${this.specialattack}`)
        this.dmg += 1;

        this.hp -= 1;
        console.log(`${this.name} gagne 1 dmg et perd 1 hp`)
    } 
}

class Assasin extends Character {
    constructor (hp = 6, dmg = 6, mana = 20, specialattack = "Shadow Hit", name = "Carl") {
        super(hp, dmg, mana, name, specialattack);
    }

    useSpecialAttack(target) {
        if (this.mana >= 20)
        console.log(`${this.name} utilise ${this.specialattack}`)
    }
}

const myFighter = new Fighter();
console.log(myFighter);

const myPaladin = new Paladin();
console.log(myPaladin);

const myMonk = new Monk();
console.log(myMonk);

const myBerzerker = new Berzerker();
console.log(myBerzerker);

const myAssasin = new Assasin();
console.log(myAssasin);

const players = [myFighter, myPaladin, myMonk, myBerzerker, myAssasin];

myFighter.useSpecialAttack(myBerzerker);

myPaladin.useSpecialAttack(myMonk)

myMonk.useSpecialAttack()

myBerzerker.useSpecialAttack()

myBerzerker.dealDamage(myPaladin)


Character.updateStatus(players);
players.forEach(player => console.log(`${player.name}: ${player.status}`));