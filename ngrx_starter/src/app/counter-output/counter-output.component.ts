import { Component } from '@angular/core';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { counterSelect, doubleSelect } from '../store/counter.select';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  counter$: Observable<number>;
  doubleCount$: Observable<number>;

  constructor(
    private store: Store<{counter: number}>
    ) {
      // this.counter$ = this.store.select('counter');
      this.counter$ = this.store.select(counterSelect);
      this.doubleCount$ = this.store.select(doubleSelect);
    }
}
