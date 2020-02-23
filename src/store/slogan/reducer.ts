import {
  SloganState,
  SloganActionTypes,
  SLOGAN_LOAD_SUCCESS,
  SLOGAN_LOAD_REQUEST,
  SLOGAN_LOAD_FAILURE
} from "./types"

const initialState: SloganState = {
  isLoading: false,
  slogans: []
}

export function sloganReducer(
  state = initialState,
  action: SloganActionTypes
): SloganState {
  switch (action.type) {
    case SLOGAN_LOAD_REQUEST:
      return action.payload
    case SLOGAN_LOAD_SUCCESS:
      return action.payload
    case SLOGAN_LOAD_FAILURE:
      return action.payload
    default:
      return state
  }
}
