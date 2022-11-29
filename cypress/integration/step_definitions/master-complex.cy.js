import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { JSONValidation, cyLog } from "../../../exports";

let json = "master-complex";
let objectJSON;
let arrayValidation = [];
let arrayVIP = [];

Given("Que seja efetuado um GET na api master-complex", () => {
  // TODO: implement step
  JSONValidation(json);
  objectJSON = JSON.parse(sessionStorage.getItem(json));
});

When(
  "For impresso quais carros o cliente pode comprar de acordo com valor que possue complex",
  () => {
    // TODO: implement step
    for (let users of objectJSON.users) {
      for (let products of objectJSON.products) {
        if (users.money >= products.value) {
          arrayValidation.push(
            `O Sr. ${users.name} tem disponível ${users.money} e podem comprar ${products.car}`
          );
        }
        arrayValidation.push();
        if (products.VIPs) {
          for (let vip of products.VIPs) {
            arrayVIP.push(
              `O Sr. ${users.name} por ser VIP, tem acesso ao ${vip.car}`
            );
          }
        }
      }
    }
    const arrayNotDuplicate = [...new Set(arrayValidation)];
    for (let object of arrayNotDuplicate) {
      cyLog("check", object);
    }
  }
);

When(
  "Caso ela seja cliente VIP sera impresso os carros da categoria complex",
  () => {
    // TODO: implement step
    const arrayVipNotDuplicate = [...new Set(arrayVIP)]
    for(let object of arrayVipNotDuplicate){
      cyLog('check', object)
    }
  }
);

Then("Sera validado o endereco da loja", () => {
  // TODO: implement step
  // Já existe validações dessa parte nos outros testes
});
