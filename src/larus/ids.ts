/**
 * @module larus/ids
 */

/**
 * Counter for getUid.
 * 
 * @type {number}
 * @private
 */
let uidCounter_ = 0;

let larus_uid = Symbol.for("larus_uid");

/**
 * Gets a unique ID for an object. This mutates the object so that further calls
 * with the same object as a parameter returns the same value. Unique IDs are
 * generated as a strictly increasing sequence. Copied from ol.util.
 * 
 * @param {Object}
 *            obj The object to get the unique ID for.
 * @return {number} The unique ID for the object.
 * @api
 */
export function getUid(obj: object) {
    return obj[larus_uid] || (obj[larus_uid] = ++uidCounter_);
}

/**
 * Larus version.
 * 
 * @type {string}
 */
export const VERSION = 'latest';