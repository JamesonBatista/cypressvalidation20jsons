/// <reference types="cypress" />

export function JSONValidation(pathJSON) {
  return cy.fixture(`${pathJSON}.json`).then((response) => {
    //  console.log("method", response);
    sessionStorage.setItem(pathJSON, JSON.stringify(response));
  });
}

export async function cyLog(type, message) {
	let check = "✅ ";
	let error = "🛑 ";
	let alert = "⚠️ ";
	let info = "📝 ";
	let text = "📋 ";
	let start = "▶️ ";
  
	if (type === "check") {
	  return  cy.log(`**[${check} ${message}]()**`);
	} else if (type === "error") {
	  return cy.log(`${error} ${message}`);
	} else if (type === "alert") {
	  return cy.log(`${alert} ${message}`);
	} else if (type === "info") {
	  return cy.log(`*${info} ${message}*`);
	} else if (type === "start") {
	  return cy.log(`${start} ${message}`);
	} else {
	  return cy.log(`${text} ${message}`);
	}
  }