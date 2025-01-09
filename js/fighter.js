import { Character } from './character.js';

export class Fighter extends Character {
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
            target.dealDamage;
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