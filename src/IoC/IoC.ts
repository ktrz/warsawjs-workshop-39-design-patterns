// These two imports must go first!
import 'reflect-metadata';
import { Types } from './types';
import { Container } from 'inversify';
import { Main } from '../main';
import { TemperatureSensor } from '../temperature-sensor'
import { AxiosHttp, Http } from '../http'
import { MyTempConverter, TempConverter } from '../temp-converter'
import { IsOldStrategy, IsYoungStrategy, OldPeopleRepository, Strategy, YoungPeopleRepository } from '../strategy'
import { MessageBus } from '../message-bus'

const IoC = new Container();

try {
  IoC.bind(TemperatureSensor).toSelf();
  IoC.bind<Http>(Types.Http).to(AxiosHttp)
  IoC.bind<TempConverter>(Types.TempConverter).to(MyTempConverter)
  IoC.bind(YoungPeopleRepository).toSelf().inSingletonScope()
  IoC.bind(OldPeopleRepository).toSelf().inSingletonScope()
  IoC.bind<Strategy>(Types.Strategy).to(IsYoungStrategy)
  IoC.bind<Strategy>(Types.Strategy).to(IsOldStrategy)
  IoC.bind(MessageBus).toSelf();

  IoC.bind<Main>(Main).toSelf().inSingletonScope().whenTargetIsDefault();
} catch (ex) {
  console.log('IoC exception:', ex);
}

export { IoC };
