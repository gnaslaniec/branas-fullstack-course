import CardRepository from "../domain/repository/CardRepository";

export default class CardService {
    constructor(readonly cardRepository: CardRepository) {}

    async getCards(idColumn: number) {
        const cards = this.cardRepository.findAllByIdColumn(idColumn);
        return cards;
    }
}