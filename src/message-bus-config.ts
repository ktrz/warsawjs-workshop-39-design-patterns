import { MessageBus } from './message-bus'
import { IoC } from './IoC/IoC'
import { SampleQuery, SampleQueryHandler } from './handlers/sample-query-handler'

const messageBus = IoC.get(MessageBus);

messageBus.register(SampleQuery, SampleQueryHandler);