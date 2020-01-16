export const version = 'v1.0.0';
export declare type Context<T = object> = T;

export type Command = {
    action: String
    context: Context
    payload: any
}

export interface CommandConsumer {
    consumeCommandMessage(command: Command): Promise<void>;

    // list of possible actions for that consumer
    actions(): String[];

    // the name of the topic for the pub/sub
    id(): String;
}


