describe('Login Functionality', () => {
    it('should log in with valid credentials', () => {
        cy.visit('/login');

        cy.get('input[name="username"]').type('1');
        cy.get('input[name="password"]').type('1');
        cy.get('button[type="submit"]').click();

        cy.contains('Logout').should('be.visible');
    });

    it('should not log in with invalid credentials', () => {
        cy.visit('/login');

        cy.get('input[name="username"]').type('wrong');
        cy.get('input[name="password"]').type('wrong');
        cy.get('button[type="submit"]').click();

        cy.url().should('include', '/login');
    });
});
describe('Quiz Selection', () => {
    before(() => {
        // Логін перед тестуванням вибору тесту
        cy.visit('/login');
        cy.get('input[name="username"]').type('1');
        cy.get('input[name="password"]').type('1');
        cy.get('button[type="submit"]').click();
    });

    it('should display quiz list when logged in', () => {
        cy.visit('/quiz-selection');

        cy.contains('General Knowledge').should('be.visible');
    });
});
describe('Quiz Functionality', () => {
    beforeEach(() => {
        // Логін та перехід до тесту
        cy.visit('/login');
        cy.get('input[name="username"]').type('1');
        cy.get('input[name="password"]').type('1');
        cy.get('button[type="submit"]').click();
        cy.visit('/quiz-selection');
        cy.contains('General Knowledge').click();
    });

    it('should complete the quiz and show the score', () => {

        cy.get('.options input').first().check();
        cy.get('button').contains('Next Question').click();


        cy.contains('Quiz Finished!').should('be.visible');
    });
});
