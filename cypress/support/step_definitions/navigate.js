import {Given, When, Then} from "cypress-cucumber-preprocessor/steps"

Given('I am in the demo site',()=>{

    cy.visit("https://www.deque.com/axe/");

})
