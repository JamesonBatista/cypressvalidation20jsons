import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { JSONValidation, cyLog } from "../../../exports";

let json = "master-simple";
let objectJSON;
let arrayValidation = [];
let arrayVIP = [];
Given("Que seja efetuado um GET na api master-simples", () => {
  // TODO: implement step
  JSONValidation(json);
  objectJSON = JSON.parse(sessionStorage.getItem(json));
});

When(
  "For impresso quais carros o cliente pode comprar de acordo com valor que possue",
  () => {
    // TODO: implement step

    for (let users of objectJSON.users) {
      for (let products of objectJSON.products) {
        for (let vips of objectJSON.VIPs) {
          if (users.money >= products.value)
            arrayValidation.push(
              `O Sr. ${users.name} possue ${users.money}$ e tem acesso ao ${products.car}`
            );

          if (users.class == "VIP")
            arrayVIP.push(
              `O Sr. ${users.name} por ser cliente VIP tem acesso ao ${vips.car}`
            );
        }
      }
    }
    const arrayNotDuplicate = [...new Set(arrayValidation)];
    for (let list of arrayNotDuplicate) {
      cyLog("check", list);
    }
  }
);

When("Caso ela seja cliente VIP sera impresso os carros da categoria", () => {
  // TODO: implement step
  const arrayVipNotDuplicate = [...new Set(arrayVIP)];
  for (let array of arrayVipNotDuplicate) {
    cyLog("check", array);
  }
});

Then("Sera validado o endereco da loja", () => {
  // TODO: implement step

  // Já existe validações dessa parte nos outros testes
});
