export const WebTablesPage = () => {
    return{
        do: () => {
            return {
                clickOn: (selector) => {
                    cy.get(selector).click()
                }
            }
        }
    }
}