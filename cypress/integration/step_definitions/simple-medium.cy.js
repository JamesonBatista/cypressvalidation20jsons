import { JSONValidation } from "../../support/JSONsRequests/requestsJSONs";
let objectJSON;
let json='simple-medium'
Given("Que seja efetuado um GET na api simple-medium", () => {
  // TODO: implement step
  JSONValidation(json);
  objectJSON = JSON.parse(sessionStorage.getItem(json))
});

Then("Sera validado que nenhum campo seja null", () => {
  // TODO: implement step
for(let object of objectJSON){
  // Os campos não serão totalmente validado, teste serve apenas para mostrar o caminho.
  expect(object.user).to.not.null
}
});
