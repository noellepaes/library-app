import { FieldConfig } from "../../../shared/models/field-config";
import { Loan } from "../model/loan.model";

export const LOAN_FIELDS: FieldConfig<Loan>[] = [
  { property: 'book',       label: 'Book ID',      type: 'text', required: true },
  { property: 'person',    label: 'Person CPF',   type: 'text', required: true },
  { property: 'borrowedDate', label: 'Borrowed Date',type: 'date', required: true },
  { property: 'returnDate',   label: 'Return Date',  type: 'date' }
];
