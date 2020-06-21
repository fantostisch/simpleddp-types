/**
 * DDP change listener class.
 * @constructor
 * @param {Object} obj - Describes changes of interest.
 * @param {*} inst - Event handler instance.
 * @param {simpleDDP} [listenersArray = 'onChangeFuncs'] - Property name of event handler instance, array of listeners.
 */
export class ddpOnChange {
    constructor(obj: any, inst: any, listenersArray?: string);
    _obj: any;
    _inst: any;
    _isStopped: boolean;
    _listenersArray: string;
    /**
     * Stops change listener.
     * @public
     */
    public stop(): void;
    /**
     * Start change listener. This method is being called on instance creation.
     * @public
     */
    public start(): void;
}
