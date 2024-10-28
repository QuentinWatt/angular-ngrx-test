import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { CommonModule } from '@angular/common';
import { increment, decrement } from '../../store/counter/counter.actions';
import { AppState } from '../../store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button (click)="increment()">Increment</button>
    <button (click)="decrement()">Decrement</button>
    <div>Current Count: {{ counter$ | async }}</div>
  `,
})
export class CounterComponent {
  counter$: Observable<number>;

  constructor(private readonly store: Store<AppState>) {
    this.counter$ = this.store.select((state: AppState) => state.counter);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }
}
