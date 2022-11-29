import { JSONValidation, cyLog } from "../../../exports";

let objectJSON;
let json = "complex";
Given("Que seja efetuado um GET na api complex", () => {
  // TODO: implement step
  JSONValidation(json);
  objectJSON = JSON.parse(sessionStorage.getItem(json));
});

Then("For impresso a lista de users com nome e idade", () => {
  // TODO: implement step
  for (let object of objectJSON.users) {
    cyLog("check", `Meu nome é ${object.name} e tenho ${object.year} anos.`);
  }
});

Then("For impresso a lista de carro disponivel", () => {
  // TODO: implement step
  for (let object of objectJSON.products) {
    cyLog("check", `Carro ${object.car} está disponível`);
  }
});

Then("Sera validado o endereco e o ceo", () => {
  // TODO: implement step
  expect(objectJSON.registration.ceo).to.equal("Michael Corbin");
  for (let object of objectJSON.registration.base) {
    
    if (object.north) expect(object.north.street).to.equal("Northland");
    if (object.sul) expect(object.sul.street).to.equal("Lago Woolf");
  }

  //segunda forma de validar
  expect(objectJSON.registration.base[0].north.street).to.equal("Northland");
  expect(objectJSON.registration.base[0].sul.street).to.equal("Lago Woolf");
});
