export class DnDCharacter {
  public hitpoints: number;
  public constitution: number;
  public strength: number;
  public dexterity: number;
  public intelligence: number;
  public wisdom: number;
  public charisma: number;

  public constructor() {
    this.constitution = DnDCharacter.generateAbilityScore();
    this.strength = DnDCharacter.generateAbilityScore();
    this.dexterity = DnDCharacter.generateAbilityScore();
    this.intelligence = DnDCharacter.generateAbilityScore();
    this.wisdom = DnDCharacter.generateAbilityScore();
    this.charisma = DnDCharacter.generateAbilityScore();
    this.hitpoints = 10 + DnDCharacter.getModifierFor(this.constitution);
  }

  public static generateAbilityScore(): number {
    return Math.floor(Math.random() * 15 + 3);
  }

  public static getModifierFor(abilityValue: number): number {
    return Math.floor(abilityValue / 2) - 5;
  }
}
