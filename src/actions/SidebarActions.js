export const SIDEBAR_EVENT = "SIDEBAR_EVENT";

export function handleClickSidebar() {
  return function (dispatch) {
    dispatch({
      type: SIDEBAR_EVENT,
    });
  };
}
