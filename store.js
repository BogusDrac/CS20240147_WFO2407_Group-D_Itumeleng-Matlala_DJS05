import { actions } from "./actions.js"

/**
 * Creates a Redux store to manage state and listeners.
 * 
 * @function
 * @param {Object} initialState - The initial state object.
 * @returns {Object} - A store object with `getState`, `dispatch` and `subscribe` methods
 */

export const createStore = (initialState) => {
    // Initialising the store's state with the initial state
    let state = initialState
    // Set of listeners to be notified on state updates
    let listeners = new Set()

    return {

        /**
         * Gets the current state
         * 
         * @function 
         * @returns {Object} - The current state object
         */

        getState: () => state,


        /**
         * Dispatches an action to update the state
         * 
         * @function
         * @param {string} actionType - Matches a key in `actions`
         * @returns {string} - The dispatched action type
         */

        dispatch: (actionType) => {
            // Finds the action function corresponding to the actionType in `actions`
            const actionFunction = actions[actionType]

            // If a matching action function is found, update the state
            if (actionFunction) {
                state = actionFunction(state)
                // Notify all listeners of the updates state
                listeners.forEach(listener => listener(state))
            }

            return actionType
        },


        /**
         * Subscribes a listener to a state changes.
         * 
         * @function 
         * @param {Function} listener - A callback function to run when the state changes
         * @returns {Function} - An unsubscribe function to remove the listener
         */

        subscribe: (listener) => {
            // Adds the listener to the set of listeners
            listeners.add(listener)
            // Returns an unsubscribe function to remove this listener
            return () => listeners.delete(listener)
        }
    }
}