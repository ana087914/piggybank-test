# PiggyBank tests

Deze repository bevat de End-to-End-tests en API-tests voor PiggyBank.

## End-to-End-tests

De map `e2e-tests` bevat vier Cypress-scenario's:

1. Inloggen als Sara.
2. Geld overmaken in euro.
3. Transacties bekijken.
4. Geen geld overmaken zonder bedrag.

Start eerst backend en frontend. Kopieer daarna de `.cy.js`-bestanden naar de map `cypress/e2e` van de frontend en voer uit:

```bash
npx cypress open
```

## API-tests

Importeer `api-tests/PiggyBank_API_Tests.postman_collection.json` in Postman. Start eerst de backend en klik daarna op **Run collection**.

De collectie test alle endpoints voor accounts en transacties. De edge-cases zonder bedrag en met een lege rekeningnaam documenteren ook bekende fouten in de applicatie.
