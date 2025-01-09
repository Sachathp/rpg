import { Character } from './character.js';

export class Monk extends Character {
    constructor (hp = 8, dmg = 2, mana = 25, name = "Maana", specialattack = "Heal") {
        super(hp, dmg, mana, name, specialattack);
    }

    useSpecialAttack(target) {
        if (this.mana >= 25) {
        console.log(`${this.name} utilise ${this.specialattack}`);

        this.hp += 8;

        this.mana -= 25;
        console.log(`${this.name} se soigne de 8 hp`);
    } else {
        console.log(`${this.name} n'a pas assez de mana pour utiliser ${this.specialattack}`);
        target.dealDamage;
        }
    }
}