import Card from "./Card";

export default class Column {
    cards: Card[] = [];

    constructor(
        readonly name: string,
        readonly hasEstimative: boolean
    ) {
        if (name === "") throw new Error("Name is required!");
    }

    addCard(card: Card) {
        this.cards.push(card);
    }

    getEstimative() {
        return this.cards.reduce((total, card) => {
            total += card.estimative;
            console.log(total);
            return total;
        }, 0);
    }
}