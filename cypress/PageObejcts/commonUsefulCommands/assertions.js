export const CommonAssertions = () => {
    return {
        must: (argH) => {
            return {
                beVisible: () => {
                    return cy.get(argH).should('be.visible')
                },

                haveText: () => {
                    return cy.get(argH).should('have.text', 'Alden')
                }
            }
        }
    }
}