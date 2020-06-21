/**
 * A reactive collection class.
 * @constructor
 * @param {ddpCollection} ddpCollection - Instance of @see ddpCollection class.
 * @param {Object} [settings={skip:0,limit:Infinity,sort:false}] - Object for declarative reactive collection slicing.
 * @param {Function} [filter=undefined] - Filter function.
 */
export class ddpReactiveCollection {
    constructor(ddpCollectionInstance: any, settings: any, filter: any);
    _skip: any;
    _limit: any;
    _sort: any;
    _length: {
        result: number;
    };
    _data: any[];
    _rawData: any[];
    _reducers: any[];
    _tickers: any[];
    _ones: any[];
    _first: any;
    _syncFunc: (skip: any, limit: any, sort: any) => any;
    _changeHandler: any;
    started: boolean;
    /**
     * Removes document from the local collection copies.
     * @private
     * @param {number} i - Document index in this._rawData array.
     */
    private _removeItem;
    /**
     * Adds document to local the collection this._rawData according to used sorting if specified.
     * @private
     * @param {Object} newEl - Document to be added to the local collection.
     * @return {boolean} - The first element in the collection was changed
     */
    private _smartUpdate;
    /**
     * Adds reducer.
     * @private
     * @param {ddpReducer} reducer - A ddpReducer object that needs to be updated on changes.
     */
    private _activateReducer;
    /**
     * Adds reactive object.
     * @private
     * @param {ddpReactiveDocument} o - A ddpReactiveDocument object that needs to be updated on changes.
     */
    private _activateReactiveObject;
    /**
     * Removes reducer.
     * @private
     * @param {ddpReducer} reducer - A ddpReducer object that does not need to be updated on changes.
     */
    private _deactivateReducer;
    /**
     * Removes reactive object.
     * @private
     * @param {ddpReactiveDocument} o - A ddpReducer object that does not need to be updated on changes.
     */
    private _deactivateReactiveObject;
    /**
     * Sends new object state for every associated reactive object.
     * @public
     */
    public _updateReactiveObjects(): void;
    /**
     * Updates ddpReactiveCollection settings.
     * @public
     * @param {Object} [settings={skip:0,limit:Infinity,sort:false}] - Object for declarative reactive collection slicing.
       * @return {this}
     */
    public settings(settings?: any): this;
    /**
   * Updates the skip parameter only.
   * @public
   * @param {number} - A number of documents to skip.
     * @return {this}
   */
    public skip(n: any): this;
    /**
   * Updates the limit parameter only.
   * @public
   * @param {number} - A number of documents to observe.
     * @return {this}
   */
    public limit(n: any): this;
    /**
     * Stops reactivity. Also stops associated reactive objects.
     * @public
     */
    public stop(): void;
    /**
     * Starts reactivity. This method is being called on instance creation.
     * Also starts every associated reactive object.
     * @public
     */
    public start(): void;
    /**
     * Sorts local collection according to specified function.
     * Specified function form {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/sort}.
     * @public
     * @param {Function} f - A function used for sorting.
     * @return {this}
     */
    public sort(f: Function): this;
    /**
     * Returns reactive local collection with applied sorting, skip and limit.
     * This returned array is being mutated within this class instance.
     * @public
     * @return {Array} - Local collection with applied sorting, skip and limit.
     */
    public data(): any[];
    /**
     * Runs a function every time a change occurs.
     * @param {Function} f - Function which recieves new collection at each change.
     * @public
     */
    public onChange(f: Function): ddpOnChange;
    /**
     * Maps reactive local collection to another reactive array.
     * Specified function form {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/map}.
     * @public
     * @param {Function} f - Function that produces an element of the new Array.
     * @return {ddpReducer} - Object that allows to get reactive mapped data @see ddpReducer.
     */
    public map(f: Function): ddpReducer;
    /**
     * Reduces reactive local collection.
     * Specified function form {@link https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce}.
     * @public
     * @param {Function} f - Function to execute on each element in the array.
     * @param {*} initialValue - Value to use as the first argument to the first call of the function.
     * @return {ddpReducer} - Object that allows to get reactive object based on reduced reactive local collection @see ddpReducer.
     */
    public reduce(f: Function, initialValue: any): ddpReducer;
    /**
     * Reactive length of the local collection.
     * @public
     * @return {Object} - Object with reactive length of the local collection. {result}
     */
    public count(): any;
    /**
     * Returns a reactive object which fields are always the same as the first object in the collection.
     * @public
     * @param {Object} [settings={preserve:false}] - Settings for reactive object. Use {preserve:true} if you want to keep object on remove.
     * @return {ddpReactiveDocument} - Object that allows to get reactive object based on reduced reactive local collection @see ddpReactiveDocument.
     */
    public one(settings?: any): ddpReactiveDocument;
}
import { ddpOnChange } from "./ddpOnChange.js";
import { ddpReducer } from "./ddpReducer.js";
import { ddpReactiveDocument } from "./ddpReactiveDocument.js";
