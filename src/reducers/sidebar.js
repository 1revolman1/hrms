import { SIDEBAR_EVENT } from "../actions/SidebarActions";

const initialState = {
  open: true,
};

export function sidebarReducer(state = initialState, action) {
  switch (action.type) {
    case SIDEBAR_EVENT:
      return { ...state, open: !state.open };
    default:
      return state;
  }
}
