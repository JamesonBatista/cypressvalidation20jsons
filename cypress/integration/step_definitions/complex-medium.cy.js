import { JSONValidation, cyLog } from "../../../exports";
let json = "complex-medium";
let objectJSON;
Given("Que seja efeutado um GET na api complex-medium", () => {
  // TODO: implement step
  JSONValidation(json);
  objectJSON = JSON.parse(sessionStorage.getItem(json));
});

Then("For impresso a lista de usuarios com idade", () => {
  // TODO: implement step

  for (let object of objectJSON) {
    for (let users of object.users) {
      cyLog("check", `Meu nome é ${users.name} e possuo ${users.year} anos.`);
    }
    objectJSON = object;
  }
});

Then("For impresso a lista de carros disponiveis", () => {
  // TODO: implement step
  for (let arrayCar of objectJSON.products) {
    cyLog("check", `O carro ${arrayCar.car} está disponível.`);
  }
});

Then("Sera validado endereco e o ceo", () => {
  // TODO: implement step
  for(let registration of objectJSON.registration.base){
    if(registration.north) expect(registration.north.street).to.equal("Northland")
    if(registration.sul) expect(registration.sul.street).to.equal("Lago Woolf")

  }
});
