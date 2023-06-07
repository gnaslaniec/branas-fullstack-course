import PgPromiseConnection from "../../src/infra/database/PgPromiseConnection";
import CardRepositoryDatabase from "../../src/infra/repository/CardRepositoryDatabase";
import CardService from "../../src/service/CardService";

test("should list the cards", async function() {
    const connection = new PgPromiseConnection();
    const cardRepository = new CardRepositoryDatabase(connection);
    const cardService = new CardService(cardRepository);
    const cards = await cardService.getCards(1);
    expect(cards).toHaveLength(3);
});