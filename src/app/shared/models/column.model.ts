export interface Column<T> {
  /** Chave de acesso ao dado no objeto */
  property: keyof T;
  /** Cabeçalho da coluna */
  label: string;
  /** Alinhamento (opcional) */
  align?: 'left' | 'center' | 'right';
  /** Largura mínima (opcional) */
  minWidth?: string;
}
