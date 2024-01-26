import { Action, createReducer, on } from "@ngrx/store";

import { decrement, increment } from "./counter.action";
// import { CounterType, INCREMENT_TYPE } from "./counter.action";

const initialState = 0;

export const counterReducer = createReducer(
    initialState,
    on(increment, (state, action) => {
        return state + action.value;
    }),
    on(decrement, (state, action) => {
        return state - action.value
    })
)

// Alternative Approach to create reducer without using createReducer function
// export function counterReducer(state = initialState, action: CounterType | Action) {
//     if (action.type ===INCREMENT_TYPE) {
//         return state + (action as CounterType).value;
//     }
//     return state;
// }