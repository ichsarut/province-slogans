import {
  SLOGAN_LOAD_REQUEST,
  SLOGAN_LOAD_SUCCESS,
  SloganActionTypes,
  Slogan
} from "./types"

export function sloganLoadRequest(): SloganActionTypes {
  return {
    type: SLOGAN_LOAD_REQUEST,
    payload: { isLoading: true, slogans: [] }
  }
}

export function sloganLoadSuccess(slogans: Slogan[]): SloganActionTypes {
  return {
    type: SLOGAN_LOAD_SUCCESS,
    payload: { isLoading: false, slogans: slogans }
  }
}

export function sloganLoadFailure(error: string): SloganActionTypes {
  return {
    type: SLOGAN_LOAD_SUCCESS,
    payload: { isLoading: false, slogans: [], error: error }
  }
}
