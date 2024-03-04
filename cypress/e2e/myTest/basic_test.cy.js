/// <reference types="cypress" />

import util from "../../../src/utils/util";

describe("basic_test", function(){

   it("my first test", ()=>{
    let myVar =1;
     expect(myVar).to.equal(1);
   });
    
   it("util file sum function", ()=>{
    let sumFunctionResult = util.sum(4,5);
    expect(sumFunctionResult).to.equal(9);
   });

   it("util file sum function type check test", function (){
    let prm1 = 4;
    let prm2 = 5;
    
    let typeNamePrm1 = typeof prm1;
    let typeNamePrm2 = typeof prm2;

    expect(typeNamePrm1).to.equal("number");
    expect(typeNamePrm2).to.equal("number");
   });

   it("util file sum function not working properly", ()=>{

    let prm1 = 4;
    let prm2 = 5;
    let sumFunctionResult = util.sum(prm1, prm2);
    expect(sumFunctionResult).not.equal(90);
   });

   it("check given email is formatted correctly", ()=>{
    let email = "ali@ali.com"
    const isEmailCorrect = util.validateEmail(email);
    expect(isEmailCorrect).to.equal(true);
   })

   it("check given email is formatted correctly", ()=>{
    let email = "123.com"
    const isEmailCorrect = util.validateEmail(email);
    expect(isEmailCorrect).to.equal(false);
   })



})


describe("basic_2nd_test", function(){

    it("visit my home page", ()=>{
        cy.visit('http://localhost:5173/');

    });

    it('clicks button', ()=>{
        cy.visit('http://localhost:5173/');

        cy.get('button').click();
    })
         it('clicks button and check if counter is equal 1', ()=>{
        cy.visit('http://localhost:5173/');
        
        cy.get('button').click();

        cy.get('button').should('have.text', 'count is 1');
    })
    
 
 })