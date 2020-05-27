export interface Command {}

export interface CommandHandler<T> {
  handle(command: T): void;
}
