import {ChangeDetectionStrategy, Component, Input} from '@angular/core';

import {FieldBaseGeneric} from "../../utils/dynamic-forms/field-base-generic";
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TypeControlEnum} from "../../utils/dynamic-forms/type-control.enum";
import {materialModules} from "../../utils/material/material-module";

@Component({
  selector: 'app-generic-control-dynamic',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule, ...materialModules],
  templateUrl: './generic-control-dynamic.component.html',
  styleUrl: './generic-control-dynamic.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericControlDynamicComponent {
  @Input() fieldGeneric!: FieldBaseGeneric<string>;
  @Input() form!: FormGroup;
  protected readonly TypeControlEnum = TypeControlEnum;
}
