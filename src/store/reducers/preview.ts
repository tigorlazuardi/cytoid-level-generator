import { PREVIEW_SET } from '../types'
import { AnyAction } from 'redux'

export interface PreviewState {
  image: WindowBase64 | null
  preview_music: File | null
  [key: string]: any
}

export interface PreviewAction extends AnyAction {
  type: string
  payload: {
    mod: 'string'
    value: any
  }
}

const initialState: PreviewState = {
  image: null,
  preview_music: null,
}

export default (state = initialState, action: PreviewAction) => {
  const { type, payload } = action
  switch (type) {
    case PREVIEW_SET:
      return {
        [state[payload.mod]]: payload.value,
        ...state,
      }
    default:
      return state
  }
}
