import { createAction, props } from '@ngrx/store';

type TypePayload = {
  num: number;
};

export const increment = createAction('[Counter] Increment');
export const decrement = createAction('[Counter] Decrement');
export const multiply = createAction(
  '[Counter] Multiply',
  props<TypePayload>()
);
export const divide = createAction('[Counter] Divide', props<TypePayload>());

export const reset = createAction('[Counter] Reset');
