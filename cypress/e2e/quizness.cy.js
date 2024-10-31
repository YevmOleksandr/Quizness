describe('Login Functionality', () => {
    it('should log in with valid credentials', () => {
        cy.visit('/login');

        // Введення логіна та пароля
        cy.get('input[name="username"]').type('1');
        cy.get('input[name="password"]').type('1');
        cy.get('button[type="submit"]').click();

        // Перевірка, що після входу відображається кнопка "Logout"
        cy.contains('Logout').should('be.visible');
    });

    it('should not log in with invalid credentials', () => {
        cy.visit('/login');

        // Введення неправильних логіна або пароля
        cy.get('input[name="username"]').type('wrong');
        cy.get('input[name="password"]').type('wrong');
        cy.get('button[type="submit"]').click();

        // Перевірка, що залишаємось на сторінці входу
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

        // Перевірка, що відображаються тести
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
        // Вибір відповідей на кожне запитання
        cy.get('.options input').first().check();
        cy.get('button').contains('Next Question').click();

        // Повторіть для всіх питань у тесті або використайте цикл для автоматизації
        // Після останнього запитання має з'явитись результат
        cy.contains('Quiz Finished!').should('be.visible');
    });
});
