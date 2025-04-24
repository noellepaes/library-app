
export interface FieldConfig<T> {
  property: Extract<keyof T, string>;
  label: string;
  type: 'text' | 'number' | 'date' | 'checkbox';
  required?: boolean;
}
