export interface Condition {
    field: string;
    operator: '>' | '<' | '==' | '!=';
    value: number | string | boolean;
    type?: 'AND' | 'OR';
  }