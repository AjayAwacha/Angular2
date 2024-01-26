import { state } from '@angular/animations';
import { createSelector} from '@ngrx/store'

export const counterSelect = (state: {counter: number}) => state.counter;

export const doubleSelect = createSelector(
    counterSelect,
    (state) => state * 2
)