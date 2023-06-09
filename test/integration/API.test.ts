import axios from "axios";

test("should return the boards via API request", async () => {
    const response = await axios({
        url: "http://localhost:3000/boards",
        method: "get"
    });
    const boards = response.data;
    expect(boards).toHaveLength(1);
    const [board] = boards;
    expect(board.name).toBe("Projeto 1");
});

test("should return the columns of a board via API request", async () => {
    const response = await axios({
        url: "http://localhost:3000/boards/1/columns",
        method: "get"
    });
    const columns = response.data;
    expect(columns).toHaveLength(3);
    const [column1, column2, column3] = columns;

    expect(column1.name).toBe("Coluna A");
    expect(column2.name).toBe("Coluna B");
    expect(column3.name).toBe("Coluna C");
});
test("should return the cards of a board via API request", async () => {
    const response = await axios({
        url: "http://localhost:3000/boards/1/columns/1/cards",
        method: "get"
    });
    const cards = response.data;
    expect(cards).toHaveLength(3);
    const [card1, card2, card3] = cards;
    expect(card1.title).toBe("Atividade 1");
    expect(card2.title).toBe("Atividade 2");
    expect(card3.title).toBe("Atividade 3");
});