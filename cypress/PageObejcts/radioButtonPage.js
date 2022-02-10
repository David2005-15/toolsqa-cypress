export const RadioButtonPage = () => {
    return {
        do: () => {
            return {
                clickOn: (selector) =>{
                    cy.get(selector).click()
                }
            }
        }
    }
}