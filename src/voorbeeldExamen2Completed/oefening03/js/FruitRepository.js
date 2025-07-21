import Fruit from './Fruit.js';
export default class FruitRepository {
  #fruit = [];

  get fruit() {
    return this.#fruit;
  }

  voegFruitToe(naam, koolhydraten, eiwit, vet, energie) {
    this.#fruit.push(new Fruit(naam, koolhydraten, eiwit, vet, energie));
  }

  /*   Vraag b
    retourneer de verschillende energiewaarden afgerond naar het bovenliggende 10tal 
    (voorbeeld 143 wordt afgerond naar 150, 57 naar 60), 
    gesorteerd in stijgende volgorde (mag geen dubbels bevatten)
    tip: deel de energiewaarde door 10, rond af naar boven en vermenigvuldig met 10  */
  get energiewaarden() {
    return [
      ...new Set(this.fruit.map((f) => Math.ceil(f.energie / 10) * 10)),
    ].sort((a, b) => a - b);
  }

  /*     Vraag c
    Retourneer het fruit waarvan de energiewaarde kleiner of gelijk is aan de opgegeven energiewaarde. 
    Als de energiewaarde niet is opgegeven retourneer dan alle fruit
    Het fruit wordt gesorteerd volgens de energiewaarde in dalende volgorde */
  geefFruitMetEnergiewaarde(energie) {
    const fruit =
      energie !== 0 && !energie
        ? this.#fruit
        : this.#fruit.filter((f) => f.energie <= energie);
    return fruit.sort((a, b) => b.energie - a.energie);
  }
}
