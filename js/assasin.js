import { Character } from './character.js';

export class Assasin extends Character {
    constructor (hp = 6, dmg = 6, mana = 20, specialattack = "Shadow Hit", name = "Carl") {
        super(hp, dmg, mana, name, specialattack);
    }

    useSpecialAttack() {
        console.log(`${this.name} utilise ${this.specialattack}`)
        this.dmg += 1;

        this.hp -= 1;
        console.log(`${this.name} gagne 1 dmg et perd 1 hp`)
    } 
}