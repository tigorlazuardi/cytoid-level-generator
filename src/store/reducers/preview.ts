import { PREVIEW_SET } from '../types'
import { IPreviewAction } from '../actions/preview'

export interface PreviewState {
  image: WindowBase64 | null
  preview_music: File | null
  [key: string]: any
}

const initialState: PreviewState = {
  image: null,
  preview_music: null,
}

export default (state = initialState, action: IPreviewAction) => {
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
