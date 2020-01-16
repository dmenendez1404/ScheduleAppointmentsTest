// import { Command, CommandConsumer } from './commands.models';
// import { errors } from "./errors";
//
// class CommandService {
//     private readonly pubSub: PubSub;
//     actionRegistry: Map<String, String>;
//
//     constructor(pubSub: PubSub) {
//         this.pubSub = pubSub;
//         this.actionRegistry = new Map<String, String>();
//     }
//
//     async emit(command: Command): Promise<void> {
//         if (command) {
//             const topicName = this.actionRegistry.get(command.action);
//             if (CommandService.isNullOrUndefined(topicName)) {
//                 console.warn("Unknown action name for command: " + JSON.stringify(command));
//                 return
//             }
//
//             await this.pubSub.topic(topicName!.toString()).publishJSON(command);
//         }
//     }
//
//     registerConsumer(consumer: CommandConsumer): Promise<void> {
//         consumer.actions()
//             .filter(action => this.actionRegistry.get(action) !== undefined)
//             .map(action => {
//                 //TODO: find a better way to handle errors in typescript
//                 return Promise.reject(errors.ACTION_ALREADY_EXISTS + " " + action)
//             });
//         consumer.actions()
//             .map(action => {
//                 this.actionRegistry.set(action, consumer.id());
//             });
//         return Promise.resolve();
//     }
//
//     async sendError(command: Command, error: any) {
//         // const _: ExecutionError = {
//         //     action: command.action,
//         //     userId: command.userId,
//         //     createdId: uuid.v4(),
//         //     createdTime: Timestamp.now(),
//         //     commandId: command.createdId,
//         //     version: version,
//         //     payload: error
//         // };
//
//         // await this.db.collection().add(executionError)
//     }
//
//     static isNullOrUndefined(value: any) {
//         return value === null || value === undefined
//     }
// }
//
// export default new CommandService(new PubSub());
