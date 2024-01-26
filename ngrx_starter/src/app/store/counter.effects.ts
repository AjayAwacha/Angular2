import { createEffect, Actions, ofType } from '@ngrx/effects';
import { decrement, increment } from './counter.action';
import { tap } from 'rxjs';
import { Injectable } from '@angular/core';

import { Store } from '@ngrx/store';

@Injectable()
export class CounterEffects {

    constructor(
        private action$: Actions,
        ) { }

    saveCount = createEffect(() => {
        return this.action$.pipe(
            ofType(increment, decrement),
            tap((action) => {
                console.log(action);
                localStorage.setItem('counter', action.value.toString());
            })
        )
    }, { dispatch: false })

}