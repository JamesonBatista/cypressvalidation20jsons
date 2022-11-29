import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { JSONValidation, cyLog } from "../../../exports";
let json = "master-master";
let objectJSON;
let arrayValueProducts = [];
let arrayVips = [];
let pre_sal_interno;
Given("Que seja efetuado um GET na api master-master", () => {
  // TODO: implement step
  JSONValidation(json);
  while (!objectJSON) {
    objectJSON = JSON.parse(sessionStorage.getItem(json));
    for (let object of objectJSON) {
      objectJSON = object;
    }
  }
});

When(
  "For impresso quais carro cada cliente pode comprar de acordo com o valor que possue",
  () => {
    // TODO: implement step
    for (let users of objectJSON.users) {
      for (let products of objectJSON.products) {
        for (let object of objectJSON.VIPs) {
          for (let objectVip of object.selection_vip) {
            if (
              users.money >= products.value &&
              users.color == products.color
            ) {
              arrayValueProducts.push(
                `O Sr. ${users.name.split(" ")[0]} tem disponível ${
                  users.money
                } e pode comprar ${products.car}`
              );
            }
            if (users.name.split(" ")[1] == "VIP") {
              arrayVips.push(
                `O Sr. ${users.name.split(" ")[0]} por ser VIP tem acesso ao ${
                  objectVip.car
                }`
              );
            }
          }
        }
      }
    }
    const arrayNotDuplicate = [...new Set(arrayValueProducts)];
    for (let object of arrayNotDuplicate) {
      cyLog("check", object);
    }
  }
);

When("Caso ele seja VIP sera impresso quais carros ele tem direito", () => {
  // TODO: implement step
  const arrayVipNoteDuplicate = [...new Set(arrayVips)];
  for (let object of arrayVipNoteDuplicate) {
    cyLog("check", object);
  }
});

Then(
  "Sera validado o endereco north {string}, sul {string}  e o ceo {string}",
  (north, sul, ceo) => {
    // TODO: implement step
    expect(objectJSON.registration.ceo[0].president).to.equal(ceo);

    for (let object of objectJSON.registration.base) {
      if (object.north.street) expect(object.north.street).to.equal(north);
      if (object.sul.street) expect(object.sul.street).to.equal(sul);
    }
  }
);

Then("Sera validado o campo achou do nivel pre-sal {string}", (preSal) => {
  // TODO: implement step
  for (let object of objectJSON.data) {
    for (let objectFont of object.font) {
      for (let objectFundo of objectFont.fundo) {
        if (objectFundo.mais_fundo)
          for (let objectMaisFundo of objectFundo.mais_fundo) {
            if (objectMaisFundo.pre_sal)
              expect(objectMaisFundo.pre_sal.chegando.achou).to.equal(preSal);

            if (objectMaisFundo.pre_sal_interno)
              pre_sal_interno = objectMaisFundo.pre_sal_interno;
          }
      }
    }
  }
});

Then(
  "Sera validado o campo achou do nivel pre-sal-interno {string}",
  (preSalInterno) => {
    // TODO: implement step
    expect(pre_sal_interno.chegando.achou).to.equal(preSalInterno);
  }
);
