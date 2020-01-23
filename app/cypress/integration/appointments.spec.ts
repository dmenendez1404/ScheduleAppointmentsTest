describe('Widget E2E', () => {
    const apiUrl = "http://localhost:5000/schedule-appointments-test-qa/us-central1/appointments/";

    before(() => {
        cy.server();
        cy.route({method: 'GET', url: `${apiUrl}`}).as('loadAppointments');
        cy.visit('/');
        cy.wait('@loadAppointments').its('status').should('eq', 200);
    })

    it('create an Appointment', () => {
        cy.get('.rbc-events-container').eq(0).click();
        cy.get('#title').focus().type('Cypress Test Appointment');
        cy.get('#clothing').click();
        cy.get('.MuiMenu-list li').eq(0).click();
        cy.get('#description').focus().type('Cypress Test Appointment Description');
        cy.server();
        cy.route({method: 'POST', url: `${apiUrl}`}).as('createAppointment');
        cy.contains('Save').click();
        cy.wait('@createAppointment').its('status').should('eq', 200);
    })

     it('update an Appointment', () => {
         cy.contains('Cypress Test Appointment').click();
         cy.get('#title').focus().type(' Updated');
         cy.get('#clothing').click();
         cy.get('.MuiMenu-list li').eq(1).click();
         cy.get('#description').focus().type(' Updated');
         cy.server();
         cy.route({method: 'PATCH', url: `${apiUrl}**`}).as('updateAppointment');
         cy.contains('Save').click();
         cy.wait('@updateAppointment').its('status').should('eq', 200);
     })

    it('delete an Appointment', () => {
        cy.contains('Cypress Test Appointment Updated').click();
        cy.server();
        cy.route({method: 'DELETE', url: `${apiUrl}**`}).as('deleteAppointment');
        cy.contains('Delete').click();
        cy.wait('@deleteAppointment').its('status').should('eq', 200);
    })

})