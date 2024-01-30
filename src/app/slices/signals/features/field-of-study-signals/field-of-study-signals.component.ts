import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { materialModules } from '../../../../shared/utils/material/material-module';
import { BooksStore, FacadeCalculator } from '../../data-access/facade-calculator';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-field-of-study-signals',
  standalone: true,
  imports: [...materialModules, AsyncPipe],
  templateUrl: './field-of-study-signals.component.html',
  styleUrl: './field-of-study-signals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FieldOfStudySignalsComponent {
  facadeCalculator = inject(FacadeCalculator);
  vm = this.facadeCalculator.vm$;
  loadOptions$ = this.facadeCalculator.loadOptions();

  store=inject(BooksStore)
}
