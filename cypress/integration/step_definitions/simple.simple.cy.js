import { JSONValidation } from "../../support/JSONsRequests/requestsJSONs";
const json = "simple-simple";
Given("Que seja efetuado um GET no endpoint simple-simple", () => {
  // TODO: implement step
  JSONValidation(json);
});

Then("Sera validado que todos os campos não sejam null", () => {
  // TODO: implement step
  // let body = JSON.parse(sessionStorage.getItem(json));
  let value = JSON.parse(sessionStorage.getItem(json));
  expect(value.user).to.not.null;
  expect(value.user).to.not.undefined;
  expect(value.user).to.not.empty;
});
