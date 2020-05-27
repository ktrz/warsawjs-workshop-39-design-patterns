import 'reflect-metadata';
import { Human, IsOldStrategy, IsYoungStrategy, OldPeopleRepository, Strategy, YoungPeopleRepository } from '../strategy'

describe('strategies', () => {
  let youngPeopleRepository = new YoungPeopleRepository()
  let oldPeopleRepository = new OldPeopleRepository()
  const strategies: Strategy[] = [
    new IsYoungStrategy(youngPeopleRepository),
    new IsOldStrategy(oldPeopleRepository)
  ]

  const young: Human[] = [];
  const old: Human[] = [];
  it('strategy', () => {
    const human: Human = new Human('Human1', 15);

    if (human.age <= 18) {
      young.push(human)
    } else {
      old.push(human)
    }
  })

  it('strategy', () => {
    const human: Human = new Human('Human1', 15);

    const strategy = strategies.find(strategy => strategy.isApplicable(human))
    strategy?.execute(human)

    expect(youngPeopleRepository.count).toBe(1);
  })
})