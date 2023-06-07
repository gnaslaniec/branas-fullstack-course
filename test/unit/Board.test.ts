import Board from "../../src/domain/entity/Board";
import Card from "../../src/domain/entity/Card";
import Column from "../../src/domain/entity/Column";

test("should create a board", () => {
    const board = new Board("any_board_name");
    expect(board.name).toEqual("any_board_name");
});

test("should not create a board without a name", () => {
    expect(() => new Board("")).toThrow(new Error("Name is required!"));
});

test("should create a board with 3 columns, add cards and calculate the total estimative", () => {
    const board = new Board("any_board_name");
    board.addColumn(new Column("Todo", true));
    board.addColumn(new Column("Doing", true));
    board.addColumn(new Column("Done", false));
    board.addCard("Todo", new Card("Atividade 1", 3));
    board.addCard("Todo", new Card("Atividade 2", 2));
    board.addCard("Todo", new Card("Atividade 3", 1));
    console.log(board);
    const estimative = board.getEstimative();
    expect(board.columns).toHaveLength(3);
    expect(estimative).toBe(6);
});