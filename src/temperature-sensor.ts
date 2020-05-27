import { Http } from './http'
import { TempConverter } from './temp-converter'
import { inject, injectable } from 'inversify'
import { Types } from './IoC/types'

export type Temperature = number;

@injectable()
export class TemperatureSensor {










  constructor(
    @inject(Types.Http) private http: Http,
    @inject(Types.TempConverter) private tempConverter: TempConverter
  ) {}












  read(): Temperature {
    const response = this.http.get('http://123.123.123.123:1234/read')
    const temp = response.data
    return this.tempConverter.toCelsius(temp);
  }
}