import { Mage } from "./Mage";
import { Personagem } from "./Personagem";
import { Priest } from "./Priest";

let gandalf: Personagem = new Mage("gandalf");
let don_azaghal: Personagem = new Priest("don azaghal");
const personagens: Personagem[] = [];

personagens.push(gandalf, don_azaghal);

personagens.forEach((p) =>
  console.log(p.atacar())
);
