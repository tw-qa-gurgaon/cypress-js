describe('Google', function(){
 before('before', function(){
        cy.visit(Cypress.config().baseUrl)
    })

    it('Validate Protocol', function(){
        cy.location('protocol').should('eq','https:')
    })

    it('Validate Search', function(){
        cy.get('input[name=q]').type('Earth').type('{enter}')

    })
})