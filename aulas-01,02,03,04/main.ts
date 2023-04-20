import prompt from "prompt-sync";
import Personagem from "./Personagem";

let person: Personagem;
person = new Personagem("Sansa Stark", 100, 40, 20, 20);
let teclado = prompt();
let option: number = 0;
while (!person.isDead() && option !=9) {
  console.log(`+========= Personagem : ${person.nome} =============+`);
  console.log("|1. Treinar ataque                 |");
  console.log("|2. Treinar defesa                 |");
  console.log("|3. Descansar                      |");
  console.log("|4. Entrar em batalha              |");
  console.log("|8. Imprimir atributos             |");
  console.log("|9. Sair                           |");
  console.log("+==================================+");

  option = +teclado("Escolha uma ação");

  switch (option) {
    case 1:
        person.treinarAtaque()
        console.log(person.status())
      break;
    case 2:
        person.treinarDefesa()
        console.log(person.status())
      break;
    case 3:
        let horas: number = +teclado("Digite o número de horas de descanso")
        person.descansar(horas)
        console.log(person.status())
      break;
    case 4:
        let rest : number = person.batalhar()
        console.log(`Esta batalha custou ${rest} de energia`);
      break;
    case 8:
        console.log(person.status())
      break;
    default:
      break;
  }
}
console.log("Ops! Você morreu!")
