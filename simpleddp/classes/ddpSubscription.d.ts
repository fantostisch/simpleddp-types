/**
 * DDP subscription class.
 * @constructor
 * @param {String} pubname - Publication name.
 * @param {Array} args - Subscription arguments.
 * @param {simpleDDP} ddplink - simpleDDP instance.
 */
export class ddpSubscription {
    constructor(pubname: any, args: any, ddplink: any);
    _ddplink: any;
    pubname: any;
    args: any;
    _nosub: boolean;
    _started: boolean;
    _ready: boolean;
    selfReadyEvent: any;
    selfNosubEvent: any;
    /**
     * Runs everytime when `nosub` message corresponding to the subscription comes from the server.
     * @public
     * @param {Function} f - Function, event handler.
     * @return {ddpEventListener}
     */
    public onNosub(f: Function): any;
    /**
     * Runs everytime when `ready` message corresponding to the subscription comes from the server.
     * @public
     * @param {Function} f - Function, event handler.
     * @return {ddpEventListener}
     */
    public onReady(f: Function): any;
    /**
     * Returns true if subsciprtion is ready otherwise false.
     * @public
     * @return {boolean}
     */
    public isReady(): boolean;
    /**
     * Returns true if subscription is stopped otherwise false.
     * @public
     * @return {boolean}
     */
    public isStopped(): boolean;
    /**
     * Returns a promise which resolves when subscription is ready or rejects when `nosub` message arrives.
     * @public
     * @return {Promise}
     */
    public ready(): Promise<any>;
    /**
     * Returns a promise which resolves when corresponding `nosub` message arrives.
     * Rejects when `nosub` comes with error.
     * @public
     * @return {Promise}
     */
    public nosub(): Promise<any>;
    /**
     * Returns true if subscription is active otherwise false.
     * @public
     * @return {Promise}
     */
    public isOn(): Promise<any>;
    /**
     * Completly removes subscription.
     * @public
     */
    public remove(): void;
    /**
     * Stops subscription and return a promise which resolves when subscription is stopped.
     * @public
     * @return {Promise}
     */
    public stop(): Promise<any>;
    /**
     * Returns subscription id.
     * @private
     * @return {Promise}
     */
    private _getId;
    /**
     * Start the subscription. Runs on class creation.
     * Returns a promise which resolves when subscription is ready.
     * @public
     * @param {Array} args - Subscription arguments.
     * @return {Promise}
     */
    public start(args: any[]): Promise<any>;
    subscriptionId: any;
    /**
     * Restart the subscription. You can also change subscription arguments.
     * Returns a promise which resolves when subscription is ready.
     * @public
     * @param {Array} [args] - Subscription arguments.
     * @return {Promise}
     */
    public restart(args?: any[]): Promise<any>;
}
