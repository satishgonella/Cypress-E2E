import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Then('Perform accessibility test',()=>{

    cy.visit("https://www.deque.com/axe/");
    cy.injectAxe();
    cy.checkA11y();

})
