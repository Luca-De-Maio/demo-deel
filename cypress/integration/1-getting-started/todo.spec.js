/// <reference types="cypress" />


describe('Entering Deel dev web page', () => {

  it('Log in ', () => {
    cy.visit('https://dev.deel.wtf/login')
    cy.get('[name="email"]').type("demaio.martin@gmail.com")
    cy.get('[name="password"]').type("156194Lu#1")
    cy.get('[type=submit]').click()
  })

  it('Select Contract', () => {
    cy.get('.button-close').click()
    cy.get('[href="/create"]').click()
    cy.get('[href="/create/fixed"]').click()
  })

  it('General info', () => {
    cy.get('[name="name"]').type("Luca contract")
    cy.get('[name="scope"]').type("QA engineer scoper")
    cy.get('.chevron > .icon > svg').click()
    cy.xpath('//button[contains(concat(\' \', @class, \' \'), \'react-calendar__tile--active\')]/preceding-sibling::*[1]').click()
    cy.get('[type="submit"]').click()
  })

  it('Payment details', () => {
    cy.get("input[name='rate']").type("1000")
    cy.xpath("//div[contains(text(),'USD - US Dollar')]").type("gbp{enter}")
    cy.xpath("//div[contains(text(),'Month')]").click()
    cy.xpath("//div[contains(text(),'Week')]").click()
    cy.get('[type="submit"]').click()
  })

  it('Define Dates', () => {
    cy.get('[type="submit"]').click()
  })

  it('Extras', () => {
    cy.xpath("//div[contains(text(),'add a special clause')]").click()
    cy.get("[class='textarea-container']").click().type("lorem")
    cy.get('[theme="primary"]').click()
  })

  it('Compliance', () => {
    cy.get('.select__value-container').click().type("United States{enter}")
    cy.get('.select__placeholder').click().type("Colorado{enter}")
    cy.get('[theme="primary"]').click()
  })
})
