import PgPromiseConnection from "../../src/infra/database/PgPromiseConnection";
import BoardRepositoryDatabase from "../../src/infra/repository/BoardRepositoryDatabase";
import BoardRepositoryMemory from "../../src/infra/repository/BoardRepositoryMemory";
import BoardService from "../../src/service/BoardService"

test("should list the boads", async function () {
    const connection = new PgPromiseConnection();
    const boardRepository = new BoardRepositoryDatabase(connection);
    //const boardRepository = new BoardRepositoryMemory();
    const  boardService = new BoardService(boardRepository);
    const boards = await boardService.getBoards();
    expect(boards).toHaveLength(1);
    const [board] = boards;
    expect(board.name).toBe("Projeto 1");
})
