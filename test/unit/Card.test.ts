import Card from "../../src/domain/entity/Card";

test("should create a new Card", () => {
    const card = new Card("any_card_title", 3);
    expect(card.title).toBe("any_card_title");
    expect(card.estimative).toBe(3);
});

test("should not create a card without title", () => {
    expect(() => new Card("", 3)).toThrow(new Error("Title is required!"));
});

test("should not create a card with a negative estimative", () => {
    expect(() => new Card("any_card_title", -1)).toThrow(new Error("Estimative must be positive!"));
});