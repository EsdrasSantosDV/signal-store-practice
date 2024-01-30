import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { FieldBaseGeneric } from '../../utils/dynamic-forms/field-base-generic';
import { materialModules } from '../../utils/material/material-module';
import { ReactiveFormsModule } from '@angular/forms';
import { GenericFormsDynamicComponent } from '../generic-forms-dynamic/generic-forms-dynamic.component';

@Component({
  selector: 'app-filter-generic',
  standalone: true,
  imports: [
    ...materialModules,
    ReactiveFormsModule,
    GenericFormsDynamicComponent
],
  templateUrl: './filter-generic.component.html',
  styleUrl: './filter-generic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterGenericComponent {
  @Input({ required: true }) formHeaderTitle!: string;
  @Input({ required: true }) fieldsGeneric: FieldBaseGeneric<string>[] = [];

  submitAction($event: any) {}
}
