export const CommonActions = () => {
    return {
        clickOnButton: (selector) => {
            cy.get(selector)
                .click()
        },
        checkBox: (selector) => {
            cy.get(selector)
                .check()
        },
        fillInField: (selector, text) => {
            cy.get(selector)
                .type(text)
        },
        doubleClick: (selector) => {
            cy.get(selector).dblclick()
        }
    }
}