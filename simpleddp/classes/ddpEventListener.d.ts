/**
 * DDP event listener class.
 * @constructor
 * @param {String} eventname - Event name.
 * @param {Function} f - Function to run when event is fired.
 * @param {simpleDDP} ddplink - simpleDDP instance.
 */
export class ddpEventListener {
    constructor(eventname: any, f: any, ddplink: any);
    _ddplink: any;
    _eventname: any;
    _f: any;
    _started: boolean;
    /**
   * Stops listening for server `event` messages.
     * You can start any stopped @see ddpEventListener at any time using `ddpEventListener.start()`.
   * @public
   */
    public stop(): void;
    /**
     * Usually you won't need this unless you stopped the @see ddpEventListener.
     * @see ddpEventListener starts on creation.
   * @public
   */
    public start(): void;
}
