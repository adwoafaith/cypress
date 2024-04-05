describe("email verification", () => {
    // configure mailslurp with the api plugin
    beforeEach(() => {
        cy.mailslurp({
            apiKey: '79099a8c23bd27bab3cd24ebf7199165ca261d4a90ac0916d81504b2e88fe569'
        }).then((MailSlurp) => {
            MailSlurp.createInbox().then((inbox=inboxDto) => {
                inboxId = inboxDto.id;
                emailAddress = inboxDto.emailAddress;
            });
        });
    });

    it('login', function() {
        cy.visit("https://playground.mailslurp.com");
        cy.get('@inboxId').then((inboxId) => {
            expect(inboxId).to.exist;
        });
        cy.get('@emailAddress').then((emailAddress) => {
            expect(emailAddress).to.contain('@mailslurp');
        });
    });
});
