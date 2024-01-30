import { Injectable } from '@angular/core';
import { FieldBaseGeneric } from './field-base-generic';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root',
})
export class FieldControlService {
  toFormGroup(fields: FieldBaseGeneric<string>[]) {
    const group: any = {};

    fields.forEach((field) => {
      group[field.key] = field.required
        ? new FormControl(field.value || '', Validators.required)
        : new FormControl(field.value || '');
    });
    return new FormGroup(group);
  }
}
