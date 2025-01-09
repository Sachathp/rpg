import { Character } from './character.js';

export class Berzerker extends Character {
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