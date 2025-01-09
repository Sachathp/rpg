import { Character } from './character.js';

export class Paladin extends Character {
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
        target.dealDamage;
        }
    }
}