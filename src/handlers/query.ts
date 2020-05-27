export type QueryBase = {}

export interface Query<R> extends QueryBase {}

export interface QueryHandler<T, R>{
  handle(query: T): Promise<R>;
}

export class SampleQueryResult {
  constructor(public bar: number) {}
}
