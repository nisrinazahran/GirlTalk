/**
 * skenario testing
 *
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email and password are wrong
 *   - should display homepage when email and password are correctly
 */

describe('Login spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:5173/login');
  });

  it('should display login page correctly', () => {
    //memverifikasi elemen yang harus tampak pada halaman login
    cy.get('input[placeholder="Enter email"]').should('be.visible');
    cy.get('input[placeholder="Enter password"]').should('be.visible');
    cy.get('button[type="submit"]').should('be.visible');
  });

  it('should display alert when email is empty', () => {
    //klik tombol login tanpa mengisi email
    cy.get('button[type="submit"]').click();

    //memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window.alert', (str) => {
      expect(str).to.equal('"email" is not allowed to be empty');
    });
  });

  it('should display alert when password is empty', () => {
    //mengisi email
    cy.get('input[placeholder="Enter email"]').type('test@mail.com');
    
    //klik tombol login tanpa mengisi password
    cy.get('button[type="submit"]').click();

    //memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on('window.alert', (str) => {
      expect(str).to.equal('"password" is not allowed to be empty');
    });
  });

  it('should display homepage when email and password are correctly', () => {
    //mengisi email
    cy.get('input[placeholder="Enter email"]').type('nisrina@gmail.com');

    //mengisi password
    cy.get('input[placeholder="Enter password"]').type('test123');
    
    //klik tombol login tanpa mengisi password
    cy.get('button[type="submit"]').click();

    //memverifikasi bahwa elemen yang berada di homepage ditampilkan
    cy.get('header').should('be.visible');
  });
});
