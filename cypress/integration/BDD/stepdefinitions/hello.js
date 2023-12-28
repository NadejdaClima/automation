// cypress/e2e/duckduckgo.ts
//TODO: https://www.linkedin.com/pulse/part-2-hands-on-test-automation-project-cypress-reis-fernandes
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

When("I visit duckduckgo.com", () => {
  cy.visit("https://www.duckduckgo.com");
  cy.pause()
});

Then("I should see a search bar", () => {
  cy.get("input[type='text']").should(
    "have.attr",
    "placeholder",
    "Search without being tracked"
  );
});