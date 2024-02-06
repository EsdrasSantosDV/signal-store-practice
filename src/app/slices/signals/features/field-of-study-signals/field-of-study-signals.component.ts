import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { materialModules } from '../../../../shared/utils/material/material-module';
import { BooksStore } from '../../data-access/facade-calculator';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-field-of-study-signals',
  standalone: true,
  imports: [...materialModules, AsyncPipe],
  templateUrl: './field-of-study-signals.component.html',
  styleUrl: './field-of-study-signals.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers:[BooksStore]
})
export class FieldOfStudySignalsComponent {
  readonly store = inject(BooksStore);


}
