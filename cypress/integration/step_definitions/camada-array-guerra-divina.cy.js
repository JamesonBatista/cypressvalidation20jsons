import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import { JSONValidation, cyLog } from "../../../exports";
let json = "camada-array-guerra-divina";
let objectJSON;
let objectQuartaCamada;
Given("Que seja efetuado um GET na api camada-array-guerra-divina", () => {
  // TODO: implement step
  JSONValidation(json);
  objectJSON = JSON.parse(sessionStorage.getItem(json));
});

Given(
  "For acessado a intro  title desafio description {string}",
  (titleIntro) => {
    // TODO: implement step
    for (let object of objectJSON) {
      if (object.users)
        for (let users of object.users) {
          for (let main of users.main) {
            if (main.intro)
              for (let mainIntro of main.intro) {
                objectJSON = mainIntro;
                if (mainIntro.title)
                  expect(mainIntro.description).to.equal(titleIntro);
              }
          }
        }
    }
  }
);

Given(
  "For acessado a primeira camada, e depois a segunda com o valor {string}",
  (titleSegundaCamada) => {
    // TODO: implement step
    for (let primeiraCamada of objectJSON.primeira_camada) {
      for (let segundaCamada of primeiraCamada.segunda_camada) {
        objectJSON = segundaCamada;

        if (segundaCamada.title_segunda_camada) {
          expect(segundaCamada.title_segunda_camada).to.equal(
            titleSegundaCamada
          );
        }
      }
    }
  }
);

Given(
  "For acessado a terceira camada com o valor {string}",
  (titleTerceiraCamada) => {
    // TODO: implement step
    for (let terceiraCamada of objectJSON.terceira_camada) {
      objectJSON = terceiraCamada;
      if (terceiraCamada.title_terceira_camada)
        expect(terceiraCamada.title_terceira_camada).to.equal(
          titleTerceiraCamada
        );
    }
  }
);

Given("A quarta camada com o valor  {string}", (titleQuartaCamda) => {
  // TODO: implement step
  for (let quartaCamada of objectJSON.quarta_camada) {
    if (quartaCamada.objeto_quarta_camada)
      objectQuartaCamada = quartaCamada.objeto_quarta_camada;
    objectJSON = quartaCamada;
    if (quartaCamada.title_quarta_camada)
      expect(quartaCamada.title_quarta_camada).to.equal(titleQuartaCamda);
  }
});

Given(
  "For acessado o objeto da quarta camada com o valor {string}",
  (objectQuartaCamadaTitle) => {
    // TODO: implement step
    
    expect(objectQuartaCamada.title).to.equal(objectQuartaCamadaTitle);
  }
);

Given(
  "For acessado o segundo objecto da quarta camada com o valor {string}",
  (segundoObjectQuartaCamada) => {
    // TODO: implement step
  }
);

Given(
  "For acessdo o title da quinta camada com o valor {string}",
  (titleQuintaCamada) => {
    // TODO: implement step
  }
);

Given(
  "FOr acessado o array da intro da quinta camada com o title  {string}",
  (introTitleQuintaCamada) => {
    // TODO: implement step
  }
);

Then(
  "Sera acessado a sexta camada do JSON com o title {string}",
  (titleSextaCamada) => {
    // TODO: implement step
  }
);

Then(
  "Sera acessado o array do intro da sexta camada com o title {string}",
  (titleIntroSextaCamada) => {
    // TODO: implement step
  }
);

Then(
  "E for acessado o objecto da sexta camada com o title {string}",
  (titleObjectsextaCamada) => {
    // TODO: implement step
  }
);

Then(
  "Por ultimo acessado e validado o valor do title sem objecto {string}",
  (titleObjectSextaCamadaFinal) => {
    // TODO: implement step
  }
);
