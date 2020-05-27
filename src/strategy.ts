import { injectable } from 'inversify'

export class Human {
  constructor(private name = '', public age = 0) {}
}

@injectable()
export class YoungPeopleRepository {
  private people: Human[] = [];

  add(human: Human) {
    this.people.push(human)
  }

  get count() {
    return this.people.length;
  }
}

@injectable()
export class OldPeopleRepository {
  private people: Human[] = [];

  add(human: Human) {
    this.people.push(human)
  }

  get count() {
    return this.people.length;
  }
}

export interface Strategy {
  isApplicable(human: Human): boolean;

  execute(human: Human): void;
}

@injectable()
export class IsYoungStrategy implements Strategy {

  constructor(private peopleRepository: YoungPeopleRepository) {}

  execute(human: Human): void {
    this.peopleRepository.add(human);
  }

  isApplicable(human: Human): boolean {
    return human.age <= 18;
  }
}

@injectable()
export class IsOldStrategy implements Strategy {
  constructor(private peopleRepository: OldPeopleRepository) {}

  execute(human: Human): void {
    this.peopleRepository.add(human);
  }

  isApplicable(human: Human): boolean {
    return human.age > 18;
  }
}