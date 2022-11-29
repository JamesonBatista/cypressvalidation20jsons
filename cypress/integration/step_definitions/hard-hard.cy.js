import { JSONValidation, cyLog } from "../../../exports";

let json = "hard-hard";
let objectJSON;

Given("Que seja efetuado um GET na api hard-hard array", () => {
  // TODO: implement step
  JSONValidation(json);
  objectJSON = JSON.parse(sessionStorage.getItem(json));
  for (let object of objectJSON) {
    objectJSON = object;
  }
});

When(
  "For impresso o carro que cada cliente pode comprar de acordo com o valor que possue array",
  () => {
    // TODO: implement step
    for (let users of objectJSON.users) {
      for (let products of objectJSON.products) {
        if (users.money >= products.value)
          cyLog(
            "check",
            `O Sr. ${users.name} possui ${users.money}R$ e pode comprar ${products.car}`
          );
      }
    }
  }
);

Then("Sera validado o endereco da loja", () => {
  // TODO: implement step

  // Essa validaçõa já existe //
});
