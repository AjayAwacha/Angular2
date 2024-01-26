import { createAction, props } from "@ngrx/store";
// import { Action } from "@ngrx/store";

export const increment = createAction(
    '[Counter] increment',
    props<{value: number}>()
);

export const decrement = createAction(
    '[Counter] decrement',
    props<{value: number}>()
)

// export const INCREMENT_TYPE = '[Counter] increment';

// export class IncrementAction implements Action {
//     readonly type = INCREMENT_TYPE;

//     constructor(public value: number) {}
// }

// export type CounterType = IncrementAction;