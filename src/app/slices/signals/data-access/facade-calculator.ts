import { inject } from '@angular/core';
import { OptionCalculator } from '../../../shared/types/interfaces/option-calculator';
import { CalculatorHttpService } from '../../../core/services/calculator-http-service';
import { filter, tap } from 'rxjs';
import { toObservable, toSignal } from '@angular/core/rxjs-interop';
import { CalculatorService } from '../utils/calculator.shutting.hard.service';
import {
  getState,
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';

export type CalculatorState = {
  optionsCalculator: OptionCalculator[];
  result: number;
  expression: string;
  isValidation: boolean;
  lastExpression: string;
  isCalculate: boolean;
};

export const initialState: CalculatorState = {
  optionsCalculator: [],
  result: 0,
  expression: '',
  isValidation: true,
  lastExpression: '',
  isCalculate: false,
};

export const BooksStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withMethods(
    (
      store,
      httpCalculator = inject(CalculatorHttpService),
      calculatorService = inject(CalculatorService)
    ) => ({
      loadOptions() {
        return httpCalculator.getCalculator().pipe(
          tap(value =>
            patchState(store, {
              optionsCalculator: value,
            })
          )
        );
      },
      newActionCalculate(option: OptionCalculator) {
        patchState(store, {
          expression: store.expression() + option.visibleValue,
          isCalculate: false,
        });
      },
      cleanExpression() {
        patchState(store, {
          expression: '',
          lastExpression: '',
          isValidation: true,
          isCalculate: false,
        });
      },
      calculateExpression(expression: string) {
        const expressionSlice = expression.slice(0, expression.length - 1);
        const result = calculatorService.calculateExpression(expressionSlice);
        patchState(store, {
          result: result,
          lastExpression: expressionSlice,
          expression: result.toString(),
          isValidation: true,
          isCalculate: true,
        });
      },
    })
  ),
  withHooks({
    onInit({ loadOptions, expression, cleanExpression, calculateExpression }) {
      toSignal(loadOptions());
      toSignal(
        toObservable(expression).pipe(
          filter(value => value.length > 0 && value[value.length - 1] === 'C'),
          tap(() => {
            cleanExpression();
          })
        )
      );
      toSignal(
        toObservable(expression).pipe(
          filter(value => value.length > 0 && value[value.length - 1] === '='),
          tap(value => {
            calculateExpression(value);
          })
        )
      );
    },
    onDestroy() {
      console.log('onDestroy');
    },
  })
);
//
// @Injectable({ providedIn: 'root' })
// export class FacadeCalculator {
//   private state = signal(initialState);
//   readonly vm$ = this.state.asReadonly();
//   expressionClean$ = toObservable(this.state).pipe(
//     filter(
//       state =>
//         state.expression.length > 0 &&
//         state.expression[state.expression.length - 1] === 'C'
//     ),
//     tap(state =>
//       this.state.update(state => ({
//         ...state,
//         expression: '',
//         lastExpression: '',
//         isValidation: true,
//         isCalculate: false,
//       }))
//     )
//   );
//   #httpCalculator = inject(CalculatorHttpService);
//   #calculatorService = inject(CalculatorService);
//   expresionFinalizated$ = toObservable(this.state).pipe(
//     filter(
//       state =>
//         state.expression.length > 0 &&
//         state.expression[state.expression.length - 1] === '='
//     ),
//     tap(state => {
//       console.log('expresionFinalizated$', state);
//
//       const expression = state.expression.slice(0, state.expression.length - 1);
//       const result = this.#calculatorService.calculateExpression(expression);
//       this.state.update(state => ({
//         ...state,
//         result: result,
//         lastExpression: expression,
//         expression: result.toString(),
//         isValidation: true,
//         isCalculate: true,
//       }));
//     })
//   );
//
//   constructor() {
//     effect(() => {
//       console.log('effect', this.state());
//     });
//
//     this.expresionFinalizated$.subscribe(value => {
//       console.log('expression$', value);
//     });
//
//     this.expressionClean$.subscribe(value => {
//       console.log('expressionClean$', value);
//     });
//   }
//
//   loadOptions() {
//     return this.#httpCalculator.getCalculator().pipe(
//       tap(value =>
//         this.state.update(state => ({
//           ...state,
//           optionsCalculator: value,
//         }))
//       )
//     );
//   }
//
//   newActionCalculate(option: OptionCalculator) {
//     this.state.update(state => ({
//       ...state,
//       expression: state.expression + option.visibleValue,
//       isCalculate: false,
//     }));
//   }
// }
