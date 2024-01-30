import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OptionCalculator } from '../../shared/types/interfaces/option-calculator';
import { Observable } from 'rxjs';
import { MockDataService } from './mock/mock.data.service';

@Injectable({ providedIn: 'root' })
export class CalculatorHttpService {
  #http = inject(HttpClient);
  #mockData = inject(MockDataService);

  public getCalculator(): Observable<OptionCalculator[]> {
    //return this.#http.get<OptionCalculator[]>('http://localhost:8080/calculator');
    return this.#mockData.getAllOptions();
  }
}
