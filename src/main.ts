import 'reflect-metadata';
import { injectable, multiInject } from 'inversify';
import { TemperatureSensor } from './temperature-sensor'
import { Human, OldPeopleRepository, Strategy, YoungPeopleRepository } from './strategy'
import { Types } from './IoC/types'
import { MessageBus } from './message-bus'

@injectable()
export class Main {

  constructor(
    private sensor: TemperatureSensor,
    @multiInject(Types.Strategy) private strategies: Strategy[],
    private oldPeopleRepository: OldPeopleRepository,
    private youngPeopleRepository: YoungPeopleRepository,
    private messageBus: MessageBus,
  ) {}

  public async Start(): Promise<void> {
    console.log('start');

    // console.log(this.sensor.read());




    // const humans = [new Human('Tomasz', 15), new Human('Jan', 21)];
    //
    // humans.forEach(human => {
    //   this.strategies.find(strategy => strategy.isApplicable(human))?.execute(human)
    // });
    //
    // console.log(`Young people: ${this.youngPeopleRepository.count}`);
    // console.log(`Old people: ${this.oldPeopleRepository.count}`);




    const messageString = '{"SampleQuery": {"foo": "5"}}';
    const messagePackage = JSON.parse(messageString)

    const result = await this.messageBus.execute(messagePackage);

    console.log(result)
  }
}