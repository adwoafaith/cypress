cy.maildevGetLastMessage().then((email) => {
    expect(email.subject).to.equal("I'm the last email sent !");
  });