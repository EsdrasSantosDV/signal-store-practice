export interface OptionCalculator {
  id: number;
  name: string;
  description: string;
  value: number | null;
  visibleValue: string;
  type: OptionTypeEnum;
}

export enum OptionTypeEnum {
  VALUE,
  OPERATION,
  RESULT,
}
