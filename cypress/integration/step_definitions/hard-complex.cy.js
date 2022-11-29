import { JSONValidation, cyLog } from "../../../exports";

let json = "hard-complex";
let objectJSON;

Given("Que seja efetuado um GET na api hard-complex", () => {
  // TODO: implement step
  JSONValidation(json);
  objectJSON = JSON.parse(sessionStorage.getItem(json));
});

When(
  "For impresso o carro que cada cliente pode comprar de acordo com o valor que possue",
  () => {
    // TODO: implement step
    for (let users of objectJSON.users) {
      for (let products of objectJSON.products) {
        if(users.money >= products.value)
        cyLog('check',`O Sr. ${users.name} possui ${users.money}R$ e pode comprar ${products.car}`)
      }
    }
  }
);

Then("Sera validado o endereco da loja", () => {
  // TODO: implement step

  // já existe essa validação nos outros Testes
});
