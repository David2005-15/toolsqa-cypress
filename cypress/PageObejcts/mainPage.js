export const MainPage = () => {
    return {
        do: () => {
            return {
                clickOn: (selector) => {
                    cy.get(selector).click()
                }
            }
        },
    }
}
