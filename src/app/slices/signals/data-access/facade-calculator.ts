import { effect, inject, Injectable, signal } from '@angular/core';
import { OptionCalculator } from '../../../shared/types/interfaces/option-calculator';
import { CalculatorHttpService } from '../../../core/services/calculator-http-service';
import { filter, tap } from 'rxjs';
import { takeUntilDestroyed, toObservable } from '@angular/core/rxjs-interop';
import { CalculatorService } from '../utils/calculator.shutting.hard.service';

export type CalculatorState = {
  optionsCalculator: OptionCalculator[];
  result: number;
  expression: string;
  isValidation: boolean;
  lastExpression: string;
  isCalculate:boolean;
};

export const initialState: CalculatorState = {
  optionsCalculator: [],
  result: 0,
  expression: '',
  isValidation: true,
  lastExpression: '',
  isCalculate:false,
};


@Injectable({ providedIn: 'root' })
export class FacadeCalculator {
  private state = signal(initialState);
  readonly vm$ = this.state.asReadonly();
  #httpCalculator = inject(CalculatorHttpService);
  #calculatorService = inject(CalculatorService);

  
  expresionFinalizated$=toObservable(this.state).pipe(
    filter(state=>state.expression.length>0 && state.expression[state.expression.length-1]==='='),
    tap((state) => {
      console.log('expresionFinalizated$', state);
      
        const expression=state.expression.slice(0,state.expression.length-1);
        const result=this.#calculatorService.calculateExpression(expression);
        this.state.update(state=>({...state,
          result:result,
          lastExpression:expression,
          expression:result.toString(),
          isValidation:true,
          isCalculate:true,
        }));
    }));



  expressionClean$=toObservable(this.state).pipe(
    filter(state=>state.expression.length>0 && state.expression[state.expression.length-1]==='C'),
    tap(state=>this.state.update(state=>({...state,expression:'',lastExpression:'',isValidation:true,isCalculate:false}))),
  );




  constructor() {
    effect(() => {
      console.log('effect', this.state());
    });

    this.expresionFinalizated$.subscribe((value) => {
      console.log('expression$', value);
    });

    this.expressionClean$.subscribe((value) => {
      console.log('expressionClean$', value);
    });

  }

  loadOptions() {
    return this.#httpCalculator.getCalculator().pipe(
      tap(value =>
        this.state.update(state => ({
          ...state,
          optionsCalculator: value,
        }))
      )
    );
  }

  newActionCalculate(option: OptionCalculator) {
    this.state.update(state => ({
      ...state,
      expression: state.expression + option.visibleValue,
      isCalculate:false,
    }));
  }
}
