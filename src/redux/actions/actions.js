import { ActionTypes } from "../constants/action-types";

export const addItems = (items) => {
  return {
    type: ActionTypes.ADD_ITEMS,
    payload: items,
  };
};
