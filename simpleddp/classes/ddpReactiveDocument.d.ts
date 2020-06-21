/**
 * A reactive document class.
 * @constructor
 * @param {ddpReactiveCollection} ddpReactiveCollectionInstance - Instance of @see ddpReactiveCollection class.
 * @param {Object} [settings={preserve:false}] - Settings for reactive object. When preserve is true,
 * reactive object won't change when corresponding object is being deleted.
 */
export class ddpReactiveDocument {
    constructor(ddpReactiveCollectionInstance: any, settings: any);
    _ddpReactiveCollectionInstance: any;
    _started: boolean;
    _data: {};
    _tickers: any[];
    _preserve: boolean;
    /**
     * Updates reactive object from local collection copies.
     * @private
     * @param {Object} newState - Document's new state.
     */
    private _update;
    /**
     * Starts reactiveness for the document. This method is being called on instance creation.
     * @public
     */
    public start(): void;
    /**
     * Stops reactiveness for the document.
     * @public
     */
    public stop(): void;
    /**
     * Returns reactive document.
     * @public
     * @return {Object}
     */
    public data(): any;
    /**
     * Runs a function every time a change occurs.
     * @param {Function} f - Function which recieves a new value at each change.
     * @public
     */
    public onChange(f: Function): ddpOnChange;
    /**
     * Change reactivity settings.
     * @param {Object} settings
     * @param {boolean} settings.preserve - When preserve is true,reactive object won't change when corresponding object is being deleted.
     * @public
     */
    public settings({ preserve }: {
        preserve: boolean;
    }): void;
}
import { ddpOnChange } from "./ddpOnChange.js";
