import 'reflect-metadata'

import { TemperatureSensor } from '../temperature-sensor'
import { It, Mock } from 'moq.ts'
import { Http } from '../http'
import { TempConverter } from '../temp-converter'

describe('temperature sensor', () => {
  it('should return temperature in Celsius', () => {
    // GIVEN
    const httpMock = new Mock<Http>();
    httpMock
      .setup(x => x.get(It.IsAny<string>()))
      .returns({ data: 5 })

    const tempConverterMock = new Mock<TempConverter>();
    tempConverterMock
      .setup(x => x.toCelsius(It.IsAny<number>()))
      .callback(x => x);

    const sut = new TemperatureSensor(httpMock.object(), tempConverterMock.object());

    // WHEN
    const temperature = sut.read();

    // THEN
    expect(temperature).toBe(5);
  })
})