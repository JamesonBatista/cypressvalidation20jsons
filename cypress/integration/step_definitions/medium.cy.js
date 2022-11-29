import { cyLog, JSONValidation } from "../../support/JSONsRequests/requestsJSONs";

let json = "medium";
let objectJson;
Given("Que seja efetuado um GET na api medium", () => {
  // TODO: implement step
  JSONValidation(json);
  objectJson = JSON.parse(sessionStorage.getItem(json));
});

When("For validado que os campos nao sejam null", () => {
  // TODO: implement step
  expect(objectJson.user).to.not.null;
  expect(objectJson.address).to.not.null;
  // podendo adicionar outros campos
});

When("For contabilizado a quantidade de usuarios dentro do campo users", () => {
  // TODO: implement step
  cyLog('info', objectJson.users.length);
  expect(objectJson.users.length).to.equal(2);
});

When(
  "Validado valor do campo street dentro do campo address com valor {string}",
  (street) => {
    // TODO: implement step
    expect(objectJson.address.street).to.equal(street);
  }
);

When(
  "For validado o valor do campo long {int} e planet {word}",
  (long, planet) => {
    // TODO: implement step
    for (let object of objectJson.address.geo) {

      expect(object.state.long).to.equal(long);
      expect(object.state.planet[0]).to.equal(planet);

      // segunda forma de validar o planet
      for(let objectPlanet of object.state.planet){
        cyLog('info',`valor encontrado: ${objectPlanet}`)
        expect(objectPlanet).to.equal(planet)
      }
    }
  }
);

Then("Sera validado o valor do campo others {word}", (others) => {
  // TODO: implement step
  let arrayOthers = objectJson.address.others
  for(let object of arrayOthers){
    expect(object).to.equal(others)
  }
});
