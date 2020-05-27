import { Command, CommandHandler } from './command'
import { injectable } from 'inversify'

class SampleCommand implements Command {
  constructor(public foo: number) {}
}

@injectable()
export class SampleCommandHandler implements CommandHandler<SampleCommand> {
  handle(command: SampleCommand): void {
  }
}