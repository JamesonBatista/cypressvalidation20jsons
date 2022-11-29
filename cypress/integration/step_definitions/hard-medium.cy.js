import { JSONValidation, cyLog } from "../../../exports";

let json = "hard-medium";
let objectJSON;
Given("Que seja efetuado um GET na api hard-medium", () => {
  // TODO: implement step
  JSONValidation(json);
  objectJSON = JSON.parse(sessionStorage.getItem(json));
});

When(
  "For impresso a apresentacao do usuario e o caro disponivel pela cor",
  () => {
    // TODO: implement step
    for (let object of objectJSON) {
      for (let users of object.users) {
        for (let products of object.products) {
          if (users.color == products.color)
            cyLog(
              "check",
              `O Sr. ${users.name} possui ${users.year} de idade e tem o ${products.car} disponível.`
            );
        }
      }
      objectJSON = object;
    }
  }
);

Then("Sera validado endereco da loja", () => {
  // TODO: implement step
  for (let registration of objectJSON.registration.base) {
    if (registration.north)
      expect(registration.north.street).to.equal("Northland");
    if (registration.sul)
      expect(registration.sul.street).to.equal("Lago Woolf");
  }
});
