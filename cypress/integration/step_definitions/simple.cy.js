import { JSONValidation } from "../../support/JSONsRequests/requestsJSONs";

const json = "simple";
let objectJSON;
Given("Que seja efetuado um GET na api do simple", () => {
  // TODO: implement step
  JSONValidation(json);
});

When("For validado todos os campos para que nao sejam null", () => {
  // TODO: implement step
  objectJSON = JSON.parse(sessionStorage.getItem(json));
  expect(objectJSON.user).to.not.null;

  /**
  aqui poderiamos fazer outras validações com expect
   * 
   */
});

Then("Sera colocado na ordem o campo Order array", () => {
  // TODO: implement step
  console.log(
    objectJSON.user.Order.sort()
  );
});
