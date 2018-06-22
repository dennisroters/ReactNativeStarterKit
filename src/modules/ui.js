/**
 * Constants
 */
export const UI_START_LOADING = 'UI_START_LOADING';
export const UI_STOP_LOADING = 'UI_STOP_LOADING';



/**
 * Action Creators
 */
export const uiStartLoading = () => {
  return {type: UI_START_LOADING};
};

export const uiStopLoading = () => {
  return {type: UI_STOP_LOADING};
};



/**
 * Reducer
 */
const initialState = {
  isLoading: true
};

export default ui = (state = initialState, action) => {
  switch (action.type) {
    case UI_START_LOADING:
      return {...state,
        isLoading: true
      };

    case UI_STOP_LOADING:
      return {...state,
        isLoading: false
      };

    default:
      return state;
  }
};