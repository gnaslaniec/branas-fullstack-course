import PgPromiseConnection from "../../src/infra/database/PgPromiseConnection"
import ColumnRepositoryDatabase from "../../src/infra/repository/ColumnRepositoryDatabase";
import ColumnService from "../../src/service/ColumnService";


test("should list the columns", async function () {
    const connection = new PgPromiseConnection();
    const columnrRepository = new ColumnRepositoryDatabase(connection);
    const columnService = new ColumnService(columnrRepository);
    const columns = await columnService.getColumns(1);
    expect(columns).toHaveLength(3);
    const [column1, column2, column3] = columns;
    expect(column1.name).toBe("Coluna A");
    expect(column2.name).toBe("Coluna B");
    expect(column3.name).toBe("Coluna C");
});