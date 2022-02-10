export const TextBoxPage = () => {
    return {
        do: () => {
            return {
                typeIn: (selector, info) => {
                    cy.get(selector).type(info)
                }
            }
        }
    }
}