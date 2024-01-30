import { FieldBaseGeneric } from './field-base-generic';
import { TypeControlEnum } from './type-control.enum';

export class DropdownField extends FieldBaseGeneric<string> {
  override controlType = TypeControlEnum.DROP_DOWN;
}
