export interface Slogan {
  province: string
  slogan: string
}

export interface SloganState {
  isLoading: boolean
  slogans: Slogan[]
  error?: string
}

export const SLOGAN_LOAD_REQUEST = "SLOGAN_LOAD_REQUEST"
export const SLOGAN_LOAD_SUCCESS = "SLOGAN_LOAD_SUCCESS"
export const SLOGAN_LOAD_FAILURE = "SLOGAN_LOAD_FAILURE"

interface SloganLoadRequestAction {
  type: typeof SLOGAN_LOAD_REQUEST
  payload: SloganState
}

interface SloganLoadSuccessAction {
  type: typeof SLOGAN_LOAD_SUCCESS
  payload: SloganState
}

interface SloganLoadFailureAction {
  type: typeof SLOGAN_LOAD_FAILURE
  payload: SloganState
}

export type SloganActionTypes =
  | SloganLoadRequestAction
  | SloganLoadSuccessAction
  | SloganLoadFailureAction
