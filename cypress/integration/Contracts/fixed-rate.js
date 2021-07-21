/// <reference types="cypress" />

describe('Entering Deel dev web page', () => {

  beforeEach(function () {
    cy.fixture("data").as("data")
  })

  it('Log in ', () => {
    cy.visit('https://dev.deel.wtf/login')

    cy.get("@data").then((data) => {
      cy.get('[name="email"]').type(data.email)
      cy.get('[name="password"]').type(data.password)
    })

    cy.get('[type=submit]').click()
  })

  it('Select Contract', () => {
    cy.get('.button-close',{timeout:5000}).click()
    cy.get('[href="/create"]').click()
    cy.get('[href="/create/fixed"]').click()
  })

  it('General info', () => {
    cy.get("@data").then((data) => {
      cy.get('[name="name"]').type(data.contractName)
      cy.get('[name="scope"]').type(data.scope)
    })
    cy.get('.chevron > .icon > svg').click()
    cy.xpath('//button[contains(concat(\' \', @class, \' \'), \'react-calendar__tile--active\')]/preceding-sibling::*[1]').click()
    cy.get('[type="submit"]').click()
  })

  it('Payment details', () => {
    cy.get("input[name='rate']").type("1000")
    cy.get("@data").then((data) => {
      cy.xpath("//div[contains(text(),'USD - US Dollar')]").type(data.currency)
      cy.xpath("//div[contains(text(),'Month')]").click()
      cy.xpath("//div[contains(text(),'Week')]").click()
    })
    cy.get('[type="submit"]').click()
  })

  it('Define Dates', () => {
    cy.get('[type="submit"]').click()
  })

  it('Extras', () => {
    cy.xpath("//div[contains(text(),'add a special clause')]").click()
    cy.get("@data").then((data) => {
      cy.get("[class='textarea-container']").click().type(data.clause)
    })
    cy.get('[theme="primary"]').click()
  })

  it('Compliance', () => {
    cy.get("@data").then((data) => {
      cy.get('.select__value-container').click().type(data.country)
      cy.get('.select__placeholder').click().type(data.state)
    })

    cy.get('[theme="primary"]').click()
  })
})
