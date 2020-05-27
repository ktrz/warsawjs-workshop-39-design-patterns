import { Query, QueryHandler, SampleQueryResult } from './query'
import { injectable } from 'inversify'

export class SampleQuery implements Query<SampleQueryResult> {
  constructor(public foo: string) {}
}

@injectable()
export class SampleQueryHandler implements QueryHandler<SampleQuery, SampleQueryResult> {
  async handle(query: SampleQuery): Promise<SampleQueryResult> {
    return new SampleQueryResult(+query.foo);
  }
}
