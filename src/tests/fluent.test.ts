describe('fluent builder', () => {

  enum Command {
    Read = 'read',
    Write = 'write',
  }

  type Frame = number[];

  class FooSensorFluentBuilder {
    private frame: Frame = []

    startFrame(): this {
      this.frame = [0xAB];
      return this;
    }

    addCommand(command: Command): this {
      switch (command) {
        case Command.Read:
          this.frame.push(0x01);
          break;
        case Command.Write:
          this.frame.push(0x02)
          break;
      }
      return this;
    }

    xor(): this {
      this.frame.push(0xF2);
      return this;
    }

    build(): Frame {
      return this.frame;
    }
  }


  it('should create sensor frame', () => {
    const builder = new FooSensorFluentBuilder();

    builder
      .startFrame()
      .addCommand(Command.Read)
      .xor()

    const frame = builder.build();


    expect(frame).toEqual([0xAB, 0x01, 0xF2])

  })
})