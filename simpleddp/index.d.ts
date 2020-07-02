declare module 'simpleddp' {
export default simpleDDP;

export interface userAuth {
    id: string
    token: string
    tokenExpires: any //todo: date
    type: string
}

/**
 * Creates an instance of simpleDDP class. After being constructed, the instance will
 * establish a connection with the DDP server and will try to maintain it open.
 * @version 2.2.4
 */
declare class simpleDDP {
    /**
     * @param {Object} options
     * @param {string} options.endpoint - The location of the websocket server. Its format depends on the type of socket you are using. If you are using https connection you have to use wss:// protocol.
     * @param {Function} options.SocketConstructor - The constructor function that will be used to construct the socket. Meteor (currently the only DDP server available) supports websockets and SockJS sockets. So, practically speaking, this means that on the browser you can use either the browser's native WebSocket constructor or the SockJS constructor provided by the SockJS library. On the server you can use whichever library implements the websocket protocol (e.g. faye-websocket).
     * @param {boolean} [options.autoConnect=true] - Whether to establish the connection to the server upon instantiation. When false, one can manually establish the connection with the connect method.
     * @param {boolean} [options.autoReconnect=true] - Whether to try to reconnect to the server when the socket connection closes, unless the closing was initiated by a call to the disconnect method.
     * @param {number} [options.reconnectInterval=1000] - The interval in ms between reconnection attempts.
     * @param {boolean} [options.clearDataOnReconnection=true] - Whether to clear all collections data after a reconnection. This invokes fake `removed` messages on every document.
     * @param {number} [options.maxTimeout=undefined] - Maximum wait for a response from the server to the method call. Default no maxTimeout.
     * @param {Array} [plugins] - Array of plugins.
     * @return {simpleDDP} - A new simpleDDP instance.
     * @example
     * var opts = {
     *    endpoint: "ws://someserver.com/websocket",
     *    SocketConstructor: WebSocket,
     *    reconnectInterval: 5000
     * };
     * var server = new simpleDDP(opts);
     */
    constructor(opts: any, plugins?: any[]);
    _id: number;
    _opGenId: () => number;
    _opts: any;
    ddpConnection: any;
    subs: any[];
    /**
        All collections data recieved from server.

        @type Object
    */
    collections: any;
    onChangeFuncs: any[];
    /**
        Whether the client is connected to server.

        @type Boolean
    */
    connected: boolean;
    maxTimeout: any;
    clearDataOnReconnection: any;
    tryingToConnect: any;
    tryingToDisconnect: boolean;
    willTryToReconnect: any;
    connectedEvent: ddpEventListener;
    connectedEventRestartSubs: ddpEventListener;
    disconnectedEvent: ddpEventListener;
    addedEvent: ddpEventListener;
    changedEvent: ddpEventListener;
    removedEvent: ddpEventListener;
    /**
     * undefined when user is not logged in or equal to user._id when user is logged in.
     * simpleddp-plugin-login needs to be installed and used.
     */
    public userId?: string
    /**
     * Restarts all subs.
     * @private
     */
    private restartSubs;
    /**
     * Use this for fetching the subscribed data and for reactivity inside the collection.
     * @public
     * @param {string} name - Collection name.
     * @return {ddpCollection}
     */
    public collection<T>(name: string): ddpCollection<T>;
    /**
     * Dispatcher for ddp added messages.
     * @private
     * @param {Object} m - DDP message.
     */
    private dispatchAdded;
    /**
     * Dispatcher for ddp changed messages.
     * @private
     * @param {Object} m - DDP message.
     */
    private dispatchChanged;
    /**
     * Dispatcher for ddp removed messages.
     * @private
     * @param {Object} m - DDP message.
     */
    private dispatchRemoved;
    /**
     * Connects to the ddp server. The method is called automatically by the class constructor if the autoConnect option is set to true (default behavior).
     * @public
     * @return {Promise} - Promise which resolves when connection is established.
     */
    public connect(): Promise<any>;
    /**
     * Disconnects from the ddp server by closing the WebSocket connection. You can listen on the disconnected event to be notified of the disconnection.
     * @public
     * @return {Promise} - Promise which resolves when connection is closed.
     */
    public disconnect(): Promise<any>;
    /**
     * Calls a remote method with arguments passed in array.
     * @public
     * @param {string} method - Name of the server publication.
     * @param {Array} [arguments] - Array of parameters to pass to the remote method. Pass an empty array or don't pass anything if you do not wish to pass any parameters.
     * @param {boolean} [atBeginning=false] - If true puts method call at the beginning of the requests queue.
     * @return {Promise} - Promise object, which resolves when receives a result send by server and rejects when receives an error send by server.
     * @example
     * server.apply("method1").then(function(result) {
     *	console.log(result); //show result message in console
     *    if (result.someId) {
     *        //server sends us someId, lets call next method using this id
     *        return server.apply("method2",[result.someId]);
     *    } else {
     *        //we didn't recieve an id, lets throw an error
     *        throw "no id sent";
     *    }
     * }).then(function(result) {
     *    console.log(result); //show result message from second method
     * }).catch(function(error) {
     *    console.log(result); //show error message in console
     * });
     */
    public apply(method: string, args: any, atBeginning?: boolean): Promise<any>;
    /**
     * Calls a remote method with arguments passed after the first argument.
     * Syntactic sugar for @see apply.
     * @public
     * @param {string} method - Name of the server publication.
     * @param {...any} [args] - List of parameters to pass to the remote method. Parameters are passed as function arguments.
     * @return {Promise} - Promise object, which resolves when receives a result send by server and rejects when receives an error send by server.
     */
    public call(method: string, ...args?: any[]): Promise<any>;
    /**
     * Tries to subscribe to a specific publication on server.
     * Starts the subscription if the same subscription exists.
     * @public
     * @param {string} pubname - Name of the publication on server.
     * @param {Array} [arguments] - Array of parameters to pass to the remote method. Pass an empty array or don't pass anything if you do not wish to pass any parameters.
     * @return {ddpSubscription} - Subscription.
     */
    public sub(pubname: string, args: any): ddpSubscription;
    /**
     * Tries to subscribe to a specific publication on server.
     * Syntactic sugar for @see sub.
     * @public
     * @param {string} pubname - Name of the publication on server.
     * @param {...any} [args] - List of parameters to pass to the remote method. Parameters are passed as function arguments.
     * @return {ddpSubscription} - Subscription.
     */
    public subscribe(pubname: string, ...args?: any[]): ddpSubscription;
    /**
     * Starts listening server for basic DDP event running f each time the message arrives.
     * @public
     * @param {string} event - Any event name from DDP specification.
     * Default suppoted events: `connected`, `disconnected`, `added`, `changed`, `removed`, `ready`, `nosub`, `error`, `ping`, `pong`.
     * @param {Function} f - Function which receives a message from a DDP server as a first argument each time server is invoking event.
     * @return {ddpEventListener}
     * @example
     * server.on('connected', () => {
     *     // you can show a success message here
     * });
     *
     * server.on('disconnected', () => {
     *     // you can show a reconnection message here
     * });
     */
    public on(event: string, f: Function): ddpEventListener;
    /**
     * Stops all reactivity.
     */
    stopChangeListeners(): void;
    /**
     * Removes all documents like if it was removed by the server publication.
     * @public
     * @return {Promise} - Resolves when data is successfully removed.
     */
    public clearData(): Promise<any>;
    /**
     * Imports the data like if it was published by the server.
     * @public
     * @param {Object|string} data - ESJON string or EJSON.
     * @return {Promise} - Resolves when data is successfully imported.
     */
    public importData(data: any | string): Promise<any>;
    /**
     * Exports the data
     * @public
     * @param {string} [format='string'] - Possible values are 'string' (EJSON string) and 'raw' (EJSON).
     * @return {Object|string} - EJSON string or EJSON.
     */
    public exportData(format?: string): any | string;
    /**
     * Marks every passed @see ddpSubscription object as ready like if it was done by the server publication.
     * @public
     * @param {Array} subs - Array of @see ddpSubscription objects.
     * @return {Promise} - Resolves when all passed subscriptions are marked as ready.
     */
    public markAsReady(subs: any[]): Promise<any>;

    /**
     * Call this method to login with any Meteor.Accounts login provider.
     * simpleddp-plugin-login needs to be installed and used.
     * @param auth
     * @return Promise which resolves to the object with userId of the logged in user when the login succeeds, or rejects when it fails.
     */
    public login(auth: {
        password?: string
        user: {
            username?: string
            email?: string
        }
    }): Promise<userAuth>

    /**
     * Call this method to logout.
     * simpleddp-plugin-login needs to be installed and used.
     * @return Promise which resolves to undefined when the logout succeeds, or rejects when it fails.
     */
    public logout(): Promise<undefined>
}
import { ddpEventListener } from "./classes/ddpEventListener";
import { ddpCollection } from "./classes/ddpCollection";
import { ddpSubscription } from "./classes/ddpSubscription";
}
