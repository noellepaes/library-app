export interface Loan {
  id: string;
  borrowedDate: string;
  returnDate?: string;
  book: {
    id: string;
    title: string;
  };
  person: {
    cpf: string;
    name: string;
  };
}
