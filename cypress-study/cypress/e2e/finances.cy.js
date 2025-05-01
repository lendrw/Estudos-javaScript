


describe('Transações', () => {
    beforeEach(() => {
        cy.visit("https://my-devfinances.netlify.app/")
    });

    it('Cadastrar uma entrada', () => {
        
        criarTransacao('Freela', 250)
        criarTransacao('Freela fim de semana', 250)

        //cy.get('.description').should('have.text', 'Freela')
    });

    it('Cadastrar uma saída', () => {
    
        criarTransacao('Cinema', -45)
    
        cy.get('.description').should('have.text', 'Cinema')
    });

    it('Excluir uma transação', () => {
        criarTransacao('Freela', 100)

        cy.contains('.description', 'Freela')
            .parent()
            .find('img')
            .click()
    });
});

function criarTransacao(descricao, valor) {
    cy.contains("+ Nova Transação").click()
    cy.get('#description').type(descricao)
    cy.get('#amount').type(valor)
    cy.get('#date').type("2023-02-15")

    cy.contains('button', 'Salvar').click()
}