import { FieldBaseGeneric } from './field-base-generic';
import { TypeControlEnum } from './type-control.enum';

export class TextBoxField extends FieldBaseGeneric<string> {
  override controlType = TypeControlEnum.TEXT_BOX;
}
