import Card from "../entity/Card";

export default interface CardRepository {
    findAllByIdColumn(idColumn: number): Promise<Card[]>;
    //getTotalEstimativeByIdColumn(idColumn: number): Promise<number>;
}