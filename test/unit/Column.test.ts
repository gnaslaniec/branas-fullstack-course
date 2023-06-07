import Column from "../../src/domain/entity/Column";

test("should create a new column", () => {
    const column = new Column("any_column", true);
    expect(column.name).toEqual("any_column");
    expect(column.hasEstimative).toBeTruthy();
});

test("should not create a column without a name", () => {
    expect(() => new Column("", true)).toThrow(new Error("Name is required!"));
});