/**
 * DDP collection class.
 * @constructor
 * @param {String} name - Collection name.
 * @param {simpleDDP} server - simpleDDP instance.
 */
export class ddpCollection {
    constructor(name: any, server: any);
    _name: any;
    _server: any;
    _filter: boolean;
    /**
     * Allows to specify specific documents inside the collection for reactive data and fetching.
     * Important: if you change filter function it won't change for the already created reactive objects.
     * @public
     * @param {Function} f - Filter function, recieves as arguments object, index and array.
     * @return {this}
     */
    public filter(f: Function): this;
    /**
     * Imports data inside the collection and emits all relevant events.
     * Both string and JS object types are supported.
     * @public
     * @param {string|Object} data - EJSON string or EJSON or js object.
     */
    public importData(data: string | any): void;
    /**
     * Exports data from the collection.
     * @public
     * @param {string} [format='string'] - If 'string' then returns EJSON string, if 'raw' returns js object.
     * @return {string|Object}
     */
    public exportData(format?: string): string | any;
    /**
     * Returns collection data based on filter and on passed settings. Supports skip, limit and sort.
     * Order is 'filter' then 'sort' then 'skip' then 'limit'.
     * @public
     * @param {Object} [settings={skip:0,limit:Infinity,sort:null}] - Skip and limit are numbers or Infinity,
     * sort is a standard js array sort function.
     * @return {Object}
     */
    public fetch(settings?: any): any;
    /**
     * Returns reactive collection object.
     * @see ddpReactiveCollection
     * @public
     * @param {Object} [settings={skip:0,limit:Infinity,sort:null}]
     * @return {ddpReactiveCollection} - @see ddpReactiveCollection
     */
    public reactive(settings?: any): ddpReactiveCollection;
    /**
     * Returns change observer.
     * @see ddpOnChange
     * @public
     * @param {Function} f
     * @param {Function} filter
     * @return {ddpOnChange} - @see ddpOnChange
     */
    public onChange(f: Function, filter: Function): ddpOnChange;
}
import { ddpReactiveCollection } from "./ddpReactiveCollection.js";
import { ddpOnChange } from "./ddpOnChange.js";
