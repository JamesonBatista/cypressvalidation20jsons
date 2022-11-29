import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { JSONValidation } from "../../../exports";
let json = "camada-pre-sal";
let objectJSON;
Given("Que seja efetuado um GET na api camada-pre-sal", () => {
  // TODO: implement step
  JSONValidation(json);
  objectJSON = JSON.parse(sessionStorage.getItem(json));
});

Then("sera entrado o calor do campo value {string}", (text) => {
  // TODO: implement step
  for (let object of objectJSON.user_info.address) {
    for (let house of object.primary_address.house) {
      if (house.room.bad)
        for (let bad of house.room.bad) {
          for (let airPlane of bad.sanders.airPlane) {
            if (airPlane.Brooks)
              for (let brooks of airPlane.Brooks) {
               for(let books of brooks.books){
                expect(books.result_final.value).to.equal(text)
               }
              }
          }
        }
    }
  }
});
