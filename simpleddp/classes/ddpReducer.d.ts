/**
 * A reducer class for a reactive document.
 * @constructor
 * @param {ddpReactiveCollection} ddpReactiveCollectionInstance - Instance of @see ddpReactiveCollection class.
 * @param {Function} reducer - Function for a reduction.
 * @param {*} initialValue - Initial value for a reduction function.
 */
export class ddpReducer<U> {
    constructor<T>(ddpReactiveCollectionInstance: any, reducer: (previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U);
    _ddpReactiveCollectionInstance: any;
    _reducer: any;
    _started: boolean;
    _data: {
        result: any;
    };
    _tickers: any[];
    _initialValue: any;
    /**
   * Forcibly reduces reactive data.
   * @public
   */
    public doReduce(): void;
    /**
     * Starts reactiveness for the reduced value of the collection.
     * This method is being called on instance creation.
     * @public
     */
    public start(): void;
    /**
     * Stops reactiveness.
     * @public
     */
    public stop(): void;
    /**
     * Returns reactive reduce.
     * @public
     * @return {Object} - {result:reducedValue}
     */
    public data(): any;
    /**
     * Runs a function every time a change occurs.
     * @param {Function} f - Function which recieves a reduced value at each change.
     * @public
     */
    public onChange(f: (reducedValue: U) => void): ddpOnChange;
}
import { ddpOnChange } from "./ddpOnChange.js";
