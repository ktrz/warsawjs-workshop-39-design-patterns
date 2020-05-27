
import { Message } from './handlers/core'
import { QueryHandler } from './handlers/query'
import { injectable } from 'inversify'
import { IoC } from './IoC/IoC'

@injectable()
export class MessageBus {
  register(message, handler) {
    IoC.bind(message.name).to(handler);
  }

  execute<T>(message: Message): Promise<T> {
    const messageName = Object.keys(message)[0];

    const messageBody = message[messageName];

    const handler: QueryHandler<unknown, T> = IoC.get(messageName);

    return handler.handle(messageBody);
  }
}
