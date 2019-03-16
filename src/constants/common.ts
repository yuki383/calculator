export const update = "update";
export const calculate = "calculate";
export const clear = "clear";

export interface Action {
  type: string;
  payload: {
    expr: string;
  };
}