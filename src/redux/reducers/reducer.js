import { ActionTypes } from "../constants/action-types";
const intialState = {
  list: [
    {
      id: 1,
      name: "darsh",
    },
    {
      id: 2,
      name: "xyz",
    },
  ],
};

export const reducer = (state = intialState, { type, payload }) => {
  console.log(state);
  switch (type) {
    case ActionTypes.ADD_ITEMS:
      return { ...state, list: [...state.list, payload] };
    default:
      return state;
  }
};
