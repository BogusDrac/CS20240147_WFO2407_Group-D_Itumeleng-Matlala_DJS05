/**
 * Increments the `value` property in the state by 1.
 * 
 * @function
 * @param {Object} state - The current state object.
 * @param {number} state.value - The current value to be incremented.
 * @returns {Object} - A new state object with `value` incremented by 1.
 */
export const increment = (state) => {
    // Spread the existing state and add 1 to the `value` property
    return {
        ...state,
        value: state.value + 1,
    };
};

/**
 * Decrements the `value` property in the state by 1.
 * 
 * @function
 * @param {Object} state - The current state object.
 * @param {number} state.value - The current value to be decremented.
 * @returns {Object} - A new state object with `value` decremented by 1.
 */
export const decrement = (state) => {
    // Spread the existing state and subtract 1 from the `value` property
    return {
        ...state,
        value: state.value - 1,
    };
};

/**
 * Resets the `value` property in the state to 0.
 * 
 * @function
 * @param {Object} state - The current state object.
 * @returns {Object} - A new state object with `value` set to 0.
 */
export const reset = (state) => {
    // Return a new state with `value` set to 0, ignoring previous state
    return {
        value: 0,
    };
};

/**
 * Action handlers mapping for managing state.
 * 
 * @constant
 * @type {Object}
 * @property {Function} Add - The `increment` function to add 1 to `value`.
 * @property {Function} Subtract - The `decrement` function to subtract 1 from `value`.
 * @property {Function} Reset - The `reset` function to reset `value` to 0.
 */
export const actions = {
    Add: increment,      // Maps to increment action
    Subtract: decrement, // Maps to decrement action
    Reset: reset,        // Maps to reset action
};
