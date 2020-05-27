import { injectable } from 'inversify'

export interface TempConverter {
  toCelsius(farenheit: number): number;
}

@injectable()
export class MyTempConverter implements TempConverter {
  toCelsius(farenheit: number): number {
    return farenheit + 100;
  }

}