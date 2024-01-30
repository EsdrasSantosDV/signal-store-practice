import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { FieldBaseGeneric } from '../../utils/dynamic-forms/field-base-generic';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { FieldControlService } from '../../utils/dynamic-forms/field-control.service';
import { MatButtonModule } from '@angular/material/button';
import { GenericControlDynamicComponent } from '../generic-control-dynamic/generic-control-dynamic.component';

@Component({
  selector: 'app-generic-forms-dynamic',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    GenericControlDynamicComponent,
    MatButtonModule
],
  templateUrl: './generic-forms-dynamic.component.html',
  styleUrl: './generic-forms-dynamic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericFormsDynamicComponent implements OnInit {
  @Input({
    required: true,
    alias: 'fieldsGeneric',
  })
  fieldsGeneric: FieldBaseGeneric<string>[] = [];
  @Output() formEmitValues = new EventEmitter<any>();

  form!: FormGroup;
  constructor(private fieldServiceGeneric: FieldControlService) {}

  ngOnInit() {
    this.form = this.fieldServiceGeneric.toFormGroup(
      this.fieldsGeneric as FieldBaseGeneric<string>[]
    );
  }

  searchFilters() {
    if (this.form.valid) {
      this.formEmitValues.emit(this.form.getRawValue());
    } else {
      this.form.markAllAsTouched();
    }
  }

  resetForm() {
    this.form.reset();
  }
}
