export  const CheckBoxPage = () => {
    return {
        do: () => {
            return {
                check: (selector) => {
                    cy.get(selector).click()
                },

                clickOn: (selector) => {
                    cy.get(selector).click()
                }
            }
        }
    }
}