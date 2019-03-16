export type Option = "+" | "-" | "*" | "/" | "%" | "=";

export type Nums = "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "0" | "+/-" | ".";

export type Clears = "AC" | "C";

export type Expr = Option | Nums | Clears;

export interface Store {
  input: string;
  option: string;
  result: number;
}