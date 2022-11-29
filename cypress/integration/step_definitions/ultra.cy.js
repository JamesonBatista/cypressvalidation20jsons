import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { JSONValidation, cyLog } from "../../../exports";
import { faker } from "@faker-js/faker";
let json = "ultra";
let objectJSON = null;
let arrayUsers = [];
let arrayProducts = [];
let arrayVips = [];
Given("Que seja efetuado um GET na api ultra", () => {
  // TODO: implement step
  JSONValidation(json);
  objectJSON = JSON.parse(sessionStorage.getItem(json));

  // nesse json não estarei validando e sim criando....
});

When("For criado um array fake de users", () => {
  // TODO: implement step
  while (arrayUsers.length < 3) {
    arrayUsers.push({
      user: faker.name.firstName(),
      year: faker.date.birthdate(),
    });
  }
  for (let object of arrayUsers) {
    cyLog("check", `${object.user} - ${object.year}`);
  }
});

When("For criado um array fake de produtos", () => {
  // TODO: implement step
  while (arrayProducts.length < 3) {
    arrayProducts.push({
      car: faker.animal.horse(),
      color: faker.color.human(),
    });
    for (let object of arrayProducts) {
      cyLog("check", `${object.car} - ${object.color}`);
    }
  }
});

Then("Sera criado array fake de vips", () => {
  // TODO: implement step
  while (arrayVips.length < 3) {
    arrayVips.push({
      user: faker.name.fullName(),
      finance: faker.finance.account(),
    });
  }
  for (let object of arrayVips) {
    cyLog("check", `${object.user} - ${object.finance}`);
  }

  let jsonComplete = new Object();
  jsonComplete.users = arrayUsers;
  jsonComplete.products = arrayProducts;
  jsonComplete.VIPs = arrayVips;

  let constructorStringJSON = JSON.stringify(jsonComplete);
  cyLog("check", constructorStringJSON);
});
