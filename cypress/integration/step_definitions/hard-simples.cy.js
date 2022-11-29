import { JSONValidation, cyLog } from "../../../exports";
let json = "hard-simple";
let objectJSON;
Given("Que seja efetuado um GET na api hard-simples", () => {
  // TODO: implement step
  JSONValidation(json);
  objectJSON = JSON.parse(sessionStorage.getItem(json));
});

When(
  "For impresso a apresentacao do usuario e o caro disponivel pela cor",
  () => {
    // TODO: implement step
    for (let users of objectJSON.users) {
      for (let products of objectJSON.products) {
        if (users.color == products.color) {
          cyLog(
            "check",
            `Sr. ${users.name} tem ${users.year} e tem disponível o carro ${products.car}`
          );
        }
      }
    }
  }
);

Then("Sera validado endereco da loja", () => {
  // TODO: implement step
  for (let object of objectJSON.registration.base) {
    if (object.north) expect(object.north.street).to.equal("Northland");
    if (object.sul) expect(object.sul.street).to.equal("Lago Woolf");
  }
});
