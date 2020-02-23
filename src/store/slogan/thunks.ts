import { Action } from "redux"
import {
  sloganLoadRequest,
  sloganLoadSuccess,
  sloganLoadFailure
} from "./actions"
import { RootState } from "../"
import { ThunkAction } from "redux-thunk"

import { SloganServiceImpl } from "../../core/usecases/SloganService"
import { SloganRepositoryImpl } from "../../core/infrastructures/SloganRepositoryImpl"

export const loadSlogans = (): ThunkAction<
  void,
  RootState,
  unknown,
  Action<string>
> => async dispatch => {
  dispatch(sloganLoadRequest())
  try {
    const sloganRepo = new SloganRepositoryImpl()
    const sloganService = new SloganServiceImpl(sloganRepo)
    const slogans = await sloganService.GetSlogans()
    dispatch(sloganLoadSuccess(slogans))
  } catch (error) {
    console.error(error)
    dispatch(sloganLoadFailure(error))
  }
}
